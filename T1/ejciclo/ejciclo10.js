/**
 * ejercico 10;  N números → días de la semana
 * variables de entrada: numerodia
 * proceso: el usuario ingresa una serie de números del 1 al 7 y el sistema le muestra a qué día de la semana corresponde
 * variables salida: mensaje que indica el dia correcto
 * Variables de salida: mensaje
 */

function serieDiasSemana(n) {
    let contador = 1;
    while (contador <= n) {
let numerodia;
parseInt(numerodia = prompt("Ingrese un número del 1 al 7 para saber a qué día de la semana corresponde: "));
 
if (numerodia == 1) {
    console.log("lunes");}
    
 if (numerodia == 2) {
    console.log("martes");}

         if (numerodia == 3) {
        console.log("miércoles");}

             if (numerodia == 4) {
            console.log("jueves");}

             if (numerodia == 5) {
                console.log("viernes");}

                 if (numerodia == 6) {
                    console.log("sábado");}

                     if (numerodia == 7) {
                        console.log("domingo");}

                        if (numerodia < 1 && numerodia > 7) {
                            console.log("El número ingresado no es válido, por favor ingrese un número del 1 al 7");
                        }
        contador = contador + 1;        
    }
}
serieDiasSemana(3);