# 🚀 Primetrade Backend Assignment

This project was developed as part of the **Frontend Developer Intern assignment** for Primetrade.  
It demonstrates a secure, scalable REST API with authentication, role-based access, CRUD operations, and a minimal frontend UI.

---

## 🔧 Features

### 🔐 Authentication
- User registration and login using **JWT**
- Passwords secured with **bcrypt hashing**
- Role-based access control: **User** and **Admin**

### 🧾 CRUD Operations
- Entity: **Tasks**
- Endpoints for Create, Read, Update, Delete
- Users can only modify their own tasks
- Admins have full access

### ⚙️ API Structure
- RESTful API following proper HTTP status codes
- Validation and centralized error handling
- API versioning: `/api/v1/`
- Swagger / Postman documentation available

### 🛡️ Security
- JWT-based authentication headers (`Authorization: Bearer <token>`)
- Input validation to prevent injection attacks
- Passwords never stored in plain text

### 💾 Database
- ORM: Sequelize  
- Default: SQLite (easily switchable to PostgreSQL or MySQL)
- Auto schema sync

---

## 🖥️ Tech Stack
**Backend:** Node.js, Express.js, Sequelize, JWT, bcrypt  
**Frontend:** React.js (simple interface for testing APIs)  
**Database:** SQLite (configurable to Postgres/MySQL)  
**API Docs:** Swagger / Postman

---

## ⚡ Quick Start

### 1️⃣ Clone the repo
```bash
git clone https://github.com/Indu9424/primetrade-backend
cd primetrade-backend
