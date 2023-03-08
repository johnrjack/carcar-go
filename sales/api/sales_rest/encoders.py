from common.json import ModelEncoder

from .models import AutomobileVO, SalesPerson, Sale, Customer


# Create your views here.

class VOAutomobileEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "color",
        "year",
        "vin",
        "import_href",
    ]

class SalePersonEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "employee_name",
        "employee_number",
    ]


class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "customer_name",
        "address",
        "phone_number",
    ]

class SaleListEncoder(ModelEncoder):
    model = Sale
    properties = [
        "id",
        "price",
    ]

    def get_extra_data(self, o):
        return {
            "automobile": o.automobile.vin,
            "sale_person": o.sales_person.employee_name,
            "employee_number": o.sales_person.employee_number,
            "customer": o.customer.customer_name,
        }

class SaleDetailEncoder(ModelEncoder):
    model = Sale
    properties = [
        "id",
        "price",
        "automobile",
        "sales_person",
        "customer",
    ]
    # Json serializing the unserializable 
    def get_extra_data(self, o):
        return {
            "automobile": o.automobile.vin,
            "sales_person": {
                "employee_name": o.sales_person.employee_name,
                "employee_number": o.sales_person.employee_number,
            },
            "customer": o.customer.customer_name,
        }


