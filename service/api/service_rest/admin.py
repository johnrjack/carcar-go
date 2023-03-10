from django.contrib import admin
from .models import ServiceAppointment, Technician, AutomobileVO
# Register your models here.
admin.site.register(ServiceAppointment)
admin.site.register(Technician)
admin.site.register(AutomobileVO)
