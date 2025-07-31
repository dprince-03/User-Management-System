require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');
const flash = require('connect-flash');
const session = require('express-session');

const connectDB = require('./config/db.config');
const customerRoute = require('./routes/customer.routes');

const app = express();
const PORT = process.env.PORT || 5000;

//connect to Database
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Static files
app.use(express.static('public'));

// Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

//home route
app.use('/', customerRoute);

// Express session
app.use(session({
	secret: 'secret',
	resave: false,
	saveUninitialized: true,
	cookies: {
		maxAge: 1000 * 60 * 60 * 24 * 7
	}
}));

// Flash message (middleware)
app.use(flash({
	sessionKeyName: 'flashMessage',
}));

//Handle 404
app.use((req, res) => {
	const locals = {
		title: "Page Not Found",
		description: "The requested page could not be found.",
	};
	res.status(404).render("404", { locals });
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT: http://localhost:${PORT}`); 
});