
// fs es el módulo que contiene las funciones
// para manipular el sistema de archivos
const filesystem = require('fs');

// 
filesystem.writeFileSync('hola.txt', 'Hola desde Node!');



const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000];

for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item);
}

// for..in returns a list of keys on the object being iterated, 
// whereas for..of returns a list of values of the numeric properties
//  of the object being iterated.


const http = require('http');

const server = http.createServer((request, response) => {

});

server.listen(3000);