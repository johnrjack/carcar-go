from django.contrib import admin
from .models import Sale, Customer, SalesPerson, AutomobileVO
# Register your models here.
admin.site.register(Sale)
admin.site.register(Customer)
admin.site.register(SalesPerson)
admin.site.register(AutomobileVO)