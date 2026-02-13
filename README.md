# CampusHub

CampusHub is a full-stack campus communication platform that centralizes announcements and events into a single web portal.

It addresses fragmented communication across emails, messaging groups, and notice boards by providing a unified system for students and administrators.


## Features

- Role-based login (Admin / Student)
- Admin-only announcement creation
- Event listing
- REST API integration
- Persistent data storage with MySQL
- Frontend–backend communication via HTTP requests


## Tech Stack

### Frontend
- React
- CSS

### Backend
- Spring Boot
- Spring Data JPA
- REST APIs

### Database
- MySQL


## Architecture

React (Port 3000)  
→ HTTP requests (fetch)  
→ Spring Boot API (Port 8082)  
→ JPA  
→ MySQL Database  


## How to Run

### Backend

```bash
cd campushub
mvn spring-boot:run


Runs on:

http://localhost:8082




### Frontend

```bash
cd campushub-frontend
npm install
npm start


Runs on:

http://localhost:3000


## Demo Login

Admin  
Username: admin  
Password: any value  

Student  
Username: any other value  
Password: any value  


## Screenshots

### Login Page
![Login](screenshots/login.png)

### Dashboard
![Dashboard](screenshots/dashboard.png)


