from django.urls import path
from .views import (
    list_technicians,
    show_technician,
    list_appointments,
    show_appointment,
)

urlpatterns= [
    # technician paths
    path("technicians/", list_technicians, name="list_technician"),
    path("technicians/", list_technicians, name="create_technician"),
    path("technician/<int:id>/",show_technician, name="show_technician"),

    # appointment paths
    path("appointments/", list_appointments, name="list_appointments"),
    path("appointments/", list_appointments, name="create_appointment"),
    path("appointment/<int:id>/", show_appointment, name="show_appointment"),
]

