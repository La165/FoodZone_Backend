# FoodZone Backend (MERN Stack)

This is the **backend server** for the FoodZone MERN e-commerce project.  
It is built with **Node.js, Express, and MongoDB**, and handles authentication, product/cart operations, and password reset functionality.

---

## 🌟 Features

- User registration and login with **JWT authentication**
- Password reset via email using secure tokens
- Product management (CRUD operations)
- Cart management for users
- RESTful APIs with validation and error handling
- CORS enabled for frontend communication

---

## 🛠️ Technologies Used

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose ODM)  
- **Authentication:** JWT (JSON Web Tokens)  
- **Password Security:** bcrypt  
- **Email Service:** Nodemailer / SMTP provider  
- **Environment Variables:** dotenv  

---

## 📂 Project Structure


FoodZone_Backend/
├─ node_modules/ # Node dependencies
├─ authorization.js # Middleware for authorization
├─ controller.js # Controllers for auth, products, cart, etc.
├─ db.js # MongoDB connection setup
├─ package.json
├─ package-lock.json
├─ routes.js # API routes
├─ schema.js # Mongoose schemas/models
├─ server.js # Entry point for the server
└─ service.js # Service functions for email, token, etc.


---

## 🚀 Installation

1. Clone the repository:  
```bash
git clone https://github.com/La165/FoodZone_Backend.git
cd FoodZone_Backend

Install dependencies:

npm install

Create a .env file in the root with the following variables:

PORT=5000
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
EMAIL_USER=<your-email-address>
EMAIL_PASS=<your-email-password>
CLIENT_URL=<frontend-live-url>

Start the server:

npm run dev   # If using nodemon
# or
node server.js
🌐 API Endpoints
Authentication
Method	Endpoint	Description
POST	/api/register	Register a new user
POST	/api/login	Login user and get JWT
POST	/api/forgot-password	Request password reset email
POST	/api/reset-password/:token	Reset password using token
Products
Method	Endpoint	Description
GET	/api/products	Get all products
GET	/api/products/:id	Get product by ID
POST	/api/products	Add new product (admin)
PUT	/api/products/:id	Update product (admin)
DELETE	/api/products/:id	Delete product (admin)
Cart
Method	Endpoint	Description
GET	/api/cart	Get logged-in user cart
POST	/api/cart	Add item to cart
PUT	/api/cart/:id	Update cart item
DELETE	/api/cart/:id	Remove item from cart

All routes except registration/login require JWT authentication.

🔑 Notes

Passwords are hashed with bcrypt

JWT tokens are used for authentication

Reset password tokens are stored temporarily in MongoDB with expiry

CORS is enabled to allow requests from your frontend
