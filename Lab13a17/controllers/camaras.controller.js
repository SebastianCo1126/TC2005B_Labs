const Camara = require('../models/camaras.models');

exports.get_crear = (request, response, next) => {
    response.render('crear',{
        username: request.session.username || '',
    });
};

exports.get_masInfo = (request, response, next) => {
    response.render('masInfo', {
        username: request.session.username || '',
        camaras: Camara.fetchAll(),
    });
};

exports.post_crear = (request, response, next) => {

    console.log(request.body);

    const mi_camara = new Camara(

        request.body.clase, request.body.year, request.body.format, 
        request.body.descripcion ,request.body.imagen

    );

    mi_camara.save();
    response.setHeader('Set-Cookie', 'ultima_camara=' + mi_camara.clase + '; HttpOnly');
    response.redirect('/');

};

exports.get_root = (request, response, next) => {
    console.log(request.cookies);
    console.log(request.cookies.ultima_camara);
    response.render('camaras', {
        camaras: Camara.fetchAll(),
        ultima_camara: request.cookies.ultima_camara || '',
        username: request.session.username || '',
    });
};



