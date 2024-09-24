# Clothing E-Commerce Website

## Description

This project is a full-stack, responsive clothing e-commerce website developed using the MERN stack (MongoDB, Express.js, React, Node.js). The website features functionalities like user registration and login, product categorization for men, women, and kids, as well as a shopping cart for adding items. Users can sort items by price and make payments securely through Stripe. An admin panel is also provided for managing products, viewing orders, and updating delivery statuses.

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Project Structure](#project-structure)
6. [API Endpoints](#api-endpoints)
7. [Admin Panel](#admin-panel)
8. [Contributing](#contributing)
9. [Contact](#contact)

## Features

- **User Authentication:** Login and register functionality using JWT.
- **Product Categorization:** Browse products by categories like men, women, and kids.
- **Shopping Cart:** Add items to the cart and manage them.
- **Product Sorting:** Sort items by price.
- **Payment Gateway:** Secure online payments using Stripe.
- **Order Management:** Users can view their order details and track delivery status.
- **Admin Panel:** Manage products, view and update order details, and modify delivery statuses.

## Technologies Used

- **Frontend:** React, HTML, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Authentication:** JSON Web Token (JWT)
- **Payment Gateway:** Stripe
- **Tools:** Git, GitHub, Visual Studio Code

## Installation

### Prerequisites

Make sure you have the following installed:

- Node.js
- MongoDB Atlas
- Stripe Account

### Clone the Repository

```
git clone https://github.com/lakshan1946/E-commerce.git
```

### Backend Setup

Navigate to the backend directory:
```
cd backend
```
Install backend dependencies:
```
npm install
```
Create a `.env` file in the backend directory and add the following environment variables:
```
JWT_SECRET = "random#secret"
STRIPE_SECRETE_KEY = "sk_test_51PSaBcRu1BVIKT9U9P2REkRn1lWST41Yr5qE5KtHayQNL1H24pjOYcnTSgGuhEQ4UFtX5MGKH3uPiBI65HSaMTD200NY75oiJW"
```
Start the backend server:
```
npm start
```

### Frontend Setup

Navigate to the frontend directory:
```
cd frontend
```
Install frontend dependencies:
```
npm install
```
Start the frontend development server:
```
npm start
```
Access the frontend at `http://localhost:3000`.

## Usage

1. **User Registration and Login:** Register as a new user or log in with an existing account.
2. **Browse Products:** Navigate through different categories like men, women, and kids.
3. **Add to Cart:** Select items and add them to your shopping cart.
4. **Checkout:** After adding items to the cart, proceed to checkout and complete the payment using the Stripe gateway.
5. **Order Management:** View your order details and track delivery status.
6. **Admin Panel:** Admin users can log in to the admin panel to add new products, view orders, and update delivery statuses.

## Project Structure

```
E-COMMERCE/
├── admin/
│   ├── public/
│   ├── src/
│   │   ├── Assets/
│   │   ├── Components/
│   │   ├── Pages/
│   │   ├── App.jsx
│   │   └── main.jsx
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
|   ├── upload
│   └── index.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── Context/
│   │   ├── Pages/
│   │   ├── App.js
│   │   └── index.js
├── README.md
└── .gitignore
```

## API Endpoints

### User Endpoints
- `POST /api/auth/register` - Register a new user.
- `POST /api/auth/login` - Login an existing user.

### Product Endpoints
- `GET /api/products` - Get all products.
- `GET /api/products/:category` - Get products by category (men, women, kids).
- `POST /api/products` - [Admin] Add a new product.
- `PUT /api/products/:id` - [Admin] Update a product.
- `DELETE /api/products/:id` - [Admin] Delete a product.

### Order Endpoints
- `POST /api/orders` - Create a new order.
- `GET /api/orders/:userId` - Get all orders for a user.
- `GET /api/orders` - [Admin] Get all orders.
- `PUT /api/orders/:id` - [Admin] Update order delivery status.

## Admin Panel

- **Add Products:** Add new products to the store.
- **View Orders:** View all customer orders.
- **Update Delivery Status:** Modify the delivery status of each order.

## Contributing
If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## Contact
For any inquiries or feedback, feel free to reach out:

- **Email:** your-email@example.com
- **GitHub:** [your-username](https://github.com/your-username)
