const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const router = express.Router();

router.get('/rutaUno', (request, response, next) => {
    console.log(request.body);
    response.send('Esta es la ruta uno!'); 
});

router.get('/rutaDos', (request, response, next) => {
    console.log(request.body);  
    response.send('Esta es la ruta dos!'); 
});

router.get('/rutaTres', (request, response, next) => {
    console.log(request.body);  
    response.send('Esta es la ruta tres!'); 
});

router.get('/rutaCuatro', (request, response, next) => {
    console.log(request.body);  
    response.send('Esta es la ruta cuatro!'); 
});

router.use(bodyParser.urlencoded({ extended: false }));

router.route('/post')
    .get((request, response) => {
        response.send(`
            <html>
                <head>
                    <title>Formulario</title>
                </head>
                <body>
                    <h1>Formulario</h1>
                    <form action="/routes/post" method="POST">
                        <label for="data">Ingrese datos:</label>
                        <input type="text" id="data" name="data" required>
                        <button type="submit">Enviar</button>
                    </form>
                </body>
            </html>
        `);
    })
    .post((request, response) => {
        const data = request.body.data;

        // Save the data to a text file 
        const filePath = 'data.txt';

        fs.appendFile(filePath, data + '\n', (err) => {
            if (err) {
                console.error(err);
                response.status(500).send('Internal Server Error');
            } else {
                response.send('Datos guardados exitosamente');
            }
        });
    });

module.exports = router;
                        