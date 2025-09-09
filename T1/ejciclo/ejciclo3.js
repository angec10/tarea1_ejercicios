/**
 * ejercicio 3: N compras de trajes
 * varibles de entrada: n, contador, precio, descuento, preciofinal
 * proceso: se le pide al usuario que ingrese el precio de cada traje segun la cantidad de trajes que llame la funcion.
 * variables de salida: precifinal
 */


function serieTrajes(n) {
    let contador = 1;
    let descuento = 0;
    while (contador <= n) {
        let precio = parseFloat(prompt("Ingrese el precio del traje: "));
        if (precio >= 2500 ) {
            descuento = precio * 0.15;}
            else if (precio < 2500) {
                descuento = precio * 0.08;}
        let preciofinal = precio - descuento;
        console.log("El precio final del traje con descuento es: " + preciofinal);
        contador = contador + 1;
    }
}
serieTrajes(3)