/**
 * ejercico 6: Artículos de la fábrica en arreglo
 * variables de entrada: clave, materiaPrima
 * proceso:en este ejercicio se ejecutan un arreglo con aobjetos 
 * que contienen la clave y el costo. dentro del ciclo for encontramos las variables y
 * el condicional if para determinar los costos de mano de obra y gastos de fabricacion
 * segun la clave del articulo.
 * variables de salida: , manoObra, gastosFab, costoProduccion, precioVenta
 */

const total = [
    {clave : 3, materiaPrima : 1000},
    {clave : 1, materiaPrima : 2000}
];

for (let c = 0; c < total.length; c++) {
   let clave = total[c].clave;
   let materiaPrima = total[c].materiaPrima;
   let manoObra = 0;
   let gastosFab = 0;
   if (clave === 1) {
      manoObra = materiaPrima * 0.80;
      gastosFab = materiaPrima * 0.28;
   } else if (clave === 2) {
      manoObra = materiaPrima * 0.85;
      gastosFab = materiaPrima * 0.30;
   } else if (clave === 3) {
      manoObra = materiaPrima * 0.75;
      gastosFab = materiaPrima * 0.35;
   } else if (clave === 4) {
      manoObra = materiaPrima * 0.70;
      gastosFab = materiaPrima * 0.25;
   } else if (clave === 5) {
      manoObra = materiaPrima * 0.65;
      gastosFab = materiaPrima * 0.20;
   } else if (clave === 6) {
      manoObra = materiaPrima * 0.60;
      gastosFab = materiaPrima * 0.40;
   } else {
      console.log("Clave inválida. Debe ser un número entre 1 y 6.");
      continue;
   }
   let costoProduccion = materiaPrima + manoObra + gastosFab;
   let precioVenta = costoProduccion * 1.45;
   
   console.log("Materia Prima:" + materiaPrima);
   console.log("Mano de Obra: " + manoObra);
   console.log("Gastos de Fabricación: " + gastosFab);
   console.log("Costo de Producción: " + costoProduccion);
   console.log("Precio de Venta: " + precioVenta);
}
