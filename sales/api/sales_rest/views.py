from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from .models import SalesPerson, Customer, Sale, AutomobileVO
from .encoders import  SalePersonEncoder, CustomerEncoder, SaleListEncoder, SaleDetailEncoder

# Create your views here.

@require_http_methods(["GET", "POST"])
def api_list_sales_person(request):
    if request.method == "GET":
        employees = SalesPerson.objects.all()
        return JsonResponse(
            {"employee": employees},
            encoder=SalePersonEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            employee = SalesPerson.objects.create(**content)
            return JsonResponse(
                employee,
                encoder=SalePersonEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create Employee"}
            )
            response.status_code = 400
            return response

@require_http_methods(["GET", "DELETE"])
def api_sales_person(request, pk):
    if request.method == "GET":
        employee = SalesPerson.objects.get(id=pk)
        return JsonResponse(
            employee,
            encoder=SalePersonEncoder,
            safe=False
        )
    else:
        count, _ = SalesPerson.objects.get(id=pk).delete()
        return JsonResponse({"deleted": count > 0})
    

@require_http_methods(["GET", "POST"])
def api_customer_list(request):
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder=CustomerEncoder
        )
    else:
        try:
            content = json.loads(request.body)
            customer = Customer.objects.create(**content)
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create Customer"}
            )
            response.status_code= 400
            return response


@require_http_methods(["GET", "DELETE"])
def api_customer(request, pk):
    if request.method == "GET":
        customer = Customer.objects.get(id=pk)
        return JsonResponse(
            customer,
            encoder=CustomerEncoder,
            safe=False
        )
    else:
        count, _ = Customer.objects.get(id=pk).delete()
        return JsonResponse({"message": count > 0})
    

@require_http_methods(["GET", "POST"])
def api_sales_list(request):
    if request.method == "GET":
        sales = Sale.objects.all()
        return JsonResponse(
            {"sales": sales},
            encoder=SaleListEncoder,
        )
    else:
        content = json.loads(request.body)
        print("THIS IS CONTENT -------------", content)
        print("THIS--------------", AutomobileVO.objects.all()) 
    # automobileVO-----------------------------------------------
        try:
            automobile, _  = AutomobileVO.objects.get_or_create(vin=content["automobile"])
            # print("THIS IS AUTO VIN-----------", auto_vin)
            # content["vin"] = auto_vin
        except Exception as e:
            response = JsonResponse(
                {"message": f"Could not create the sale- {e}"}
            )
            response.status_code = 400
            return response
        content["automobile"] = automobile
    # salesperson-----------------------------------------------------
        try:
            sales_person, _ = SalesPerson.objects.get_or_create(employee_name=content["sales_person"])
            content["sales_person"] = sales_person
        except Exception as e:
            response = JsonResponse(
                {"message": f"Could not create the sale- {e}"}
            )
            response.status_code = 400
            return response
    # customer--------------------------------------------------------------
        try:
            customer, _ = Customer.objects.get_or_create(customer_name=content["customer"])
            content["customer"] = customer
        except Exception as e:
            response = JsonResponse(
                {"message": f"Could not create the sale- {e}"}
            )
            response.status_code = 400
            return response
        
        sale = Sale.objects.create(**content)
        return JsonResponse(
            sale,
            encoder=SaleDetailEncoder,
            safe=False
        )