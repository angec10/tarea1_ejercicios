/**
 * ejercicio 7: Clientes del banco en arreglo
 * variables de entrada: tipotarjeta, credito, creditof
 * proceso:en este ejercicio se creo un arreglo que contiene objetos con el 
 * tipo de tarjeta y el credito disponible, ademas de que se hace uso de un ciclo for
 * y una estructura condicional para determinar el nuevo credito segun el tipo de tarjeta.
 * variables de salida: creditof
 */

const creditoN = [
    { tipotarjeta: 2, credito: 1000 },
    { tipotarjeta: 3, credito: 1500 }
]
for (let c = 0; c < creditoN.length; c++) {
    let tipotarjeta = creditoN[c].tipotarjeta;
    let credito = creditoN[c].credito;
    let creditof = 0; 

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
}