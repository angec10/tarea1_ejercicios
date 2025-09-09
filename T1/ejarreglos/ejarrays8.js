/**
 * ejerccio 8: Paquetes de paquetería en arreglo
 * variables de entrada : zona, peso, costoKg
 * proceso: se utilizo un arreglo con objetos que contienen la zona y el peso del paquete,
 * dentro del ciclo for se encuentran las variables y el condicional if para determinar
 * el costo por kg segun la zona y si el peso es mayor a 5kg no se acepta el paquete.
 * variables de salida: costoEnvio
 */

const paquetes = [
    {zona: 2, peso: 4},
    {zona: 3, peso: 6}
]
for (c = 0 ; c < paquetes.length; c++) {

    let zona = paquetes[c].zona;
    let peso = paquetes[c].peso;
    let costoKg = 0;

   if (peso > 5) {
   console.log(" No se aceptan paquetes mayores a 5 kg.");
   continue;
   }

     if (zona === 1) { // América
        costoKg = 30;
     } else if (zona === 2) { // Europa
        costoKg = 60;
     } else if (zona === 3) { // Asia
        costoKg = 80;
     } else if (zona === 4) { // África
        costoKg = 100;
     } else {
        console.log("Zona inválida.");
        continue;
     }

     let costoEnvio = peso * costoKg;
     console.log("Costo envío: $" + costoEnvio);
}

