/**
 * ejercicio 2: Costo de pedidos de lápices en arreglos
 * variables de entrada: cantidadlapices, costolapiz
 * proceso: en este algoritmo utilizamos arreglos para almacenar las cantidades de lapices que se desean comprar
 * y luego utilizamos un ciclo for para recorrer cada elemento del arreglo y una estructura condicional
 * para determinar el costo total de los lapices segun la cantidad que se desea comprar.
 * variables de salida: costototal
 */

const cantidadlapices = [1200, 1000, 800];
for (let i = 0; i < cantidadlapices.length; i++) {
    let costolapiz = 0;
    if (cantidadlapices[i] >= 1000) {
        costolapiz = 0.85 * cantidadlapices[i];
    } else if (cantidadlapices[i] < 1000) {
        costolapiz = 0.90 * cantidadlapices[i];
    }
    console.log("El costo total de los lapices es: " + costolapiz);
}