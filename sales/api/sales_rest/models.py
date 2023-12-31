from django.db import models
from django.urls import reverse

class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True, null=True)
    color = models.CharField(max_length=50)
    year = models.PositiveSmallIntegerField()
    vin = models.CharField(max_length=17, unique=True)


    def __str__(self):
        return self.vin


class SalesPerson(models.Model):
    employee_name = models.CharField(max_length=200)
    employee_number = models.CharField(max_length=6)

    def __str__(self):
        return self.employee_name


class Customer(models.Model):
    customer_name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=10)

    def __str__(self):
        return self.customer_name
    

class Sale(models.Model):
    price = models.IntegerField()

    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="automobile",
        on_delete=models.CASCADE)
    
    sales_person = models.ForeignKey(
        SalesPerson,
        related_name="sales_person",
        on_delete=models.CASCADE
    )

    customer = models.ForeignKey(
        Customer,
        related_name="customer",
        on_delete=models.CASCADE
    )
    

    def __str__(self):
        return self.automobile
    
    def get_api_url(self):
        return reverse("api_show_sale", kwargs={"pk": self.pk})