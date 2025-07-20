require('dotenv').config();
const express = require('express');
const expressLayout = require('express-ejs-layouts');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Static files
app.use(express.static('public'));

// Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

//home route
// app.get('/', (req, res) => {
//     const locals = {
//         title: 'User Management System',
//         description: 'A simple CRUD application for managing users'
//     };
//     // res.send('Home Page !!!');
//     res.render('index', { locals });
// });

//Handle 404
app.get('*', (req, res) => {
    res.status(404).render('404');
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT: http://localhost:${PORT}`); 
});