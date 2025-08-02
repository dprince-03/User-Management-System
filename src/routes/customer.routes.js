const express = require('express');
const {
	homePage,
	about,
    addNewCustomerPage,
	postNewCustomer, 
	viewCustomer,
	editCustomer,
	updateCustomer,
    deleteCustomer,
	searchCustomer,
} = require("../controllers/customer.controllers");

const customerRoute = express.Router(); 

//Customer Routes
customerRoute.get('/', homePage); // Home page
customerRoute.get('/about', about); // About page

customerRoute.get('/addCustomer', addNewCustomerPage); // Create customer page
customerRoute.post("/addCustomer", postNewCustomer); // Create customer data

customerRoute.get("/view/:id", viewCustomer); // read customer page

customerRoute.get("/edit/:id", editCustomer); // update customer page
customerRoute.put("/edit/:id", updateCustomer); // update customer data

customerRoute.delete("/edit/:id", deleteCustomer); // delete customer data

customerRoute.search('/search', searchCustomer); // search customer data

module.exports = customerRoute;