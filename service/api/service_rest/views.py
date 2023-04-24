from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
import json

# Will be using ModelEncoder from common/json.py
from common.json import ModelEncoder
from .models import Technician

class TechnicianListEncoder(ModelEncoder):
    model = Technician
    properties = ["first_name", "last_name", "employee_id"]

@require_http_methods(["GET", "POST"])
def technicians(request):
    # Listing technicians
    if request.method == "GET":
        technicians = Technician.objects.all()

        return JsonResponse({"technicians": technicians}, encoder=TechnicianListEncoder)
    else:
        # Creating a technician
        content = json.loads(request.body)
        pass
