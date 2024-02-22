
// fs es el módulo que contiene las funciones
// para manipular el sistema de archivos
const filesystem = require('fs');

filesystem.writeFileSync('hola.txt', 'Hola desde Node!');