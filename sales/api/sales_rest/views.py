from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from .models import SalesPerson
from encoders import  SalePersonEncoder

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
