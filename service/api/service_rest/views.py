from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.http import    require_http_methods
import json
from common.json import ModelEncoder
from .models import AutomobileVO, Technician,  ServiceAppointment
# Create your views here.


class ServiceAppointmentEncoder(ModelEncoder):
    model = ServiceAppointment
    properties = [
        "vin",
        "customer",
        "date",
        "time",
        "reason",
        "technician",
    ]

class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "name",
        "employee_number",
    ]

require_http_methods(["GET", "POST"])
def technician_list(request):
    if request.method == "GET":
        technician = Technician.objects.all()
        return JsonResponse(
            {"technician": technician},
            encoder=TechnicianEncoder
        )
    else:
        try:
            content = json.loads(request.body)
            technician = Technician.objects.create(**content)
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create Customer"}
            )
            response.status_code= 400
            return response


@require_http_methods(["GET", "DELETE"])
def technicians(request,pk):
    if request.method == "GET":
        technician = Technician.objects.get(id=pk)
        return JsonResponse(
            technician,
            encoder=TechnicianEncoder,
            safe=False
        )
    else:
        count, _= Technician.objects.get(id=pk).delete()
        return JsonResponse({"deleted": count > 0})

@require_http_methods(["GET","POST"])
def show_appointments(request):
    if request.method == "GET":
        appointment = ServiceAppointment.objects.all()
        return JsonResponse(
            {"appointment": appointment},
            encoder=ServiceAppointmentEncoder,
            safe=False,
        )
    else:
        # content = json.loads(request.body)
        # try:
        pass

@require_http_methods(["GET", "DELETE"])
def show_service_history(request, pk):
    if request.method == "GET":
        service = ServiceAppointment.objects.get(id=pk)
        return JsonResponse(
            service,
            encoder=ServiceAppointmentEncoder,
            safe=False,
        )
    else:
        count, _  = ServiceAppointment.objects.get(id=pk).delete()
        return JsonResponse({"deleted": count > 0})
