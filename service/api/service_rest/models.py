from django.db import models

# Create your models here.


class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True, null=True)
    color = models.CharField(max_length=50)
    year = models.PositiveSmallIntegerField()
    vin = models.CharField(max_length=17, unique=True)

    def __str__(self):
        return self.model

class Technician(models.Model):
    name = models.CharField(max_length=100)
    employee_number = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class ServiceAppointment(models.Model):
    vin = models.CharField(max_length=16)
    date = models.DateField()
    reason = models.CharField(max_length=300)
    technician = models.ForeignKey(
        Technician,
        related_name="tech",
        on_delete=models.PROTECT,
    )
    #customer foreign
