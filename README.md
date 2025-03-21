# E-Commerce Platform: Backend Web Development Project

## **Milestone 1: Project Introduction**

**Project Overview:**
This project focuses on building a fully operational e-commerce platform using the MERN stack — MongoDB, Express, React, and Node.js. The front-end will be developed with React’s Create React App (CRA), MongoDB will serve as the database, and Node.js with Express will manage back-end server functionality.

The project will be divided into two major sections: **Frontend** and **Backend** development.

- **Frontend:** Various user-facing pages will be created, including:
  - Login Page
  - Sign Up Page
  - Forgot Password Page
  - Home Page
  - Product Listing Page
  - Cart Page
  - Address Form Page
  - Payment Page
  - Order Confirmation Page
  - Order History Page
  - Help Page
  - Error Page
  - Product Details Page

- **Backend:** The server will manage data operations with MongoDB using Mongoose for schema consistency. API endpoints will handle CRUD operations (Create, Read, Update, Delete) through HTTP methods like `POST`, `GET`, `PUT`, `PATCH`, and `DELETE`.

We will use **bcrypt** to hash user passwords for added security, and the project structure will prioritize scalability and maintainability.

---

## **Milestone 2: Frontend Setup (Login Page)**

In this milestone, the **Login Page** was built using React’s CRA. For an improved interface, **Tailwind CSS** was integrated for styling and **React-Icons** for visual enhancements. Tailwind’s utility-first approach ensures a responsive and modern design.

The Login Page includes fields for email and password, form validation, state management, and error handling. Icons enhance usability and the overall experience.

---

## **Milestone 3: Backend Setup and Project Structure**

We established the foundational structure for the backend as follows:

- **`src/` Directory:** Contains server-side source files.
  - **`config/`**: Holds environment configuration like MongoDB URL and port.
  - **`controllers/`**: Handles request logic for different routes.
  - **`database/`**: Connects to MongoDB via `db.js`.
  - **`middleware/`**: Contains custom middleware like centralized error handling.
  - **`models/`**: Defines Mongoose schemas.
  - **`routes/`**: Sets up API endpoints.
  - **`utils/`**: Includes helper functions like `ErrorHandler.js`.

The **`index.js`** file sets up the Express app, basic routing, and server listener.

---

## **Milestone 4: User Model, Controller, and Multer Integration**

We created the **User Model** and its controller, then integrated **Multer** for handling file uploads.

---

## **Milestone 5: Missing Number Task (Small Task)**

This milestone focused on solving the missing number problem in an array.

---

## **Milestone 6: Password Encryption and User Data Storage**

- **Password Hashing:** Implemented **bcrypt** to encrypt passwords during signup, storing only hashed versions in the database.
- **User Data Management:** Ensured all user information (like name and email) is stored securely, with password encryption maintained throughout.

---

## **Milestone 7: Login Endpoint Development**

- **User Authentication:** The endpoint accepts user credentials, retrieves user data, and verifies the password using bcrypt.
- **Password Validation:** Hashed passwords are compared for secure authentication.

---

## **Milestone 8: Product Display Components**

Two React components were created:
- **Home.jsx:** Displays the product list.
- **ProductCard.jsx:** Acts as a template for individual product information.

Products are dynamically mapped and displayed based on database content.

---

## **Milestone 9: Product Form Creation**

- **Frontend Form:** A user-friendly form to input product details like name, price, description, category, and images.
- **Form File:** Created **ProductForm.jsx** for data collection and validation.

---

## **Milestone 10: Product Schema and API Integration**

- **Schema:** Defined **ProductModel.js** using Mongoose.
- **API:** Developed an endpoint to handle `POST` requests for adding product data to MongoDB.
- **File Upload:** Utilized **Multer** middleware for image handling.

---

## **Milestone 11 & 12: Frontend-Backend Integration**

- **Data Fetching:** Updated **Products.js** to retrieve product data from MongoDB and pass it to **Home.jsx**.
- **Form Submission:** Enhanced the product form to send data to the database.

---

## **Milestone 13: Product Update Feature**

- **Edit Functionality:** Created an endpoint to update product data with a `PUT` request.
- **Frontend Enhancements:** Added edit and delete buttons, with role-based visibility for sellers.

---

## **Milestone 14: Product Deletion and Bug Fixes**

- **Delete Feature:** Implemented an endpoint to delete products by ID.
- **Bug Fixes:** Resolved unexpected behavior and optimized routing.

...

## Milestone 15: Navigation Bar Implementation

Navbar Creation: Developed a persistent navigation bar that appears on all pages, enhancing user navigation.
NavLinks Added: Included links to Home, Product Form, Login, and Sign Up pages for easy access.
Styling: Utilized Tailwind CSS to ensure a responsive and visually appealing design.

## Milestone 16: Single Product Detail Page

SingleProduct.jsx: Developed a dedicated page to display detailed information about individual products.
Routing: Configured routes to navigate to the Single Product page from the product listings.
Enhancements: Made minor adjustments to improve user experience across the site.

## Milestone 17 & 18: Cart Functionality Development

Cart Schema: Extended the existing schema to include cart details for each user.
Post Request: Created an endpoint to handle adding products to the user's cart and storing them in the database.
Multer Integration: Ensured image uploads function correctly within the cart system.

### Milestone 19: Cart Page Implementation

Cart Components: Developed Cart.jsx and CartComponent.jsx to render the cart interface.
Data Fetching: Implemented fetch requests to retrieve and display products in the user's cart.
Quantity Management: Added functionality to adjust product quantities using increment and decrement buttons.

## Milestone 20: User Profile Page

Profile Endpoint: Established an endpoint to retrieve and send user data to the frontend.
Profile.jsx: Created a profile page to display user information, enhancing personalization.

## Milestone 21: Address Form Creation

Address.jsx: Developed a form for users to input address details, including country, state, and pincode.
State Management: Utilized useState hook to manage form inputs.
Form Submission: Implemented Axios to send address data to the backend and navigate to the profile page upon submission.

## Milestone 22: Address Data Handling

Backend Endpoint: Created an endpoint to receive and store address data from the frontend.
JWT Authentication: Implemented JSON Web Tokens to authenticate address submissions securely.

## Milestone 23: Order Placement Workflow

Place Order Button: Added functionality in the cart page to initiate the order placement process.
Select Address Page: Developed a page displaying all user addresses with an option to select a delivery address.
Address Retrieval: Created a backend endpoint to fetch all addresses associated with a user.

## Milestone 24: Order Summary and Confirmation
Order Summary: Displayed all products included in the order along with selected delivery address and total cart value.
Place Order Button: Implemented a final confirmation button to place the order, completing the purchase process.

## Milestone 25: Backend Endpoint for Placing Orders
Created an API endpoint to receive user, product, and address details, retrieve user _id via email, and store individual product orders with the same address in the MongoDB orders collection.

## Milestone 26: Fetch User Orders Endpoint
Built an API endpoint to fetch all orders of a user by retrieving their _id using their email and sending all associated orders in the response.

# Milestone 27: My Orders Page
We created a "My Orders" page for the frontend of the Ecommerce-Follow-Along project. This page displays all the orders placed by the user.

# Milestone 28 - Cancel Order Feature
Added a "Cancel Order" button in the My Orders page and created a backend endpoint to update order status to "Cancelled".  
Users can cancel their orders unless they are already marked as "Cancelled". 

# Milestone 29 - PayPal Integration
In this milestone, we added an online payment option using the PayPal API. Users can now choose between COD and PayPal for payment. PayPal buttons will be displayed when the online payment option is selected. The next milestone will focus on implementing the payment functionality.

# Milestone 30 - Payment Options
Implemented PayPal API for online payments.
Installed react-paypal-js and integrated PayPalScriptProvider.
Configured PayPal sandbox client ID for testing transactions.
Added PayPal payment buttons in the order confirmation page.
Pushed the updated code to GitHub. 🚀
