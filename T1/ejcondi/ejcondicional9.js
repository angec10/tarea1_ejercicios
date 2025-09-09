/**
 * ejercicio 7:  Clasificación de edades
 * variables de entrada: edad
 * proceso: se le pide al usuario que ingrese su edad y segun su edad se lo clasifica de una u otra manera.
 * varibles de salida: mensaje
 */
 
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
