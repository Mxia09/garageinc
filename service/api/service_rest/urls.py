from django.urls import path

from .views import technicians, technician_details, appointments, update_appt_status_cancel

urlpatterns = [
    path("technicians/", technicians, name="create_technician"),
    path("technicians/<int:id>/", technician_details, name="technician_details"),
    path("appointments/", appointments , name="create_appointment"),
    path("appointments/<int:id>/cancel/", update_appt_status_cancel )
]
