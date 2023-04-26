from django.db import models

class Salesperson(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    employee_id = models.CharField(max_length=200)
    
    def __str__(self):
        return f"{self.first_name} {self.last_name} {self.employee_id}"
    
class Customer(models.Model):
    first_name = models.CharField(max_length=200, null=True)
    last_name = models.CharField(max_length=200, null=True)
    address = models.CharField(max_length=200, null=True)
    phone_number = models.CharField(max_length=200, null=True)
    
    def __str__(self):
        return f"{self.first_name} {self.last_name}  {self.address} {self.phone_number}"

class AutomobileVO(models.Model):
    vin = models.CharField(max_length=50, unique=True) 
    
    def __str__(self):
        return f"{self.vin}"
    
class Sale(models.Model):
    automobile = models.ForeignKey(
        AutomobileVO, 
        related_name="sales",
        on_delete=models.CASCADE,
    )
    
    salesperson = models.ForeignKey(
        Salesperson, 
        related_name="sales",
        on_delete=models.CASCADE,
    )    

    customer = models.ForeignKey(
        Customer, 
        related_name="sales",
        on_delete=models.CASCADE,
    )        
    
    price = models.PositiveBigIntegerField()

    def __str__(self):
        return f"{self.automobile} {self.salesperson}  {self.customer} {self.price}"

