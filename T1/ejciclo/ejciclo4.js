/**
 * ejercicio 4: Costo de viaje por autobuses
 * variables de entrada: tipobus, tarifa, distancia, cpersonas, personas, cantidadp, costototal;
 * proceso: en este ejercico nos pide que saquemos una precio total y un precio por persona 
 * segun el tipo de bus, distancia y cantidad de personas. al ser un ejercicio con ciclos utilizamos la
 * funcion para que esta nos proporcione la cantidad de veces que el algoritmo se va arepetir.
 * variables de salida: cpersonas, costototal
 */

function serieViaje(n){
        let tipodebus, tarifa, distancia, cpersonas, personas, cantidadp, costototal;
        let contador = 1
        while (contador <= n ){
     switch ( tipodebus = prompt("Ingrese el tipo de bus (A, B, C): ") ) {
         case "A":
            tarifa = 2.00;
            break
            case "B":
                tarifa = 2.50;
                break;
                case "C":
                    tarifa = 3.00;
                    break;
         default:
            console.log("Tipo de bus no válido");
            break;  
         }  
         parseInt(distancia = prompt("Ingrese la distancia del viaje en km: "));
         parseInt(personas = prompt("Ingrese la cantidad de personas que viajan: "));
         
         if (personas < 20) {
            cantidadp = 20; }
            else {
            cantidadp = personas;
         }
         costototal = tarifa * distancia * cantidadp;
         cpersonas= costototal / personas;
         
         console.log("El costo por persona es: " + cpersonas);

         console.log("El costo total del viaje es: " + costototal);
            contador = contador + 1;
        }
}
   
serieViaje(3);