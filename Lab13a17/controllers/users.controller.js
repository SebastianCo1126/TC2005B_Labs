const Usuario = require('../models/usuario.model');

exports.get_login = (request, response, next) => {
    response.render('login', {
        username: request.session.username || '',
        registro: false,
    });

};
exports.post_login = (request, response, next) => {
    request.session.username = request.body.username;
    response.redirect('/');
};

exports.get_logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/users/login'); //Este código se ejecuta cuando la sesión se elimina.
    });
};

exports.get_signup = (request, response, next) => {
    response.render('login', {
        username: request.session.username || '',
        registro: true,
    });
};

exports.post_signup = (request, response, next) => {
    const nuevo_usuario = new Usuario(
        request.body.username, request.body.name, request.body.password
    );
    nuevo_usuario.save()
        .then(() => {
            response.redirect('/users/login');
        })
        .catch((error) => {
            console.log(error);
        });
    response.redirect('/users/login');
};