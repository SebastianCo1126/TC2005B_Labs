

const filesystem = require('fs');

const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000];

for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item);
}

const  http = require('http');

const server = http.createServer((request, response) => {
  console.log(request.url);

  if (request.url == "/") {
    response.setHeader('Content-Type', 'text/html');
    response.write("Ruta Main!");
    response.end();
  } else if (request.url == "/rutaUno") {
    response.setHeader('Content-Type', 'text/html');
    response.write("Ruta Uno!");
    response.end();
  } else if (request.url == "/rutaDos") {
    response.setHeader('Content-Type', 'text/html');
    response.write("Ruta Dos!");
    response.end();
  } else {
    response.statusCode = 404;
    response.write("Error 404!");
    response.end();
  }
});

server.listen(3000);


