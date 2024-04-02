const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class Usuario {

    constructor(mi_username, mi_nombre, mi_password) {
        this.username = mi_username;
        this.nombre = mi_nombre;
        this.password = mi_password;
    }
    save() {
        return bcrypt.hash(this.password, 12)
            .then(async (password_cifrado) => {
                try {
                    await db.execute(
                        `INSERT INTO usuario (username, nombre, password) 
                        VALUES (?, ?, ?)`, 
                        [this.username, this.nombre, password_cifrado]
                    );
                    return db.execute(
                        'INSERT INTO usuariorol (idUsuario, idRol) VALUES (?, 1)', 
                        [this.username]
                    );
                } catch(error) {
                    console.log(error);
                    throw Error('Usuario duplicado');
                }
            });

    }

    static fetchOne(username) {
        return db.execute('Select * from usuario WHERE username = ?', [username]);
    }

    static getPermisos(username) {
        return db.execute(`
            SELECT Nombre
            FROM privilegio pr, rolprivilegio po, rol r, usuariorol a, usuario u
            WHERE u.username = ? AND u.username = a.username AND
            a.idRol = r.idRol AND r.idRol = po.idRol AND po.idpermiso = pr.idPrivilegio
        `, [username]);
    }
}