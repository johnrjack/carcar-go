from django.urls import path

from .views import api_list_sales_person, api_sales_person, api_customer_list, api_customer, api_sales_list, api_show_sale

urlpatterns = [
    path("employees/", api_list_sales_person, name="api_create_employee"),
    path("employees/<int:pk>/", api_sales_person, name="api_show_employee"),
    path("customers/", api_customer_list, name="api_create_customer"),
    path("customers/<int:pk>/", api_customer, name="api_show_customer"),
    path("sales/", api_sales_list, name="api_show_sale"),
    path("sales/<int:pk>/", api_show_sale, name="api_show_sale")
]
