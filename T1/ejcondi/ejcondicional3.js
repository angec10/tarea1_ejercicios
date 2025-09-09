/** 
 * ejercicio 3: Descuento en trajes
 * variables de entrada: precio, descuento, preciofinal
 * proceso: en este ejercico debemos solicitarle al usuario que ingrese la cantidad de dinero 
 * que le costo el traje y si este precio sobrepasa los 2500 se le ofrece un descuento del 0.15
 * y si el precio del traje es menor que 2500 se le ofrece un descuento del 0.08 para asi mostrar 
 * el precio final del traje con el descuento aplicado.
 * variables de salida: preciofinal
 */
 
   let precio, descuento, preciofinal;
   parseInt(precio = prompt("Ingrese el precio del traje: "));
   if (precio > 2500) { 
        descuento = precio * 0.15;
        preciofinal = precio - descuento;
        console.log ("El precio final del traje con descuento es: " + preciofinal);}
    else if ( precio <= 2500) {
        descuento = precio * 0.08;
        preciofinal = precio - descuento;
        console.log ("El precio final del traje con descuento es: " + preciofinal);}