const express = require('express');
const router = express.Router();

const fs = require('fs');
const bodyParser = require('body-parser');

router.get('/about', (request, response, next) => {
    response.render('about');
});

router.get('/', (request, response, next) => {
    response.render('./includes/head');
});

router.get('/noAndeDeCurioso', (request, response, next) => {
    response.render('curioso');
});

router.post('/noAndeDeCurioso', (request, response, next) => {
    console.log(request.body);

    const data = request.body.data;

    // Save the data to a text file 
    const filePath = 'data.txt';

    fs.appendFile(filePath, data + '\n', (err) => {
        if (err) {
            console.error(err);
            response.status(500).send('Internal Server Error');
        } else {
            // response.send('Datos guardados exitosamente');
            response.redirect('/');
        }   
    });
    
    response.redirect('/');
});

module.exports = router;