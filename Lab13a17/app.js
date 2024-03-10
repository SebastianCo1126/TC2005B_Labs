// Node.js environment for web 
const express = require('express');
const app = express();

// Template engine for node for dynamic HTML
app.set('view engine', 'ejs');
app.set('views', 'views');

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

//Middleware
app.use((request, response, next) => {
  console.log('Middleware!');
  next(); 
});

const rutasClases = require('./routes/clases.routes');

app.use('/', rutasClases);

app.use((request, response, next) => {
  response.status(404);
  response.sendFile(path.join(__dirname, 'views', '404.html')); 
});

app.listen(3000);