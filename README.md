# CarCar

Team:

- Marvin - Sales
- Robbie - Service

## How to Run This Project

1. `cd` into your desired project directory via command line
2. Run `git clone https://gitlab.com/Mxia09/project-beta.git`
3. Change your directory to project-beta : `cd project-beta`
4. Create a new volume for your project. (Open up docker desktop if you'd like): `docker volume create beta-data`
5. Create images and containers for your project:

```
docker-compose build
docker-compose up
```

6. Voila! Your project is up and running! Refer to `http://localhost:3000` to view the running front-end.
7. To use CRUD operations on the database via the api, please refer to the following section on ports and urls

## Ports/URLs

NOTE: Our urls follow REST principles for CRUD operations.

### Front End (Port: 3000)

Enter in browser: http://localhost:3000

### Manufacturer (Port: 8100)

- List/Create: http://localhost:8100/api/manufacturers/
- Get Details/Update/Delete: http://localhost:8100/api/manufacturers/:id/

### Vehicle models

- List/Create: http://localhost:8100/api/models/
- Get Details/Update/Delete: http://localhost:8100/api/models/:id/

### Automobiles

- List/Create: http://localhost:8100/api/automobiles/
- Get Details/Update/Delete: http://localhost:8100/api/automobiles/:vin/

### Sales (Port: 8090)

#### Salespeople

- List/Create: http://localhost:8090/api/salespeople/
- Get Details/Update/Delete: http://localhost:8090/api/salespeople/:id

#### Customer

- List/Create: http://localhost:8090/api/customers/
- Get Details/Update/Delete: http://localhost:8090/api/customers/:id

#### Sales

- List/Create: http://localhost:8090/api/sales/
- Get Details/Update/Delete: http://localhost:8090/api/sales/:id

### Service (Port: 8080)

#### Technicians

- List/Create: http://localhost:8080/api/technicians/
- Get Details/Update/Delete: http://localhost:8080/api/technicians/:id

#### Appointments

- List/Create: http://localhost:8080/api/appointments/
- Get Details/Update/Delete: http://localhost:8080/api/appointments//:id
- Set Appointment Status to Cancel: http://localhost:8080/api/appointments/:id/cancel
- Set Appointment Status to Finish: http://localhost:8080/api/appointments/:id/finish

## Design

## Service microservice

Explain your models and integration with the inventory
microservice, here.

The Service microservice deals with all of the car service functionality on the webpage. We used the django framework to create an api that could provide us data from the database.

In django our **urls.py**, **views.py**, and **models.py** interact with each other to form a working api.

We create **models** to structure our data from the database. The Service microservice consists of three models: **AutomobileVO**, **Technician**, and **Appointment**. We can defining **urls** in **urls.py**, and create view functions that are called when an **http request** is initiated at one of those urls. (URLs are defined in the Ports/URLs section)

The following subsections will describe each model and the role it plays in the microservice

### AutomobileVO

The **AutomobileVO** Model is used to represent the Automobile Model within the **Inventory** microservice. Within it, we define only one property: **vin**, which describes the vin number of a specific automobile.

This model is defined as a **value object** for a couple of reasons:

- Is not defined by an id
- If we change the vin number, we will also change which automobile the model refers too. For this reason, **AutomobileVO is immutable**

AutomobileVO only plays a small role in the Service microservice in that within appointments, we use the vin number to determine if the customer's car vin matches with a vin stored in inventory. If so, this means the customer has bought the car from this particular dealer and so **the customer is a vip member**

### Technician

The technician model describes all the properties we may have on a technician:

- First Name
- Last Name
- Employee ID - a unique number to identify the employee

Within our views we define the following view functions:

- technicians() - Allows us to **list technicians** or **create a new technician**

<details>
<summary>Sample GET Response</summary>
<br>
```
{
    "technicians": [
        {
            "first_name": "Random",
            "last_name": "Guy",
            "employee_id": 1111
        },
    ]
}
```
</details>

- technician_details() - Allows **getting a specific technician's details** and **deleting a specific technician**

### Appointment

The appointment model describes all the properties we may have on a appointment:

- Date + Time of Appointment
- Appointment Reason
- Appointment Status - Either created, finished, or canceled
- VIN of car
- Customer Name
- Technician working on the car

Within our views we define the following view functions:

- appointments() - Allows us to **get a list of all appointments** or to **create a new appointment**
- technician_details() - Allows **getting a specific appointment's details** and **deleting a specific appointment**
- update_appt_status_cancel() - Sets appointment status to "canceled"
- update_appt_status_finish() - Sets appointment status to "finished"

## Sales microservice

Explain your models and integration with the inventory
microservice, here.
