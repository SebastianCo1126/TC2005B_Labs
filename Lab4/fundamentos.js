
/* PREGUNTA 1 */ 

const num = prompt("Escribe un número.");

function tablasNumeros (x) {

    document.write("<h2>Pregunta 1</h2><p><strong> \
    Entrada</strong>: un número pedido con un prompt. \
    <strong>Salida</strong>: Una tabla con los números \
    del 1 al número dado con sus cuadrados y cubos. \
    Utiliza document.write para producir la salida.");
    document.write("<table>");
    document.write("<tr>");
    document.write("<thead>");
    document.write("<th>Num</th>");
    document.write("<th>Num<sup>2</sup></th>");
    document.write("<th>Num<sup>3</sup></th>");
    document.write("</thead>");
    document.write("</tr>");

    for (let i = 1; i <= x; i++) {
        document.write("<tr>");
        document.write("<td>" + i + "</td>");
        document.write("<td>" + (i * i) + "</td>");
        document.write("<td>" + ((i * i) * i) + "</td>");
        document.write("</tr>");
    }
    document.write("</table>");
}

tablasNumeros(num);

/* PREGUNTA 2 */

document.write("<h2>Pregunta 2</h2>");
document.write("<p><strong>Entrada</strong>: Usando un prompt se pide el \
resultado de la suma de 2 números generados de manera \
aleatoria. <strong>Salida</strong>: La página debe indicar \
si el resultado fue correcto o incorrecto, y el tiempo \
que tardó el usuario en escribir la respuesta.");

let x = Math.floor((Math.random() * 100) + 1);
let y = Math.floor((Math.random() * 100) + 1);

let t1 = new Date();

const respuesta = prompt("¿Cuánto es " + x + "+" + y + "?");

let t2 = new Date();

let tFinal = t2 - t1;
let res;

if ((x + y) == respuesta) {
    res = "Correcto!";
} else {
    res = "Incorrecto!";
}

document.write("<p>El resultado fue <strong>" + res + "!</strong></p>" );
document.write("<p>El tiempo de respuesta fue de <strong>" + (tFinal / 1000) + "</strong> segundos.</p>" );


/* PREGUNTA 3 */


document.write("<h2>Pregunta 3</h2>");
document.write("<p><strong>Función</strong>: contador. <strong>Parámetros</strong>: \
Un arreglo de números. <strong>Regresa</strong>: La cantidad de números negativos \
en el arreglo, la cantidad de 0's y la cantidad de valores mayores a 0 en el arreglo.");

document.write("<table>");
document.write("<tr>");
document.write("<thead>");
document.write("<th><strong>Negativos</strong></th>");
document.write("<th><strong>0's</strong></th>");
document.write("<th><strong>Positivos</strong></th>");
document.write("</thead>");
document.write("</tr>");
    
let arreglo = [1, -8, 0, -7, 12, 21, 0, -3, 2];
let count1 = 0, count2 = 0, count3 = 0;

for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] < 0) {
        count1++;
    } else if (arreglo[i] === 0) {
        count2++;
    } else {
        count3++;
    }
}

document.write("<tr>");
document.write("<td>" + count1 + "</td>");
document.write("<td>" + count2 + "</td>");
document.write("<td>" + count2 + "</td>");
document.write("</tr>");
document.write("</table>");


/* PREGUNTA 4 */

let mat = [[10, 20, 30], [40, 50, 60], [70, 80, 90]];

document.write("<h2>Pregunta 4</h2>");
document.write("<p><strong>Función</strong>: promedios. <strong>Parámetros</strong>: \
Un arreglo de arreglos de números. <strong>Regresa</strong>: Un arreglo con los \
los promedios de cada uno de los renglones de la matriz.");

document.write("<table>");
document.write("<thead>");
document.write("<tr>");
document.write("<th>Renglón</th>");
document.write("<th><strong>Promedio</strong></th>");
document.write("</tr>");
document.write("</thead>");

for (let i = 0; i < mat.length; i++) {
    let acum = 0; 
    for (let j = 0; j < mat[i].length; j++) {
        acum += mat[i][j];
    }
    acum = acum / mat[i].length;
    document.write("<tr>");
    document.write("<td>" + i + "</td>"); 
    document.write("<td>" + acum + "</td>");
    document.write("</tr>");
}
document.write("</table>");


/* PREGUNTA 5 */

document.write("<h2>Pregunta 5</h2>");
document.write("<p><strong>Función</strong>: inverso. <strong>Parámetros</strong>: \
Un número. <strong>Regresa</strong>: El número con sus digitos en orden inverso.");

function reverseNum (num) {
    return parseInt(num.toString().split('').reverse().join(''));
}
let z = 890176;

document.write("El número original es: <strong>" + z + "</strong>");
document.write("El número en reversa es: <strong>" + reverseNum(z) + "</strong>");


/* PREGUNTA 6 */

document.write("<h2>Pregunta 6</h2>");
document.write("<p><strong>Función</strong>: tamaño número entero.");

const numParaTam = prompt("Número para digitos:");

let intSize = {
    number: parseInt(numParaTam), 
    strMaker: function (num) {
        let str = "El número " + this.number + " tiene " + num + " dígitos.";
        return str;
    },
    numOfDigits: function () {
        let len = 1; 
        let num = Math.abs(this.number); 

        if (num >= 1) {
            while (num >= 10) {
                num /= 10;
                len++;
            }
        }
        return len;
    }
}

let resp = intSize.strMaker(intSize.numOfDigits());
document.write("<p>" + resp + "</p>");



