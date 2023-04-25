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

## Design

## Service microservice

Explain your models and integration with the inventory
microservice, here.

## Sales microservice

Explain your models and integration with the inventory
microservice, here.
