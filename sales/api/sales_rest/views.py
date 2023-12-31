from django.shortcuts import render
from django.http import JsonResponse
from .models import Salesperson, Customer, Sale, AutomobileVO
from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin",
                "id"]

class SalespersonListEncoder(ModelEncoder):
    model = Salesperson
    properties = [
        "first_name",
        "last_name",
        "employee_id",
        "id"
    ]

class CustomerListEncoder(ModelEncoder):
    model = Customer
    properties = [
        "first_name",
        "last_name",
        "address",
        "phone_number",
        "id"
    ]
    
class SalesListEncoder(ModelEncoder):
    model = Sale
    properties = [
        "automobile",
        "salesperson",
        "customer",
        "price",
        "id"
    ]    
    
    encoders = {
        "automobile": AutomobileVOEncoder(),
        "salesperson": SalespersonListEncoder(),
        "customer": CustomerListEncoder(),
        
    }
    
@require_http_methods(["GET", "POST", "DELETE"])
def api_list_salesperson(request, pk=None):
    if request.method == "GET":
        salespeople = Salesperson.objects.all()
        return JsonResponse( 
            {"salespeople": salespeople},
            encoder = SalespersonListEncoder,
            safe = False) 
    if request.method == "POST":
        content = json.loads(request.body)
        salesperson = Salesperson.objects.create(**content)
        return JsonResponse( 
            {"salesperson": salesperson},
            encoder = SalespersonListEncoder,
            safe = False)
    if request.method == "DELETE": 
        try: 
            count, _ = Salesperson.objects.filter(id=pk).delete()
            if count == 0:
                response = JsonResponse({"message": "salespeople not found"})
                response.status_code = 404
                return response
            return JsonResponse ({"deleted": count > 0})
        except: 
            response = JsonResponse({"message": "Error deleting salespeople"})
            response. status_code = 400
            return response

@require_http_methods(["GET", "POST", "DELETE"])
def api_list_customers(request, pk=None):
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder=CustomerListEncoder,
            safe=False)
    if request.method == "POST":
        content = json.loads(request.body)
        customer = Customer.objects.create(**content)
        return JsonResponse(
            {"customer": customer},
            encoder=CustomerListEncoder,
            safe=False)
    if request.method == "DELETE": 
        try: 
            count, _ = Customer.objects.filter(id=pk).delete()
            if count == 0:
                response = JsonResponse({"message": "Customer not found"})
                response.status_code = 404
                return response
            return JsonResponse ({"deleted": count > 0})
        except: 
            response = JsonResponse({"message": "Error deleting customer"})
            response.status_code = 400
            return response

@require_http_methods(["GET", "POST", "DELETE"])
def api_list_sale(request, pk=None):
    if request.method == "GET":
        sales = Sale.objects.all()
        return JsonResponse(
            {"sales": sales},
            encoder=SalesListEncoder,
            safe=False
        )
    elif request.method == "POST":
        content = json.loads(request.body)
        try:
            salesperson = content["salesperson"]
            salesperson = Salesperson.objects.get(first_name=content["salesperson"])
            content["salesperson"]=salesperson
        except Salesperson.DoesNotExist:
            return JsonResponse(
                {"message": "Salesperson could not be found"}
            )
        try:
            customer = content["customer"]
            customer = Customer.objects.get(id=content["customer"])
            content["customer"]=customer
        except Customer.DoesNotExist:
            return JsonResponse(
                {"message": "Customer could not be found"}
            )
        try:
            auto_vin = content['automobile']
            automobile = AutomobileVO.objects.get(vin=auto_vin)
            content["automobile"] = automobile
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Vin could not be found"}
            )

        sale = Sale.objects.create(**content)
        return JsonResponse(sale, encoder=SalesListEncoder, safe=False)    
    
    if request.method == "DELETE": 
        try: 
            count, _ = Sale.objects.filter(id=pk).delete()
            if count == 0:
                response = JsonResponse({"message": "Sale not found"})
                response.status_code = 404
                return response
            return JsonResponse ({"deleted": count > 0})
        except: 
            response = JsonResponse({"message": "Error deleting sale"})
            response.status_code = 400
            return response

