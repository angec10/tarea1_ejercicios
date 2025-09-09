/**
 * ejercicio 5: Citas médicas en arreglo
 * variables de entrada: numerocita, costo, acumulado
 * proceso: se utilizo un arreglo y un ciclo for para recorrer cada numero de cita,
 * aplicando una estructura condicional para determinar el costo segun el numero de cita.
 * variables de salida: acumulado
 */

const numerocita =  [2, 5, 9];
for (let c = 0; c < numerocita.length; c++) {
let  acumulado = 0;

  if (numerocita[c] <= 3) {
    acumulado = 200 * numerocita[c];
  }
  if (numerocita[c] > 3 && numerocita[c] <= 5); {
    acumulado = 600 + 300 * (numerocita[c] - 3);}

  if (numerocita[c] > 5 && numerocita[c] <= 8); {
    acumulado = 600 + 300 + 300 + 100 * (numerocita[c] - 5);}

  if (numerocita[c] > 5 && numerocita[c] <= 8); {
    acumulado = 600 + 300 + 300 + 100 * ( numerocita[c] - 5);}

  if (numerocita[c] >= 9); {
    acumulado = 600 + 300 + 300 + 100 + 50 * ( numerocita[c] - 8);}

  console.log("El costo total de las citas es: " + acumulado);
}