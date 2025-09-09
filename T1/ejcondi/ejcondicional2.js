/** 
     * ejercicio 2: Costo de lapices
     * variables de entrada: cantidadlapices, costolapiz
     * proceso: para realizar este ejrcicio debemos pedirle al usuario que ingrese la cantidad
     * de lapices que desea comprar para asi con un condicional determinar el costo por unidad 
     * de los lapices. si la cantidad de lapices es mayor de 1000 el costo por unidad sera de 0.85 y si
     * la cantidad de lapices a comprar es menor de 1000 el costo por unidad sera de 0.90.
     * variables de salida: costototal
     */
    let cantidadlapices, costolapiz, costototal;
    parseInt(cantidadlapices = prompt("Ingrese la cantidad de lapices que desea comprar: "));
    if (cantidadlapices >= 1000) {
        costolapiz = 0.85 * cantidadlapices;
    }
    else if (cantidadlapices < 1000) {
        costolapiz = 0.90 * cantidadlapices;
    }