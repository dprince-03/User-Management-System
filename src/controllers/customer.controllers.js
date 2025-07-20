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

exports.addNewCustomer = async (req, res) => {};

exports.getCustomer = async (req, res) => {}; //by ID 

exports.getAllCustomers = async (req, res) => {};

exports.updateCustomer = async (req, res) => {}; //by ID

exports.deleteCustomer = async (req, res) => {}; // by ID