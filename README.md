# Ecommerce-Follow-Along
# MERN E-Commerce Store

This is a full-stack e-commerce application built using the MERN stack (MongoDB, Express.js, React, Node.js). The app allows users to browse products, manage a shopping cart, place orders, and provides an admin panel for product and order management.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Login, registration, and session management.
- **Product Browsing**: Users can browse products, filter by category, and view product details.
- **Shopping Cart**: Users can add, remove, and update quantities of products in the cart.
- **Order Management**: Place an order, view past orders, and check order statuses.
- **Admin Panel**: Admins can add, edit, and delete products, manage orders, and update inventory.
- **Payment Integration**: Integration with Stripe or PayPal for secure payment processing (optional for production).

## Tech Stack

- **Frontend**: React.js, React Router, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (using Mongoose)
- **Authentication**: JSON Web Tokens (JWT)
- **Payment Gateway**: Stripe/PayPal (optional)
- **State Management**: Redux (optional)


Milestone 1: Project Overview
In Milestone 1, we focused on laying the groundwork for the e-commerce application. This included defining the project scope, setting up the tech stack (MongoDB, Express.js, React, Node.js), and establishing the basic folder structure for both the backend and frontend. We also covered the environment setup, including installing necessary dependencies and configuring the project for local development. The goal of this milestone was to ensure that the project foundation was solid and ready for the next steps in building the full application.


## Milestone 2: Project Setup and Login Page

### Summary of Achievements:
In this milestone, we focused on setting up the foundational structure of the e-commerce application and creating a functional login page. The following tasks were completed:

1. **Project Folder Structure**:
    - Organized the project into two main directories: `frontend` and `backend` to separate the React application and Node.js server code.

2. **React Frontend Setup**:
    - Initialized the `frontend` directory with a new React application using `create-react-app`.
    - Installed necessary dependencies, including `react-router-dom` for routing and `tailwindcss` for styling.

3. **Node.js Backend Setup**:
    - Set up the `backend` directory with a basic Node.js server using Express.
    - Configured the server to listen on port 5000, preparing for future API integrations.

4. **Tailwind CSS Configuration**:
    - Integrated and configured Tailwind CSS in the React app for streamlined, utility-based styling.
    - Ensured Tailwind was set up correctly for responsive design and modern styling features.

5. **Login Page Development**:
    - Designed and implemented the Login Page UI using React and Tailwind CSS.
    - Added basic form elements such as email and password inputs.
    - Created a submit button and handled form validation to ensure basic functionality for the login page.


# Follow-Along Project - Milestone 3

## Backend Setup
- **Node.js** with **Express** is used to build the backend.
- **MongoDB** is connected using **Mongoose** to store data.

### Steps to Run
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file and add your MongoDB connection URI (`MONGO_URI`) and port number (`PORT`).
4. Start the server with:
    ```bash
    node --watch index.js
    ```
5. Visit `http://localhost:5000/api/products` to see the products (if that route is set up).

### Error Handling
All errors are caught and handled in `errorHandler.js` and sent back in a structured format.


## Milestone 4: User Model, Controller, and File Uploads

### Summary of Achievements:
In this milestone, we focused on creating a User model to define how user data will be structured and stored in the database, setting up a controller to manage user-related actions (such as registration and login), and implementing Multer for file uploads.

1. **User Model**:
    - Created a `User` model in MongoDB using Mongoose.
    - Defined the schema for storing user information such as `name`, `email`, `password`, and `profilePicture`.
    - Added validations to ensure that the required fields are provided and meet specific criteria.

2. **User Controller**:
    - Created a `UserController` to handle user-related API requests.
    - Included basic functionality for creating a new user (`register`) and fetching user information (`getUser`).
    - Implemented password hashing using `bcryptjs` to securely store user passwords.

3. **Multer File Upload**:
    - Set up Multer to handle file uploads (such as profile pictures).
    - Configured Multer to save images to a specific folder on the server and ensure that only image files are uploaded.
    - Added logic to associate uploaded files with user accounts in the database.


## Milestone 4: User Model, Controller, and File Uploads

### Achievements:
1. Created the **User Model** with fields for name, email, password, and profile picture.
2. Implemented the **User Controller** to handle user registration, password hashing, and fetching user data.
3. Configured **Multer** for handling file uploads (profile pictures).
4. Set up routes for **user registration** and **getting user details**.


