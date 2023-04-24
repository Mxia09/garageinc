from django.urls import path

from .views import technicians, technician_details

urlpatterns = [
    path("technicians/", technicians, name="create_technician"),
    path("technicians/<int:id>/", technician_details, name="technician_details")
]
