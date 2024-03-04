const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

const misRutas = require('./routes/routesTest.js');

app.use('/routes', misRutas);

// app.post('/post', bodyParser.urlencoded({ extended: false }), (request, response) => {
//     misRutas.handle(request, response);
// });

// Catch 404 for non-main routes and forward to error handler
app.use((request, response, next) => {
    const isMainRoute = request.path === '/';

    if (isMainRoute) {
        // Handle the main route here (e.g., render a homepage)
        response.send('Welcome to the main route!');
    } else {
        // For non-main routes, treat it as a 404 error
        const error = new Error('Not Found');
        error.status = 404;
        next(error);
    }
});

// Error handler
app.use((error, request, response, next) => {
    response.status(error.status || 500);
    response.send({
        error: {
            message: error.message
        }
    });
});



app.listen(3000);
