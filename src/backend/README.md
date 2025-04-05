
# StartupFundr Backend API

This is the Java Spring Boot backend for the StartupFundr platform, using MongoDB as the database.

## Prerequisites

- Java 17 or higher
- MongoDB
- Maven

## Setup

1. Make sure MongoDB is running on localhost:27017
2. Set up a database named 'startupfundr' (will be created automatically on first run)

## Running the Application

```shell
cd src/backend
mvn spring-boot:run
```

The API will be available at http://localhost:8080/api

## API Endpoints

### Startups
- GET /api/startups - Get all startups
- GET /api/startups/featured - Get featured startups
- GET /api/startups/{id} - Get startup by ID
- GET /api/startups/industry/{industry} - Get startups by industry
- POST /api/startups - Create a new startup
- PUT /api/startups/{id} - Update a startup
- DELETE /api/startups/{id} - Delete a startup

### Success Stories
- GET /api/success-stories - Get all success stories
- GET /api/success-stories/recent - Get recent success stories
- GET /api/success-stories/featured - Get featured success stories
- GET /api/success-stories/{id} - Get success story by ID
- POST /api/success-stories - Create a new success story
- PUT /api/success-stories/{id} - Update a success story
- DELETE /api/success-stories/{id} - Delete a success story

## Connecting Frontend to Backend

Update your React application to fetch data from these API endpoints instead of using static data.
