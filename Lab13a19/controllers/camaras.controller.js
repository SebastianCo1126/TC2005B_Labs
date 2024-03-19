const Camara = require('../models/camaras.models');

exports.get_crear = (request, response, next) => {
    response.render('crear',{
        username: request.session.username || '',
        csrfToken: request.csrfToken(),
        permisos: request.session.permisos || [],
        editar: false
    });
};

exports.get_camaras = (request, response, next) => {
    response.render('camaras',{
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

    mi_camara.save().then(([rows, fieldData]) => {
        response.setHeader('Set-Cookie', 'ultima_camara=' + mi_camara.clase + '; HttpOnly');
        response.redirect('/camaras');
    })
    .catch((error) => {
        console.log(error);
    });
};

exports.get_root = (request, response, next) => {
    console.log(request.cookies);
    console.log(request.cookies.ultima_camara);

    Camara.fetch(request.params.camara_id).then(([rows, fieldData]) => {
        //console.log(fieldData);
        response.render('camaras', {
            camaras: rows,
            ultima_camara: request.cookies.ultima_camara || '',
            username: request.session.username || '',
            permisos: request.session.permisos || [],
        });
        
    }).catch((error) => {
        console.log(error)
    });

};