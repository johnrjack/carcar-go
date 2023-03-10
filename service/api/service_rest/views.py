from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.http import    require_http_methods
import json
from common.json import ModelEncoder
from .models import AutomobileVO, Technician,  ServiceAppointment
# Create your views here.



class AutomobileVOEncoder(ModelEncoder):
        model = AutomobileVO
        properties = [
            "vin"
        ]



class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "name",
        "employee_number",
    ]


class ServiceAppointmentEncoder(ModelEncoder):
    model = ServiceAppointment
    properties = [
        "vin",
        "customer",
        "date",
        "reason",
        "vip",
        "completed",
        "technician",
    ]
    encoders = {
        "technician": TechnicianEncoder()

    }


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
                {"message": "Could not create Technician"}
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
        return JsonResponse({"deleted": count > 0   })


@require_http_methods(["GET"])
def service_history(request, vin):
    if request.method == "GET":
        appointment = ServiceAppointment.objects.get(vin=vin)
        return JsonResponse(
            appointment,
            encoder=ServiceAppointmentEncoder,
            safe=False
        )
    else:
        pass

#needs to turn the VIP bool to true if in inventory
#needs to list appoitnemts either way
#create the appointment
@require_http_methods(["GET","POST"])
def show_appointments(request):
    if request.method == "GET":
        appointments = ServiceAppointment.objects.all()
        return JsonResponse(
            {"appointment": appointments},
            encoder=ServiceAppointmentEncoder,
            safe=False,
        )
    else:
        try:
            content = json.loads(request.body)
            #get the technician data
            try:
                technician = Technician.objects.get(name=content['technician'])
                content['technician'] = technician
            except Technician.DoesNotExist as g:
                return JsonResponse(
                    {"Error": f"Invalid technician {g}"}, status=400
                )
            #turn vip to true if in inventory

            if AutomobileVO.objects.filter(vin=content["vin"]).exists():
                content["vip"] = True
            appointment = ServiceAppointment.objects.create(**content)
            return JsonResponse(
                    appointment,
                    encoder=ServiceAppointmentEncoder,
                    safe=False,
                    )
        except:
            return JsonResponse(
                {"Error": "Cannot create appoitnment"}, status=400
            )

@require_http_methods(["PUT", "DELETE"])
def cancel_appointment(request, pk):
    try:
        serviceAppointment = ServiceAppointment.objects.get(pk=pk)
    except ServiceAppointment.DoesNotExist:
        return JsonResponse({"error":"Appoitment not found"}, status=400)
    if request.method == "PUT":
        serviceAppointment.cancelled = True
        serviceAppointment.save()
        return JsonResponse(
        {"Alert": "Appoitment cancelled."}, status=200
        )
    else:
        pass
        # count, _  = ServiceAppointment.objects.get(id=pk).delete()
        # return JsonResponse({"deleted": count > 0})
