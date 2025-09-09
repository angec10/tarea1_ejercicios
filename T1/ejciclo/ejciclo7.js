/**
 * ejercicio 7:   N clientes del Banco XYZ
 * variables de entrada: tipotarjeta, credito, creditof;
 * proceso: en este proceso del ejercico 7 con ciclos nos pide que el usuario ingrese el tipo 
 * de tarjeta que posee y el credito que tiene, en este caso se agrega un contador para que con el uso de la funcion 
 * se repita el proceso segun la cantidad de paquetes que el usuario desee ingresar.
 * variables de salida: creditof
 */

function seriePaqueteria(n) {
    let contador = 1;
    while (contador <= n) {

     let tipotarjeta, credito, creditof;
     tipotarjeta = parseInt(prompt("ingrese el tipo de tarjeta que posee "));
     credito = parseFloat(prompt("ingrese el credito que posee "));

     if (tipotarjeta === 1) {
      creditof = credito + (credito * 0.25);
     } else if (tipotarjeta === 2) {
      creditof = credito + (credito * 0.35);
     } else if (tipotarjeta === 3) {
      creditof = credito + (credito * 0.40);
     } else {
      creditof = credito + (credito * 0.50);
     }
     console.log("su nuevo credito es de: " + creditof);

     contador = contador + 1;

    }
}
seriePaqueteria(3)