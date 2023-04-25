from django.contrib import admin
from . models import AutomobileVO, Sale, Salesperson, Customer
# Register your models here.
@admin.register(AutomobileVO)
class AutomobileVO(admin.ModelAdmin):
    pass
    
@admin.register(Salesperson)
class Salesperson(admin.ModelAdmin):
            list_display = (
        "first_name",
        "last_name",
        "employee_id",
    )
            
@admin.register(Customer)
class Customer(admin.ModelAdmin):
            list_display = (
        "first_name",
        "last_name",
        "address",
        "phone_number",
    )
            
@admin.register(Sale)
class Sale(admin.ModelAdmin):
            list_display = (
        "automobile",
        "salesperson",
        "customer",
        "price",
    )