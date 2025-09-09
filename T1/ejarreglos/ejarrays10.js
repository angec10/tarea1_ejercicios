/**
 * variables de entrada: numeroDia
 * proceso: se utiliza un ciclo for para recorrer un arreglo que contiene los números del 1 al 7,
 * y una estructura condicional para mostrar el día de la semana correspondiente a cada número.
 * variables de salida: mensaje
 */

const nuemeroDia = [1, 3, 7, 9];
for (let c = 0; c < nuemeroDia.length; c++) {
    let numeroDia = nuemeroDia[c];
    if (numeroDia == 1) {
        console.log("lunes");
    } else if (numeroDia == 2) {
        console.log("martes");
    } else if (numeroDia == 3) {
        console.log("miércoles");
    } else if (numeroDia == 4) {
        console.log("jueves");
    } else if (numeroDia == 5) {
        console.log("viernes");
    } else if (numeroDia == 6) {
        console.log("sábado");
    } else if (numeroDia == 7) {
        console.log("domingo");
    } else {
        console.log("El número ingresado no es válido, por favor ingrese un número del 1 al 7");
    }
}