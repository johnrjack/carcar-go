from django.db import models
from django.urls import reverse

class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)

class Technician(models.Model):
    name = models.CharField(max_length=100)
    employee_number = models.PositiveSmallIntegerField(unique=True)

    def __str__(self):
        return self.name

    def get_api_url(self):
        return reverse("show_technician", kwargs={'id': self.id})

class Appointment(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    customer_name = models.CharField(max_length=100)
    date = models.DateTimeField(null=True)
    reason = models.CharField(max_length=200)
    vip = models.BooleanField(default=False, blank=True, null=True)
    finished = models.BooleanField(default=False, null=True)

    technician = models.ForeignKey(
        Technician,
        related_name="appointment",
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return self.vin


    def get_api_url(self):
        return reverse("show_appointment", kwargs={'id': self.id})



