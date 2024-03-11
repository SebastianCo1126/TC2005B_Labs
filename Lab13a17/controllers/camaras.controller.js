const Camara = require('../models/camaras.models');

exports.get_crear = (request, response, next) => {
    response.render('crear');
};

exports.get_masInfo = (request, response, next) => {
    response.render('masInfo', {
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

    response.redirect('/');

};

exports.get_root = (request, response, next) => {
    response.render('camaras', {
        camaras: Camara.fetchAll(),
    });
};



