/**
 * jercicio 5: N pacientes en consultorio
 * variables de entrada: numerocita, contador, n, costo, acumulado
 * proceso:
 * variables de salida: acumulado, costo
 */

function serieCitas(n) {
    let contador = 1;
    while (contador <= n) { 

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
        contador = contador + 1;   
    }
}
serieCitas(3)