/**
 * ejercicio 3: Precios de trajes en arreglo
 * variables de entrada: precios, descuento
 * proceso: se elabora un arreglo con los precios y se les aplica el mismo descuento 
 * que en el ejercicio anterior, utilizando un ciclo for para recorrer cada elemento del arreglo
 * y una estructura condicional para determinar el descuento segun el precio del traje.
 * variables de salida: peciofinal
 */

const precios = [3000, 2000, 1550];

for (let c = 0; c < precios.length; c++) {
    let descuento = 0;
    let preciofinal = 0;
   if (precios[c] > 2500) { 
        descuento = precios[c] * 0.15;
        preciofinal = precios[c] - descuento;
        console.log ("El precio final del traje con descuento es: " + preciofinal.toFixed(1));}
    else if ( precios[c] <= 2500) {
        descuento = precios[c] * 0.08;
        preciofinal = precios[c] - descuento;
        console.log ("El precio final del traje con descuento es: " + preciofinal.toFixed(1));}
}