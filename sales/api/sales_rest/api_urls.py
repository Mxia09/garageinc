from django.urls import path
from .views import api_list_salesperson, api_list_customers, api_list_sale

urlpatterns = [
    path("salespeople/", api_list_salesperson, name="api_list_salesperson"),
    path("salespeople/<int:pk>/", api_list_salesperson, name="api_list_salesperson"),
    path("customers/", api_list_customers, name="api_list_customers"),
    path("customers/<int:pk>/", api_list_customers, name="api_list_customers"),
    path("sales/", api_list_sale, name="api_list_sale"),
    path("sales/<int:pk>", api_list_sale, name="api_list_sale"),
]
