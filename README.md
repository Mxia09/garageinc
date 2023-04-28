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

#### Sample GET Response (List Manufacturers)

```
{
  "manufacturers": [
    {
      "href": "/api/manufacturers/1/",
      "id": 1,
      "name": "Daimler-Chrysler"
    }
  ]
}
```

#### Sample POST (Create manufacturer) and PUT (Update manufacturer) Request body

Request shape is the same for both, only manufacturer name is required

```
{
  "name": "Chrysler"
}
```

#### Sample Response for GET (Get specific manufacturer details), PUT (Update manufacturer), and DELETE (Delete manufacturer)

```
{
  "href": "/api/manufacturers/1/",
  "id": 1,
  "name": "Chrysler"
}
```

### Vehicle models

- List/Create: http://localhost:8100/api/models/
- Get Details/Update/Delete: http://localhost:8100/api/models/:id/

#### Sample GET Response (List vehicle models)

```
{
  "models": [
    {
      "href": "/api/models/1/",
      "id": 1,
      "name": "Sebring",
      "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
      "manufacturer": {
        "href": "/api/manufacturers/1/",
        "id": 1,
        "name": "Daimler-Chrysler"
      }
    }
  ]
}
```

#### Sample POST request body (Create vehicle model)

```
{
  "name": "Sebring",
  "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
  "manufacturer_id": 1
}
```

#### Sample PUT request body (Update vehicle model)

```
{
  "name": "Sebring",
  "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg"
}
```

#### Sample GET (Get specific vehicle model details), POST (Create vehicle model), and PUT (Update vehicle model) Response

```
{
  "href": "/api/models/1/",
  "id": 1,
  "name": "Sebring",
  "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
  "manufacturer": {
    "href": "/api/manufacturers/1/",
    "id": 1,
    "name": "Daimler-Chrysler"
  }
}
```

### Automobiles

- List/Create: http://localhost:8100/api/automobiles/
- Get Details/Update/Delete: http://localhost:8100/api/automobiles/:vin/

#### Sample GET Response (List automobiles)

```
{
  "autos": [
    {
      "href": "/api/automobiles/1C3CC5FB2AN120174/",
      "id": 1,
      "color": "yellow",
      "year": 2013,
      "vin": "1C3CC5FB2AN120174",
      "model": {
        "href": "/api/models/1/",
        "id": 1,
        "name": "Sebring",
        "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
        "manufacturer": {
          "href": "/api/manufacturers/1/",
          "id": 1,
          "name": "Daimler-Chrysler"
        }
      },
      "sold": false
    }
  ]
}
```

#### Sample POST request body (Create automobile)

```
{
  "color": "red",
  "year": 2012,
  "vin": "1C3CC5FB2AN120174",
  "model_id": 1
}
```

#### Sample GET response (Get specific automobile details)

```
{
  "href": "/api/automobiles/1C3CC5FB2AN120174/",
  "id": 1,
  "color": "yellow",
  "year": 2013,
  "vin": "1C3CC5FB2AN120174",
  "model": {
    "href": "/api/models/1/",
    "id": 1,
    "name": "Sebring",
    "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
    "manufacturer": {
      "href": "/api/manufacturers/1/",
      "id": 1,
      "name": "Daimler-Chrysler"
    }
  },
  "sold": false
}
```

#### Sample PUT Request body + Response (Update automobile)

Request body and Response have same shape

```
{
  "color": "red",
  "year": 2012,
  "sold": true
}
```

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

#### Sample GET Response (List technicians)

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

#### Sample POST Request body + Response (Create a new technician)

Request and response JSON will have the same shape

```
{
    "first_name":"John",
    "last_name": "Doe",
    "employee_id": 2468
}
```

#### Sample GET Response (Get specific technician details)

```
{
    "first_name": "Random",
    "last_name": "Guy",
    "employee_id": 1111
}
```

#### Sample DELETE Response (Delete a technician)

Will return whether the technician was deleted and if it exists

```
{
    "deleted": true
}
```

#### Appointments

- List/Create: http://localhost:8080/api/appointments/
- Get Details/Update/Delete: http://localhost:8080/api/appointments//:id
- Set Appointment Status to Cancel: http://localhost:8080/api/appointments/:id/cancel
- Set Appointment Status to Finish: http://localhost:8080/api/appointments/:id/finish

#### Sample GET Response body (List Appointments)

```
{
    "appointments": [
        {
            "date_time": "2018-06-07T00:00:00+00:00",
            "reason": "Paint Scratch",
            "status": "canceled",
            "vin": "JI4DA9340NS001069",
            "customer": "R",
            "technician": {
                "first_name": "Random",
                "last_name": "Guy",
                "employee_id": 1111
            },
            "id": 1,
            "is_vip": false
        }
    ]
}
```

#### Sample POST Request body (Create a new technician)

```
{
    "date_time": "2018-06-07T00:00",
    "reason": "tire flat",
    "status": "created",
    "vin": "JI4DA9340NS001766",
    "customer": "Robbie",
    "technician": 1111
}
```

#### Sample POST Response (Create a new technician)

```
{
    "date_time": "2018-06-07T00:00",
    "reason": "tire flat",
    "status": "created",
    "vin": "JI4DA9340NS001766",
    "customer": "Robbie",
    "technician": {
        "first_name": "Random",
        "last_name": "Guy",
        "employee_id": 1111
    },
    "id": 8,
    "is_vip": false
}
```

#### Sample PUT Response (Set appointment status: Cancel)

PUT Request is not needed

```
{
    "date_time": "2018-06-07T00:00:00+00:00",
    "reason": "Paint Scratch",
    "status": "canceled",
    "vin": "JI4DA9340NS001069",
    "customer": "R",
    "technician": {
        "first_name": "Random",
        "last_name": "Guy",
        "employee_id": 1111
    },
    "id": 1,
    "is_vip": false
}
```

#### Sample PUT Response (Set appointment status: Finish)

PUT Request is not needed

```
{
    "date_time": "2018-06-07T00:00:00+00:00",
    "reason": "Paint Scratch",
    "status": "finished",
    "vin": "JI4DA9340NS001069",
    "customer": "R",
    "technician": {
        "first_name": "Random",
        "last_name": "Guy",
        "employee_id": 1111
    },
    "id": 1,
    "is_vip": false
}
```

## Design


<img src="microservice.png"
     alt="Microservice image"
     style="width: 700px;" />

## Service microservice

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

**(NOTE: Please use a client browser like Insomnia or Postman to send requests and receive responses)**

### Technician

The technician model describes all the properties we may have on a technician:

- First Name
- Last Name
- Employee ID - a unique number to identify the employee

Within our views we define the following view functions:

- technicians() - Allows us to **list technicians** or **create a new technician**.

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

The sales microservice utilizes and deals with information regarding all administrative work related to sales and record keeping of the dealership. This microservice relies heavily on four specifc model classes: Salesperson, Cuistomer,  AutomobileVO, and Sale that will act as the backbone in which all other class and functions will draw on to perform their given tasks.

These four models have their own specific features that are improtnant to their own individual functions and are as follows: 
- Salesperson: refers to a salesperson of the carcar service that contains the fields: first_name, last_name, and employee_id 
- Customer: refers to a customer of the carcar service that contains the fields: first_name, last_name, phone_number, and address
- AutomobileVO: a value object that uses a poller to communicate with the inventory microservice to get a vehicle's VINs 
- Sale - refers to the sale of an automobile with the field price with foriegn keys automobile, customer ,and salesperson 

As with any Django framework these models are referenced and work in conjunction with the views.py functions and the urls.py in order to properly create a functional API in the backend database. 

In the views the following functions work as follows: 
- api_list_salesperson() works to obtain a list of salespeople within the carcar service as well as create a new employee or delete one in case one is no longer with the service 
- api_list_customers() list, creates, and deletes any customers with the carcar 
- api_list_sales() that creates, list, and deletes all sales and references the three relationships of the foreign keys: automobile, customer, and salesperson 

**Salesperson API**

| Action | Method | URL | 
| ----------- | ----------- |  ----------- |
| List salespeople	 | GET | http://localhost:8090/api/salespeople/
 Create a salespeople	|POST |http://localhost:8090/api/salespeople/
| Delete a specific salespeople	 | DELETE | http://localhost:8090/api/salespeople/:id
 

To get a list of salespeople in the GET response the following example json body can be used to create a new salesperson in POST 
```
{
  "first_name": "Test First Name",
  "last_name": "Test Last Name",
  "employee_id": 12345,
	"id": 1
}
```
which will result in the list below:
```
{
	"salespeople": [
		{
			"first_name": "Test First Name",
			"last_name": "Test Last Name",
			"employee_id": "12345",
			"id": 1
		}
	]
}
```

**Customer API**

| Action | Method | URL | 
| ----------- | ----------- |  ----------- |
| List customer		 | GET | 	http://localhost:8090/api/customers/
 Create a customer	|POST |http://localhost:8090/api/customers/
| Delete a specific customer	 | DELETE | http://localhost:8090/api/customers/:id

To get a list of customers in the GET response the following example json body can be used to create a new salesperson in POST 
```
{
  "first_name": "First ",
  "last_name": "Last",
  "phone_number": "123-456-7890",
	"address": "test address",
}
```
which will result in the list below:
```
{
	"customers": [
		{
			"first_name": "First ",
			"last_name": "Last",
			"address": "test address",
			"phone_number": "123-456-7890",
			"id": 1
		}
	]
}
```

**Sales API**

| Action | Method | URL | 
| ----------- | ----------- |  ----------- |
| List sales			 | GET | http://localhost:8090/api/sales/
 Create a sale	|POST |http://localhost:8090/api/sales/
| Delete a sale	 | DELETE | http://localhost:8090/api/sales/:id

To get a list of customers in the GET response the following example json body can be used to create a new salesperson in POST 
```
{
    "salesperson": "Test First",
    "customer": Test,
    "automobile": "1C3CC5FBN1223175",
    "price": 1000
}
```
which will result in the list below:
```
{
	"automobile": {
		"vin": "1C3CC5FBN1223175",
		"id": 1
	},
	"salesperson": {
		"first_name": "Test First Name",
		"last_name": "Test Last Name",
		"employee_id": "12345",
		"id": 1
	},
	"customer": {
		"first_name": "First ",
		"last_name": "Last",
		"address": "test address",
		"phone_number": "123-456-7890",
		"id": 1
	},
	"price": 1000,
	"id": 1
}
```
**diagram**

!(https://excalidraw.com/#room=8f9e8693a9e242669f95,hOmum0IB9FZgWB6PtrlRpA)
