/**                                           EJERCICIOS CON CICLOS
 * ejercicio 1: N números positivos o negativos
 * variables de entrada: n, numero, contador
 * proceso: el usuario ingresa una serie de numeros para que el sistema le indique si es positivo o negativo
 * el function recibe como parametro la cantidad de numeros que el usuario desea ingresar.
 * variables de salida: mensaje
 */
function seriePositivoNegativo2(n) {
  let contador = 1;
  while (contador <= n) {
    let numero = parseInt(prompt("Ingrese un número positivo o negativo: "));
    if (numero > 0) {
      console.log("El número es positivo");
    } else if (numero < 0) {
      console.log("El número es negativo");
    } else {
      console.log("El número es cero");
    }
    contador = contador + 1;
  }
}
seriePositivoNegativo2(5);