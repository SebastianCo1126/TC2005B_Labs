SELECT DISTINCT Descripcion FROM Materiales M, Entregan E
WHERE M.Clave = E.Clave 
AND E.Fecha BETWEEN '2000-01-01' AND '2000-12-31';


SELECT P.Numero, P.Denominacion, E.Fecha, E.Cantidad FROM Proyectos P, Entregan E
WHERE P.Numero = E.Numero
ORDER BY P.Numero ASC, E.Fecha DESC;

SELECT * FROM materiales where Descripcion LIKE 'Si';

SELECT Numero FROM Entregan WHERE Numero LIKE '___6';

SELECT RFC,Cantidad, Fecha,Numero
FROM `Entregan`
WHERE `Numero` Between 5000 and 5010 AND
Exists ( SELECT `RFC`
FROM `Proveedores`
WHERE RazonSocial LIKE 'La%' and `Entregan`.`RFC` = `Proveedores`.`RFC` );

SELECT RFC,Cantidad, Fecha,Numero
FROM `Entregan`
WHERE `Numero` Between 5000 and 5010 AND
RFC NOT IN ( SELECT `RFC`
FROM `Proveedores`
WHERE RazonSocial NOT LIKE 'La%' and `Entregan`.`RFC` = `Proveedores`.`RFC` );

SELECT Numero FROM Proyectos
LIMIT 1;

ALTER TABLE materiales ADD PorcentajeImpuesto NUMERIC(6,2); 

UPDATE materiales 
SET PorcentajeImpuesto = 2 * clave / 1000
WHERE Clave > 1;


SELECT SUM(M.Precio*E.Cantidad + ((M.Precio*E.Cantidad)*M.PorcentajeImpuesto)) AS Importe 
FROM Materiales M, Entregan E
WHERE M.Clave = E.Clave;

CREATE VIEW top2_proyectos AS 
SELECT * FROM Proyectos 
LIMIT 2;

SELECT * FROM top2_proyectos;

CREATE VIEW importe AS 
SELECT (M.Precio*E.Cantidad + ((M.Precio*E.Cantidad)*M.PorcentajeImpuesto)) AS Importes 
FROM Materiales M, Entregan E
WHERE M.Clave = E.Clave;

SELECT * FROM importe;


CREATE VIEW rango AS 
SELECT Clave,RFC,Numero,Fecha,Cantidad 
FROM Entregan 
WHERE Numero Between 5000 and 5010; 

SELECT * FROM rango;

CREATE VIEW entreganMateriales AS 
SELECT * FROM Materiales
WHERE Clave IN (SELECT Clave FROM Entregan);

SELECT * FROM entreganMateriales;

CREATE VIEW matMil AS 
SELECT * FROM Materiales 
WHERE Clave = 1000;

SELECT * FROM matMil;

 -- Los materiales (clave y descripción) entregados al proyecto "México sin ti no estamos completos". 
 SELECT M.Clave, M.Descripcion FROM Materiales M, Entregan E, Proyectos P
 WHERE M.Clave = E.Clave AND E.Numero = P.Numero 
 AND P.Denominacion LIKE 'México sin ti no estamos completos';
 
 -- Los materiales (clave y descripción) que han sido proporcionados por el proveedor "Acme tools". 
 SELECT M.Clave, M.Descripcion FROM Materiales AS M 
 JOIN Entregan AS E ON E.Clave = M.Clave 
 JOIN Proveedores AS P ON P.RFC = E.RFC
 WHERE P.razonsocial = 'Acme tools';
 
 -- El RFC de los proveedores que durante el 2000 entregaron en promedio cuando menos 300 materiales. 
 SELECT E.RFC FROM Entregan E 
 WHERE E.Fecha BETWEEN '2000-01-01' AND '2000-12-31'
 GROUP BY E.RFC
 HAVING AVG(E.Cantidad) > 300;


--  El Total entregado por cada material en el año 2000. 
SELECT E.Clave, Count(*) AS 'Cuenta', SUM(Cantidad) AS 'Total Entregado' FROM Entregan E 
WHERE E.Fecha IN (SELECT Fecha FROM Entregan
				  WHERE E.Fecha BETWEEN '2000-01-01' AND '2000-12-31')
GROUP BY E.Clave
ORDER BY SUM(Cantidad) DESC;

-- La Clave del material más vendido durante el 2001. (se recomienda usar una vista intermedia para su solución) 
SELECT E.Clave AS 'Clave de material más vendido', Count(*) AS 'Cuenta', SUM(Cantidad) FROM Entregan E
WHERE YEAR (E.Fecha) = 2001
GROUP BY E.Clave
ORDER BY SUM(Cantidad) DESC
LIMIT 1;

-- Productos que contienen el patrón 'ub' en su nombre. 
SELECT M.Clave, M.Descripcion FROM Materiales M
WHERE M.Descripcion LIKE '%ub%';

-- Denominación y suma del total a pagar para todos los proyectos. 
SELECT P.Denominacion, SUM(M.Precio*E.Cantidad) AS 'Total a pagar' FROM Proyectos P
JOIN Entregan AS E ON E.Numero = P.Numero 
JOIN Materiales AS M ON M.Clave = E.Clave
GROUP BY P.Denominacion;

-- Denominación, RFC y RazonSocial de los proveedores que se suministran materiales
-- al proyecto Televisa en acción que no se encuentran apoyando al proyecto Educando 
-- en Coahuila (Solo usando vistas). 

CREATE VIEW tempView AS 
SELECT P.Denominacion, Pr.RFC, Pr.Razonsocial FROM Proyectos P
JOIN Entregan AS E ON P.Numero = E.Numero 
JOIN proveedores AS Pr ON Pr.RFC = E.RFC
WHERE P.Denominacion = 'Televisa en acción';

CREATE VIEW tempView2 AS 
SELECT P.RFC FROM Proveedores P, Proyectos Pr, Entregan E
WHERE Pr.Numero = E.Numero AND E.RFC = P.RFC
AND Pr.Denominacion = 'Educando en Coahuila';

SELECT * FROM tempView T
WHERE T.RFC NOT IN (SELECT * FROM tempView2);


-- Denominación, RFC y RazonSocial de los proveedores que se 
-- suministran materiales al proyecto Televisa en acción que 
-- no se encuentran apoyando al proyecto Educando en Coahuila 
-- (Sin usar vistas, utiliza not in, in o exists). 

-- Costo de los materiales y los Materiales que son entregados 
-- al proyecto Televisa en acción cuyos proveedores también 
-- suministran materiales al proyecto Educando en Coahuila. 
SELECT M.Descripcion, (M.Precio*E.Cantidad) FROM Materiales M
JOIN Entregan AS E ON E.Clave = M.Clave 
JOIN Proveedores AS P ON P.RFC = E.RFC
JOIN Proyectos AS Pr ON Pr.Numero = E.Numero
WHERE Pr.Denominacion = 'Televisa en acción'
AND P.RFC IN (SELECT P.RFC FROM Proveedores P
				  JOIN Entregan AS E ON E.RFC = P.RFC
				  JOIN Materiales AS M ON M.Clave = E.Clave
				  JOIN Proyectos AS Pr ON Pr.Numero = E.Numero
				  WHERE Pr.Denominacion = 'Educando en Coahuila');
                  

-- Nombre del material, cantidad de veces entregados y total del costo 
-- de dichas entregas por material de todos los proyectos. 
SELECT M.Descripcion, Count(E.Clave), SUM(M.Precio*E.Cantidad) FROM Materiales M
JOIN Entregan AS E ON E.Clave = M.Clave 
JOIN Proveedores AS P ON P.RFC = E.RFC
JOIN Proyectos AS Pr ON Pr.Numero = E.Numero
GROUP BY E.Clave 
ORDER BY SUM(M.Precio*E.Cantidad) DESC;


