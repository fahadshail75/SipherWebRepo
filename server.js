const express = require('express');
const app = express();
const path = require('path');
const engine = require('ejs-mate');

// Use ejs-mate for layout support
app.engine('ejs', engine);

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes

// Home route
app.get('/home', (req, res) => {
    res.render('home');
});

// About route
app.get('/about', (req, res) => {
    res.render('about');
});

// Services route
app.get('/services', (req, res) => {
    res.render('service');
});

//package route
app.get('/packages', (req, res) => {
    res.render('package');
});

//career route
app.get('/career', (req, res) => {
    res.render('career');
});


//contact route
app.get('/contact', (req, res) => {
    res.render('contact');
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
