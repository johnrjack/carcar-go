from django.urls import path
from .views import technician_list, technicians, show_appointments, cancel_appointment


urlpatterns = [
    path("technicians/", technician_list, name="create_technician"),
    path("technicians/<int:pk>",technicians, name=""),
    path("appointments/", show_appointments, name="create_appointments"),
    # path("appointments/<int:vin>/", service_history, name="service_history"),
    path("appointments/<int:pk>/", cancel_appointment, name="cancel-appointment")
]
