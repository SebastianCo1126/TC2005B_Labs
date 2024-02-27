
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
    console.log(request.url);

    if (request.url == "/") {
        response.setHeader('Content-Type', 'text/html');
        response.write(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <style>
            p {color: rgb(24, 24, 25); font-family: 'Helvetica';}
            #descp {margin: 0px;}
            
            h2 {
                font-family: 'Helvetica';
                color: rgb(127, 36, 160);
                margin-top: 20px;
            }
    
            .txt {
                background-color: rgb(202, 206, 232);
                margin: 10px;
                padding: 10px;
            }
    
            *p {
                float: left;
            }
    
    
            #title:hover {
                font-size: 2.5em;
            }
    
            #sob:hover {
                color: rgb(100, 100, 217);
            }
    
            #title {
                font-family: 'Helvetica'; 
                font-weight: bold; 
                background-color: rgb(220, 220, 220);
                padding: 30px; 
                font-size: 2em;
                margin: 0;
                text-align: left;
                -webkit-transition: font-size .5s ease;
                -moz-transition: font-size .5s ease;
                -o-transition: font-size .5s ease;
                transition: font-size .5s ease;
            }
    
            #bu {
                background-color: #797dcf; 
                border: none;
                color: white;
                padding: 15px 32px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
            }
        </style>
        <body>
            <header>
                <h2 id="title", style="color:rgb(73, 31, 73)">
                    Sebastián Colín
                </h2>
                <p id="descp">
                    Creative and Software Engineer
                </p>
            </header>
            <h2 id="sob">
                Sobre mi: 
            </h2>
            <p class="txt">
                Me encanta el arte, el cine, la música y la tecnología. Algún día me 
                gustaría entrelazar estas disciplinas con la Ingeniería de Software y 
                poder generar contenidos mediante la producción virtual, además de utilizar
                realidades mixtas y aumentadas. 
            </p>
        
            <ul style="font-family: 'Helvetica';">
                <li>
                    Pruebas
                </li>
                <li>
                    de
                </li>
                <li>
                    listas
                </li>
            </ul>
        
            <button type="button", id="bu">
                Un botón bonito
            </button>
        </body>
        </html>`)
        response.end();
        
    }
    else {
        response.statusCode = 404;
        response.end();
    }


});

server.listen(3000);