const Customer = require('../models/customer.models');
const mongoose = require('mongoose');

// Get /
// Home page
exports.homePage = async (req, res) => {
    const locals = {
			title: "User Management System",
            description: 'A simple CRUD application for managing users'
		};  

	res.render("index", { locals });
};

// Get
//New customer page
exports.addNewCustomerPage = async (req, res) => {
	const locals = {
		title: "Add new customer page",
		description: "A simple CRUD application for managing users",
	};

	res.render("customer/addCustomer", { locals });
};

// Post
//New customer page
exports.postNewCustomer = async (req, res) => {
	console.log(req.body);

	const newCustomer = new Customer({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		tel: req.body.tel,
		email: req.body.email,
		details: req.body.details,
	});

	try {
		await Customer.create(newCustomer);
		await req.flash('info');
		res.redirect('/');
	} catch (error) {
		console.log(error);
	}
	
};

exports.addNewCustomer = async (req, res) => {};

exports.getCustomer = async (req, res) => {}; //by ID 

exports.getAllCustomers = async (req, res) => {};

exports.updateCustomer = async (req, res) => {}; //by ID

exports.deleteCustomer = async (req, res) => {}; // by ID