# E-Commerce Backend Project

This project is a backend for an E-Commerce platform implemented using RESTful APIs. The application is designed to handle various functionalities essential for an online shopping platform, such as Product Management, User Management, Cart Management, and Order Management.

## Features

### Product Management
- Add Products
- Get Products
- Filter Products
- Rate Products

### User Management
- Sign Up
- Sign In

### Cart Management
- Add to Cart
- Remove from Cart
- Get Cart Items

### Order Management
- Place Order
- Update Status
- Get Status

## Technologies Used
- **Node.js**: Backend runtime environment
- **Express.js**: Web framework for building APIs
- **MongoDB**: Database for storing data
- **Mongoose**: ODM for MongoDB
- **RESTful APIs**: Architectural style for designing networked applications

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nikhilBornare/E-commerce-API.git
   ```

2. Navigate to the project directory:
   ```bash
   cd E-commerce-API
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up the environment variables. Create a `.env` file in the root directory and add the following:
   ```env
   MONGO_URI=<Your MongoDB Connection String>
   PORT=3000
   JWT_SECRET=<Your JWT Secret Key>
   ```

5. Start the server:
   ```bash
   npm start
   ```

6. Access the application at `http://localhost:3200`.

## API Endpoints

### Product Management
- **POST** `/api/products`: Add a new product
- **GET** `/api/products`: Retrieve all products
- **GET** `/api/products/:id`: Retrieve a specific product
- **PUT** `/api/products/:id/rate`: Rate a product

### User Management
- **POST** `/api/users/signup`: User registration
- **POST** `/api/users/login`: User login

### Cart Management
- **POST** `/api/cart`: Add an item to the cart
- **DELETE** `/api/cart/:id`: Remove an item from the cart
- **GET** `/api/cart`: Get all cart items

### Order Management
- **POST** `/api/orders`: Place an order
- **PUT** `/api/orders/:id/status`: Update order status
- **GET** `/api/orders/:id`: Get order details

## Project Structure
```
E-commerce-API/
├── controllers/
├── models/
├── routes/
├── middlewares/
├── utils/
├── index.js
├── package.json
└── README.md
```

## How to Contribute
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add a feature"
   ```
4. Push your changes:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

## License
This project is licensed under the [MIT License](LICENSE).

## Author
[Nikhil Bornare](https://github.com/nikhilBornare)
