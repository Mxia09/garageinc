from django.db import models

class Salesperson(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    employee_id = models.CharField(max_length=200)
    
class Customer(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=200)

class AutomobileVO(models.Model):
    vin = models.CharField(max_length=50) 
    
class Sale(models.Model):
    automobile = models.ForeignKey(
        AutomobileVO, 
        related_name="Sale",
        on_delete=models.CASCADE,
    )
    
    salesperson = models.ForeignKey(
        Salesperson, 
        related_name="Sale",
        on_delete=models.CASCADE,
    )    

    customer = models.ForeignKey(
        Customer, 
        related_name="Sale",
        on_delete=models.CASCADE,
    )        
    
    price = models.PositiveBigIntegerField()
    

    # Create your models here.
