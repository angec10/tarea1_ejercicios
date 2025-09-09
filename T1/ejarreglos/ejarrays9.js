/**
 * ejercicio 9: Clasificación de edades en arreglo
 * variables de entrada: edad
 * proceso: en este ejercicio se utiliza un arreglo, for y un una estructura condicional 
 * para mostrar la casificacion de edades
 * variables de salida: mensaje
 */

const edad = [3, 15, 70];
for (let c = 0; c < edad.length; c++) {

     if (edad[c] >= 1 && edad[c] <= 3) {
        console.log("infante");}

        if (edad[c] >= 4 && edad[c] <= 13) {
            console.log("niño");}

            if ( edad[c] >= 14 && edad[c] <= 17) {
                console.log("adolescente");}

                if ( edad[c] >= 18 && edad[c] <= 35) {
                    console.log("joven");}

                    if ( edad[c] >= 36 && edad[c] <= 64) {
                        console.log("adulto");}

                        if ( edad[c] >= 65) {
                            console.log("adulto mayor");}    
}