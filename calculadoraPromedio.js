/*
Notas del ejer 2: Utiliza JavaScript para realizar las operaciones necesarias para calcular 
el promedio de notas, verificar el rango válido de las notas y mostrar el mensaje 
correspondiente según el resultado, vamos a tomar en cuenta las instrucciones 
del ejercicio 1, del cual se realizó diagrama de flujo.
Desarrolla un programa que calcule el promedio de tres notas ingresadas 
por el usuario, solicitando también el nombre del alumno. Además, el 
programa debe verificar si las notas ingresadas se encuentran dentro del 
rango válido (por ejemplo, de 0 a 10). Una vez calculado el promedio de las 
tres notas, el programa debe evaluar si dicho promedio es mayor o igual a 7.
Si el promedio es mayor o igual a 7, el programa imprimirá: '[Nombre del 
alumno], ¡felicidades! Has aprobado con un promedio de [indicar 
promedio].' En caso de que el promedio sea menor a 7, el programa 
imprimirá: '[Nombre del alumno], gracias por tu esfuerzo. Nos vemos 
pronto en clase. El promedio obtenido es [indicar promedio]. 

Notas del ejer 1: Desarrolla un programa que calcule el promedio de tres notas ingresadas 
por el usuario, solicitando también el nombre del alumno y la materia. 
Además, el programa debe verificar si las notas ingresadas se encuentran 
dentro del rango válido (por ejemplo, de 0 a 10). Una vez calculado el 
promedio de las tres notas, el programa debe evaluar si dicho promedio es 
mayor o igual a 7.
Si el promedio es mayor o igual a 7, el programa imprimirá: 'Nombre del 
alumno, ¡felicidades! Has aprobado con un promedio de [indicar 
promedio].' En caso de que el promedio sea menor a 7, el programa 
imprimirá: 'Nombre del alumno, gracias por tu esfuerzo. Nos vemos pronto 
en clase. El promedio obtenido es [indicar promedio].'
*/


let nombreAlumno= prompt('Ingrese el nombre del alumno')

let Materia= prompt('Ingrese el nombre de la materia')

let nota1 = parseInt(prompt("Ingrese la primer nota de 0 a 10:"));
let nota2 = parseInt(prompt("Ingrese la segunda nota de 0 a 10:"));
let nota3 = parseInt(prompt("Ingrese la tercera nota de 0 a 10:"));
/*
if (nota1 >= 0 && nota1 <= 10 && nota2 >= 0 && nota2 <= 10 && nota3 >= 0 && nota3 <= 10) {
  var promedio = (nota1 + nota2 + nota3) / 3;
*/

if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
    console.log ("Por favor ingrese una nota valida en el rango de 0 a 10")
} else { 
    console.log (nota1)
    console.log (nota2)
    console.log (nota3)
    let promedio=(nota1+nota2+nota3) /3
    console.log(promedio)

    if (promedio >= 7) {
        alert(`Felicidades, ${nombreAlumno},la materia de ${Materia}, la aprobaste con un promedio de ${promedio}.`);
      } else {
        alert(nombreAlumno + `, Gracias por tu esfuerzo. Tu promedio en la materia de ${Materia} es ` + promedio.toFixed(2) + " Puntaje insuficiente para aprobar...  Nos vemos pronto en clase");
      }
}