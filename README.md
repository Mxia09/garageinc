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

### Manufacturer

- List/Create: http://localhost:8100/api/manufacturers/
- Get Details/Update/Delete: http://localhost:8100/api/manufacturers/:id/

### Vehicle models

- List/Create: http://localhost:8100/api/models/
- Get Details/Update/Delete: http://localhost:8100/api/models/:id/

### Automobiles

- List/Create: http://localhost:8100/api/automobiles/
- Get Details/Update/Delete: http://localhost:8100/api/automobiles/:vin/

### Sales

#### Salespeople

- List/Create: http://localhost:8090/api/salespeople/
- Get Details/Update/Delete: http://localhost:8090/api/salespeople/:id

#### Customer

- List/Create: http://localhost:8090/api/customers/
- Get Details/Update/Delete: http://localhost:8090/api/customers/:id

#### Sales

- List/Create: http://localhost:8090/api/sales/
- Get Details/Update/Delete: http://localhost:8090/api/sales/:id

### Service

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

## Sales microservice

Explain your models and integration with the inventory
microservice, here.
