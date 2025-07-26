
# Wanderlust /property-rental-app
A Full-Stack Web Application 


---

## Table of Contents

-   [Project Overview](#project-overview)
-   [Technologies & Packages Used](#technologies--packages-used)
-   [Key Features](#key-features)
-   [How to Install](#how-to-install)
-   [Challenges & Solutions](#challenges--solutions)
-   [Author](#author)



## Project Overview

Excited to share my journey of developing a feature-rich full-stack web application inspired by Airbnb. The project is built using MongoDB, Express.js, and Node.js.

## Technologies & Packages Used

### Backend

-   **MongoDB**: NoSQL database for flexible and scalable data storage.
-   **Express.js**: Web application framework for Node.js, providing robust features for web and mobile applications.
-   **Node.js**: JavaScript runtime for server-side development.

### Authentication

-   **Passport.js**: Middleware for user authentication, supporting various strategies.
-   **Dotenv**: Environment variable management for secure configuration.

### Image Storage

-   **Cloudinary**: Cloud-based image and video management solution.

### Maps

-   **Mapbox**: Platform for custom maps and location-based experiences.

### Frontend

-   **EJS**: Embedded JavaScript templates for dynamic content rendering.

### Session Management

-   **Connect Flash**: Middleware for flash messages.
-   **Connect Mongo**: MongoDB session store for Express.js.
-   **Cookie Parser**: Middleware for parsing cookies.

### Validation

-   **Joi**: Library for data validation.

### Object Modeling

-   **Mongoose**: MongoDB object modeling for Node.js.

### File Uploads

-   **Multer**: Middleware for handling file uploads.

### Social Authentication

-   **Passport Local**: Local authentication strategy.
-   **Passport Facebook**: Facebook authentication strategy.
-   **Passport Google OAuth20**: Google OAuth2.0 authentication strategy.
-   **Passport Local Mongoose**: Mongoose-specific authentication strategy.
    Authentication

## Key Features

-   **User Authentication:** Login, Logout, and User Profile Section
-   **CRUD Operations:** Add, Edit, and Delete Listings
-   **Review System:** Add and Delete Reviews
-   **Account Management:** Update User Account and Password
-   **User Data Security:** Password Hashing and Encryption
-   **Interactive Maps:** Leveraging Mapbox for Location Visualization
-   **Login with Email:** Traditional email login for user convenience

## How to Install

Follow these steps to set up and run the project locally:

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/Vinayakry63/property-rental-app.git
    cd property-rental-app
    ```

2.  **Install Dependencies:**

    ```bash
    npm install
    ```

3.  **Set Up Environment Variables:**

    Configure the following environment variables by creating a .env file in the root of your project:

     Replace the values with your specific configurations.

4.  **Run the Application:**

    ```bash
    node app.js
    ```

5.  **Open in Your Browser:**

    Open `http://localhost:3000/listings` in your web browser.

## Challenges & Solutions

Encountered challenges, especially with data handling, but implemented efficient solutions. Overcame scalability issues with a well-architected backend.


## Author

Vinayak R Y 


## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---
