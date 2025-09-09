/**
 * ejercicio 4: Costo de viaje por autobuses
 * variable de entrada: tipodebus, tarifa, distancia, cpersonas, cantidadp, costototal
 * procesos:  en este ejercicio nos pide el costo total a pagar segun el tipo de bus, la distancia
 * y la cantidad de personas.En el caso de que hallan menos de 20 personas dentro del bus se les 
 * cobrara como si fueran 20  personas y si hay mas de 20 personas pagran por la cantidad real de personas.
 * variables de salida: costototal, cpersonas
 */

     let tipodebus, tarifa, distancia, cpersonas, personas, cantidadp, costototal;
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
