const Customer = require('../models/customer.models');
const mongoose = require('mongoose');
const { search } = require('../routes/customer.routes');

// Get /
// Pages
// Home page
exports.homePage = async (req, res) => {
	const messages = await req.flash("info");

    const locals = {
		title: "User Management System",
        description: 'A simple CRUD application for managing users'
	};

	let perPage = 10;
	let page = req.query.page || 1;

	try {
		const customers = await Customer.aggregate([{ $sort: { updatedAt : 1 }}])
		.skip( perPage * page - perPage)
		.limit(perPage)
		.exec();

		const count = await Customer.countDocuments({});

		res.render("index", { 
			locals, 
			messages, 
			customers ,
			current: page,
			pages: Math.ceil( count / perPage ),
		});

	} catch (error) {
		console.log(error);
	}
};

exports.about = async (req, res) => {
	const locals = {
		title: "About page",
		description: "A simple CRUD application for managing users",
	};

	try {
		res.render('about', locals);
	} catch (error) {
		console.log(error);
	}
};

// Create
// Get /
//New customer page
exports.addNewCustomerPage = async (req, res) => {
	const locals = {
		title: "Add new customer page",
		description: "A simple CRUD application for managing users",
	};

	res.render("customer/addCustomer", { locals });
};

// Post /
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
		await req.flash('info', 'Newe customer added successfully');

		res.redirect('/');
	} catch (error) {
		console.log(error);
	}
	
};

// Read
// Get /
// View customer page
// Customer by ID
exports.viewCustomer = async (req, res) => {
	const locals = {
		title: "View customer page",
		description: "A simple CRUD application for managing users",
	};

	try {
		const customer = await Customer.findOne({ _id: req.params.id});

		res.render('customer/view', { locals, customer });
	} catch (error) {
		console.log(error);
	}
}; //by ID

// Update
// Get /
// Edit customer page 
// Customer by ID
exports.editCustomer = async (req, res) => {
	const locals = {
		title: "Edit customer page",
		description: "A simple CRUD application for managing users",
	};

	try {
		const customer = await Customer.findOne({ _id: req.params.id });

		res.render("customer/edit", { locals, customer });
	} catch (error) {
		console.log(error);
	}
}; // by ID

// Update
// Put /
// Edit customer data
// Customer by ID
exports.updateCustomer = async (req, res) => {
	try {
		await Customer.findByIdAndUpdate(req.params.id, {
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			tel: req.body.tel,
			email: req.body.email,
			details: req.body.details,
			updatedAt: Date.now(),
		});

		await res.redirect(`/edit/${req.params.id}`);
	} catch (error) {
		console.log(error);
	}
}; // by ID

// Delete /
// Delete customer 
// Customer by ID
exports.deleteCustomer = async (req, res) => {
	try {
		await Customer.findByIdAndDelete(req.params.id);
		await res.redirect('/');
		await req.flash('info', 'Customer deleted successfully');
	} catch (error) {
		console.log(error);		
	}
}; // by ID

// Get /
// Search customer 
exports.searchCustomer = async (req, res) => {
	try {
		let searchTerm =  req.body.searchTerm;
		const searchNSC = searchTerm.replace(/[^a-zA-Z0-9 ]/g, "");
	
		const customers = await Customer.find({
			$or: [
				{ firstName: { $regex: new RegExp(searchNoSpecialChar, "i") } },
				{ lastName: { $regex: new RegExp(searchNoSpecialChar, "i") } },
			],
		});

		res.render('search', { customers });		
	} catch (error) {
		console.log(error);
	}
};