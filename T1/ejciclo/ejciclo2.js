/**
 * ejercicio 2: N compras de lápices
 * variables de entrada: contador, n, cantidadlapices, costolapiz
 * proceso: la funcion da la cantidad de veces  que se va arepetir el proceso de compra de lapicesd
 * y el sistema le va a indicar el precio con descuento de dicha cantidad.
 * variables de salida:costoLapiz
 */

function serieLapices(n) {
    let contador = 1;
   
    while (contador <= n) {
        let cantidadlapices = parseInt(prompt("Ingrese la cantidad de lapices que desea comprar: "));
        let costolapiz = 0;
        if (cantidadlapices >= 1000) {
            costolapiz = 0.85 * cantidadlapices;
        } else if (cantidadlapices < 1000) {
            costolapiz = 0.90 * cantidadlapices;
        }
        
        console.log("El costo total de los lapices es: " + costolapiz);
        contador = contador + 1;
    }

}
serieLapices(2);