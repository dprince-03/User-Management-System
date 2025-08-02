# CRUD User Management System

A comprehensive User Management System built with Node.js, Express, MongoDB, and EJS templating. This application demonstrates full CRUD (Create, Read, Update, Delete) operations with a clean, responsive interface using Bootstrap.

## Features

- **User Management**: Create, read, update, and delete user records
- **Search Functionality**: Search users by name
- **Responsive Design**: Mobile-friendly interface using Bootstrap 5
- **Flash Messaging**: User feedback for actions (success, error messages)
- **Pagination**: Efficiently navigate through user records
- **404 Error Handling**: Custom 404 page for unmatched routes
- **About Page**: Information about the project and developer

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Templating**: EJS (Embedded JavaScript)
- **Frontend**: Bootstrap 5, Bootstrap Icons
- **Middleware**: express-session, connect-flash, method-override
- **Development**: nodemon for auto-restart during development

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/crud-user-management-system.git
   ```

2. Navigate to the project directory:
   ```bash
   cd crud-user-management-system
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

Replace `your_mongodb_connection_string` with your actual MongoDB connection string.

For local MongoDB installation, you can use:
```env
MONGODB_URI=mongodb://localhost:27017/user-management-system
```

## Running the Application

### Development Mode
```bash
npm run dev
```
This will start the server with nodemon for auto-restart on file changes.

### Production Mode
```bash
npm start
```
This will start the server with Node.js.

The application will be available at `http://localhost:5000` (or your specified PORT).

## Project Structure

```
├── src/
│   ├── controllers/     # Request handlers
│   ├── models/          # Database models
│   ├── routes/          # Route definitions
│   ├── config/          # Configuration files
│   └── server.js        # Entry point
├── views/
│   ├── customer/        # Customer-related views
│   ├── layouts/         # Main layout templates
│   ├── partials/        # Reusable view components
│   └── *.ejs            # Individual page templates
├── public/
│   ├── css/             # Stylesheets
│   └── img/             # Images
├── .env                 # Environment variables
├── package.json         # Project dependencies and scripts
└── README.md            # This file
```

## Usage

1. **Dashboard/Home Page**: View all users with pagination
2. **Add New User**: Create new user records
3. **View User**: See detailed information for a specific user
4. **Edit User**: Update existing user information
5. **Delete User**: Remove users from the system
6. **Search**: Find users by name using the search bar
7. **About**: Learn more about the project and developer

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)

## Support

If you find this project helpful, consider visiting and subscribing to the [YouTube Channel](https://youtube.com/raddydev) for more tutorials and web development content!
