from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
import json

# Will be using ModelEncoder from common/json.py
from common.json import ModelEncoder
from .models import Technician, Appointment, AutomobileVO

class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = ["first_name", "last_name", "employee_id"]

class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = ["date_time", "reason", "status", "vin", "customer", "technician", "id"]

    encoders = {
        "technician": TechnicianEncoder(),
    }



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
    # Appointment list
    if(request.method == "GET"):
        appointments = Appointment.objects.all()


        return JsonResponse({"appointments": appointments}, encoder=AppointmentEncoder)
    # Create an appointment
    else:
        content = json.loads(request.body)
        try:
            employee_id = content["technician"]
            technician = Technician.objects.get(employee_id=employee_id)
            content["technician"] = technician

        except Technician.DoesNotExist:
            return JsonResponse({"message": "Invalid Appointment"}, status=400)

        appointment = Appointment.objects.create(**content)

        return JsonResponse(appointment, encoder=AppointmentEncoder, safe=False)

@require_http_methods(["GET", "DELETE"])
def appointment_details(request, id):
    # Check if appointment exists
    try:
        appointment = Appointment.objects.get(id=id)
    except Appointment.DoesNotExist:
        return JsonResponse({"message": "Appointment does not exist"}, status=400)

    # Appointment Details
    if request.method == "GET":
        return JsonResponse(appointment, encoder=AppointmentEncoder, safe=False)

    # Delete Appointment
    else:
        count, _ = Appointment.objects.filter(id=id).delete()
        # returns boolean value based on if a value was deleted
        return JsonResponse({"deleted": count > 0})

@require_http_methods(["PUT"])
def update_appt_status_cancel(request, id):
    appointment = Appointment.objects.get(id=id)
    appointment.status = "canceled"
    appointment.save()

    return JsonResponse(appointment, encoder=AppointmentEncoder, safe=False)

@require_http_methods(["PUT"])
def update_appt_status_finish(request, id):
    appointment = Appointment.objects.get(id=id)
    appointment.status = "finished"
    appointment.save()

    return JsonResponse(appointment, encoder=AppointmentEncoder, safe=False)
