const camaras = [
    {
        clase: "Bolsey C22", 
        year: 1950, 
        format: "35mm", 
        descripción: "La Bolsey C22, una cámara de 35 mm TLR + reangefinder de la década de 1950 \
        fabricada por Bolsey Corporation, cuenta con un distintivo diseño de estilo art decó \
        combinado con modernismo. A pesar de su tamaño reducido, combina una campana a nivel \
        de la cintura, un objetivo de enfoque y un telémetro acoplado, lo que la convierte en \
        una joya única en la fotografía vintage.",
        imagen: "https://farm9.staticflickr.com/8218/8266814112_1914c0250a.jpg",
    },
    
    {
        clase: "Zeiss Ikon Ikoflex II", 
        year: 1930, 
        format: "120mm",
        descripcion: "La Zeiss Ikon Ikoflex IIA ofrece una perspectiva única de las cámaras gemelas \
        de lentes Zeiss Ikon.Fabricada por Zeiss Ikon desde principios de la década de 1930 hasta finales \
        de la década de 1950, la serie Ikoflex buscaba competir con la Rolleicord, compartiendo similitudes \
        funcionales. Compacto y portátil, el diseño del IIa, aunque falto de imaginación, refleja durabilidad \
        y calidad. La cámara cuenta con una lente de visualización Teronar y una lente de toma Zeiss Opton Tessar, \
        mostrando la popularidad duradera del IIa como cámara de usuario.En general, el Zeiss Ikon Ikoflex IIA \
        ofrece una combinación de importancia histórica, durabilidad y diseño funcional para los entusiastas \
        dispuestos a explorar su encanto poco convencional.",
        imagen: "https://farm9.staticflickr.com/8204/8250109516_032577d92d.jpg",
    }

];

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
        camaras.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return camaras;
    }

}