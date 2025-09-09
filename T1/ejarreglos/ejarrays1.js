/**
 * ejercicio 1: Clasificación de números en un arreglo
 * variables de entrada: numero
 * proceso: en este algoritmo utilizamos el concepto de arreglos para almacenar una serie de números
 * y luego utilizamos un ciclo for para recorrer cada elemento del arreglo y una estructura condicional
 * para determinar si cada número es positivo, negativo o neutro.
 * variables de sañida: mensaje
 **/

const numero = [4, -2, 0, 7, -9];
for (let c = 0; c < numero.length; c++) {
    if (numero[c] > 0) {
        console.log("El número es positivo");
    } else if (numero[c] < 0) {
        console.log("El número es negativo");
    } 
    else if (numero[c] === 0) {
        console.log("El número es neutro");
    }
}