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
        .then((cypheredPass) => {
            return db.execute(
                `INSERT INTO usuario (username, nombre, password) 
                VALUES (?, ?, ?)`, 
                [this.username, this.nombre, cypheredPass]);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    static fetchOne(username) {
        return db.execute('Select * from usuario WHERE username = ?', [username]);
    }
}