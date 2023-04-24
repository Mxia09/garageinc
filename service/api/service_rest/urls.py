from django.urls import path

from .views import technicians

urlpatterns = [
    path("technicians/", technicians, name="create_technician")
]
