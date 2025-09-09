/**
 * ejercicio 5: Consultorio médico – costo de citas
 * variables de entrada: numerocita, costo, acumulado
 * proceso: el algoritmo debe mostrar el costo total de la cita y el acumulado de las citas.
 * variables de salida: costo, acumulado
 */

    let numerocita=0, costo=0, acumulado=0;
    parseInt(numerocita = prompt("Ingrese el número de citas que desea: "));
    if (numerocita <= 3); {
        costo = 200 * numerocita; }
         if (numerocita > 3 && numerocita <= 5); {
            costo = 600 + 300 * ( numerocita - 3);}
            if (numerocita > 5 && numerocita <= 8); {
                costo = 600 + 300 + 300 + 100 * ( numerocita - 5);}
                if (numerocita > 9); {
                    costo = 600 + 300 + 300 + 100 + 50 * ( numerocita - 8);}
                    acumulado = acumulado + costo;

                    console.log("El costo total de las citas es: " + acumulado);
                    console.log("El costo de la cita es: " + costo);
