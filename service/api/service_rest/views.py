from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
import json

# Will be using ModelEncoder from common/json.py
from common.json import ModelEncoder
from .models import Technician

class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = ["first_name", "last_name", "employee_id"]



@require_http_methods(["GET", "POST"])
def technicians(request):
    # Listing technicians
    if request.method == "GET":
        technicians = Technician.objects.all()

        return JsonResponse({"technicians": technicians}, encoder=TechnicianEncoder)
    else:
        # Creating a technician via POST request
        try:
            content = json.loads(request.body)
            technician = Technician.objects.create(**content)
            print(technician)
            return JsonResponse(technician, encoder=TechnicianEncoder, safe=False)
        except:
            return JsonResponse({"message": "Invalid Technician"}, status=400)
