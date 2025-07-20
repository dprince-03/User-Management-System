const express = require('express');
const {
	homePage,
    addNewCustomerPage,
	addNewCustomer, 
	getCustomer,
	getAllCustomers,
	updateCustomer,
    deleteCustomer,
} = require("../controllers/customer.controllers");

const customerRoute = express.Router(); 

//Customer Routes
customerRoute.get('/', homePage);
customerRoute.get('/addCustomer', addNewCustomerPage);

module.exports = customerRoute;