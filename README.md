# Clothing E-Commerce Website

## Description

This project is a full-stack, responsive clothing e-commerce website developed using the MERN stack (MongoDB, Express.js, React, Node.js). The website features functionalities like ***user registration and login, product categorization for men, women, and kids, as well as a shopping cart for adding items. Users can sort items by price and make payments securely through Stripe. An admin panel is also provided for managing products, viewing orders, and updating delivery statuses.***

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Project Structure](#project-structure)
6. [Screenshots](#screenshots-and-video)
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

## Database and Functinality
 ![image](https://github.com/user-attachments/assets/9429cdba-9e98-4d42-ae09-d665acd02ee5)
 ![image](https://github.com/user-attachments/assets/c36268bb-5fdb-4443-9732-047c51383e58)





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

### Admin Panel Setup

Navigate to the admin directory:
```
cd admin
```
Install admin dependencies:
```
npm install
```
Start the admin server:
```
npm run dev
```
Access the frontend at `http://localhost:3000`.
Access the admin at `http://localhost:5173`.

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

## Screenshots and Video

### Screenshots
![image](https://github.com/user-attachments/assets/a5bd03e5-8711-4a17-a808-e1f5a97a57ee)
![Screenshot 2024-09-24 111434](https://github.com/user-attachments/assets/c8e0bd12-5074-4afc-9cbf-ad5a7e2c38ad)
![Screenshot 2024-09-24 111445](https://github.com/user-attachments/assets/66677f3c-10c4-443b-86fc-e0eb43888a82)
![Screenshot 2024-09-24 111508](https://github.com/user-attachments/assets/b27f2c14-777c-46c0-a428-5c8a41599c3f)
![Screenshot 2024-09-24 121257](https://github.com/user-attachments/assets/4f1fb170-5d05-429f-a945-4c4b92643749)
![Screenshot 2024-09-24 111614](https://github.com/user-attachments/assets/23109467-25ca-4d69-b62e-b1c77dd1d93f)
![image](https://github.com/user-attachments/assets/85c83949-0574-4ac6-a1cc-7a70646b0516)

![Screenshot 2024-09-24 120902](https://github.com/user-attachments/assets/80496294-3055-457d-b8e2-f2dc5c850580)
![image](https://github.com/user-attachments/assets/2f39d913-1aa2-4178-9ed7-91f0d0579186)
![Screenshot 2024-09-24 120920](https://github.com/user-attachments/assets/ae169f69-a9df-4e33-9437-dd5effc34b37)

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

- **Email:** lakshan.21@cse.mrt.ac.lk
- **GitHub:** https://github.com/lakshan1946
