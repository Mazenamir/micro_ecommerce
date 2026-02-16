# 📦 Micro E-Commerce Backend API

A simple **Micro E-Commerce Backend API** built using **Node.js,
Express, MongoDB, and Mongoose**.

This project provides:

-   User authentication (Register / Login)
-   Admin product management
-   Product browsing & searching
-   Stock management basics

------------------------------------------------------------------------

## 🚀 Tech Stack

-   Node.js
-   Express.js
-   MongoDB
-   Mongoose
-   bcrypt
-   Nodemon

------------------------------------------------------------------------

## 📁 Project Structure

    micro_ecommerce/
    │
    ├── models/
    │   ├── User.js
    │   └── Product.js
    │
    ├── server.js
    ├── package.json
    └── README.md

------------------------------------------------------------------------

## ⚙️ Installation

### 1️⃣ Clone the repository

``` bash
git clone https://github.com/your-username/micro_ecommerce.git
cd micro_ecommerce
```

### 2️⃣ Install dependencies

``` bash
npm install
```

### 3️⃣ Make sure MongoDB is running locally

Default connection string:

    mongodb://localhost:27017/micro

------------------------------------------------------------------------

## ▶️ Run the Server

### Development (with nodemon)

``` bash
nodemon server.js
```

### Or normal start

``` bash
node server.js
```

Server runs on:

    http://localhost:5000

------------------------------------------------------------------------

# 📌 API Endpoints

------------------------------------------------------------------------

# 🔐 Authentication

## 📝 Register User

### POST `/api/register`

### Request Body

``` json
{
  "username": "mazen",
  "email": "mazen@email.com",
  "password": "123456",
  "role": "user"
}
```

------------------------------------------------------------------------

## 🔓 Login User

### POST `/api/login`

### Request Body

``` json
{
  "email": "mazen@email.com",
  "password": "123456"
}
```

------------------------------------------------------------------------

# 🛍 Product Management

## 👨‍💼 Add Product (Admin Only)

### POST `/api/products`

### Request Body

``` json
{
  "role": "admin",
  "name": "Laptop",
  "price": 15000,
  "stockQuantity": 10
}
```

------------------------------------------------------------------------

## ✏️ Update Product (Admin Only)

### PUT `/api/products/:id`

### Request Body

``` json
{
  "role": "admin",
  "name": "Laptop Pro",
  "price": 18000,
  "stockQuantity": 8
}
```

------------------------------------------------------------------------

## 📦 Get All Products

### GET `/api/products`

Returns list of all available products.

------------------------------------------------------------------------

## 🔎 Get Product By ID

### GET `/api/products/:id`

Returns single product details.

------------------------------------------------------------------------

## 🔍 Search Products

### GET `/api/products/search?name=laptop`

Search products by name (case insensitive).

------------------------------------------------------------------------

# 🔐 Features

-   User Registration
-   Duplicate Email/Username Validation
-   Password Hashing using bcrypt
-   Login Authentication
-   Admin Product Management
-   Product Search (Regex Based)
-   MongoDB Database Integration
-   Basic Role-Based Control (Beginner Level)
-   Proper Error Handling

------------------------------------------------------------------------

# 🛠 Environment Variables (Recommended Improvement)

Create a `.env` file:

    PORT=5000
    MONGO_URI=mongodb://localhost:27017/micro

Install dotenv:

``` bash
npm install dotenv
```

Add to `server.js`:

``` js
require('dotenv').config();
```

------------------------------------------------------------------------

# 📌 Future Improvements

-   JWT Authentication
-   Real Role-Based Middleware
-   Shopping Cart System
-   Order & Checkout System
-   Stock Deduction Logic
-   MVC Architecture Refactor
-   API Documentation (Swagger)
-   Docker Support
-   Deployment (Render / Railway / AWS)

------------------------------------------------------------------------

# 👨‍💻 Author

**Mazen Amir**\
ِAI based Software Engineer 🚀\
Building scalable micro e-commerce systems step by step 🔥
