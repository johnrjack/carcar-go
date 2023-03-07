from django.db import models

# Create your models here.


class Technician(models.Model):
    name = models.CharField(max_length=100)
    employee_number = models.CharField(max_length=100)


class ServiceAppointment(models.Model):
    vin = models.CharField(max_length=16)
    date = models.DateField()
    reason = models.CharField(max_length=300)
    #customer foreign
    #technician foreign
