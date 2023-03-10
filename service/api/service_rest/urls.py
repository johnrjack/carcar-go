from django.urls import path
from .views import technician_list, technicians, show_appointments, show_service_history


urlpatterns = [
    path("technicians/", technician_list, name="create_technician"),
    path("technicians/<int:pk>",technicians, name=""),
    path("appointments/", show_appointments, name="create_appointments"),
    path("appointments/<int:pk>/", show_service_history, name="service_history"),
]
