/**
 * ejercico 7: Banco XYZ – aumento de crédito
 * variables de entrada: tipotarjeta, credito
 * proceso: para  que el algoritmo funcione debemos pedirle al usuario que ingrese el tipo de tarjeta que posee
 * y el credito y segun el tipo de tarjeta se le agregara un porcentaje al credito actual.
 * variables de salida: creditof
 */

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
