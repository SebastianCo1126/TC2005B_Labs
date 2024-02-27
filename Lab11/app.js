//fs es el módulo que contiene las funciones para 

//manipular el sistema de archivos

const filesystem = require('fs');

//Se escribe el segundo parámetro en el archivo del primer parámetro

filesystem.writeFileSync('hola.txt', 'Hola mundo desde node');

// Express dependency
const express = require('express');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

// For server start
const app = express();

// Middleware
app.use((request, response, next) => {
   console.log('Middleware!');
   next(); 
});

const rutas = require();

app.use((request, response, next) => {
   console.log('Otro Middleware!');
   response.send('Hola Mundo!');
   next(); 
});

app.use((request, response, next) => {
    response.status(404);
    let html = '<h2 class="title"> Este clan ya no existe...</h2>';
    response.send(html); // Manda la respuesta
});


app.listen(3000);
