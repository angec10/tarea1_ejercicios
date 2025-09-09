/**
 * ejercico 9: N personas con clasificación de edades
 * variables de entrada: n, contador, edad
 * proceso: el usuario ingresa su edad y el sistema le indica a que clasificacion de edad pertenece en este caso
 * el usuario podra indicar la cantidad de veces que quiera ingresar su edad o la de otros.
 * variables de salida: mensaje
 */

function serieEdades(n) {
    let contador = 1;
    while (contador <= n) {
     let edad;
     edad = parseInt(prompt("Ingrese su edad: "));

     if (edad >= 1 && edad <= 3) {
        console.log("infante");}

        if (edad >= 4 && edad <= 13) {
            console.log("niño");}

            if ( edad >= 14 && edad <= 17) {
                console.log("adolescente");}

                if ( edad >= 18 && edad <= 35) {
                    console.log("joven");}

                    if ( edad >= 36 && edad <= 64) {
                        console.log("adulto");}

                        if ( edad >= 65) {
                            console.log("adulto mayor");}
        contador = contador + 1;
    }
    
}    
serieEdades(3)