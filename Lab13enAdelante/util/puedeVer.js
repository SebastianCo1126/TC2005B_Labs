module.exports = (request, response, next) => {
    let canView =  false;
    for (let permiso of request.session.permisos) {
        if (permiso.permiso == 'ver_camaras') {
            canView = true;
        }
    }
    if(canView) {
        next();
    } else {
        return response.redirect('/users/logout');    
    }
}