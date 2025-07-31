const express = require('express');
const {
	homePage,
    addNewCustomerPage,
	postNewCustomer, 
	getCustomer,
	getAllCustomers,
	updateCustomer,
    deleteCustomer,
} = require("../controllers/customer.controllers");

const customerRoute = express.Router(); 

//Customer Routes
customerRoute.get('/', homePage);

customerRoute.get('/addCustomer', addNewCustomerPage);
customerRoute.post("/addCustomer", postNewCustomer);

module.exports = customerRoute;