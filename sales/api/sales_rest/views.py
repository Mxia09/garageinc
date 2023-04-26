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
            safe=False)
    else: 
        content = json.loads(request.body)
        try: 
            automobile = content.get("vin")
            automobile_id = AutomobileVO.objects.get(id=automobile)
            salesperson = content.get("salesperson")
            salesperson_id = Salesperson.objects.get(id=salesperson)
            customer = content.get("customer")
            customer_id = Customer.objects.get(id=customer)
            content["vin"] = automobile_id
            content["salesperson"] = salesperson_id
            content["customer"] = customer_id
        except: 
            response = JsonResponse({"message": "Error could not find foreign key"})
            response.status_code = 400
            return response
    if request.method == "POST":
        content = json.loads(request.body)
        sale = Sale.objects.create(**content)
        return JsonResponse(
            {"sale": sale},
            encoder=SalesListEncoder,
            safe=False)
    if request.method == "DELETE": 
        try: 
            count, _ = Sale.objects.filter(id=pk).delete()
            if count == 0:
                response = JsonResponse({"message": "Sale not found"})
                response.status_code = 404
                return response
            return JsonResponse ({"deleted": count > 0})
        except: 
            response = JsonResponse({"message": "Error deleting Sale"})
            response.status_code = 400
            return response
