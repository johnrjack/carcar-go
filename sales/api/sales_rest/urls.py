from django.urls import path

from .views import api_list_sales_person

urlpatterns = [
    path("employees/", api_list_sales_person, name="api_create_employee")
]
