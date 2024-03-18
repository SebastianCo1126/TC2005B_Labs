const db = require('../util/database');

module.exports = class Camara {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_clase, my_year, my_format, mi_desc, mi_imagen) {
        this.clase = mi_clase;
        this.year = my_year;
        this.format = my_format;
        this.descripcion = mi_desc;
        this.imagen = mi_imagen;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute(
            `INSERT INTO camara (clase, year, format, descripcion, imagen) 
            VALUES (?, ?, ?, ?, ?)`, 
            [this.clase, this.year, this.format, this.descripcion, this.imagen]);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('Select * from camara');
    }

    static fetch(id) {
        if (id) {
            return this.fetchOne(id);
        } else {
            return this.fetchAll();
        }
    }

    static fetchOne(id) {
        return db.execute('Select * from camara WHERE idC = ?', [id]);
    }

}