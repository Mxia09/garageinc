from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
import json

# Will be using ModelEncoder from common/json.py
from common.json import ModelEncoder
from .models import Technician, Appointment

class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = ["first_name", "last_name", "employee_id"]

class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = ["date_time", "reason", "status", "vin", "customer", "technician"]


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


@require_http_methods(["GET", "DELETE"])
# --- note ---
# Currently techs are found based on their id in the database
def technician_details(request, id):
    # Must first check if our technician exists
    try:
        technician = Technician.objects.get(id=id)
    except Technician.DoesNotExist:
        return JsonResponse({"message": "Technician does not exist"}, status=400)

    # Getting tech details
    if request.method == "GET":
        return JsonResponse(technician, encoder=TechnicianEncoder, safe=False)

    # Deleting a tech
    else:
        count, _ = Technician.objects.filter(id=id).delete()
        # returns boolean value based on if a value was deleted
        return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST"])
def appointments(request):
    pass
