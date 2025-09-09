/**
 * ejercicio 8: Paquetería internacional – costo de envío
 * variables de entrada: costo, peso, zona
 * proceso: el algoritmo debe mostrar el costo de envío de un paquete según su peso y la zona a la que se envía.
 * El usuario ingresa el peso y la zona de destino.
 * El programa verifica que el peso no supere los 5 kg.
 * Según la zona, se asigna un costo por kg (ejemplo: Europa = $60/kg).
 * variables de salida: costo
 */

   function calcularEnvio() {
    let peso = parseFloat(prompt("Ingrese el peso del paquete (kg, máximo 5):"));
    let zona = prompt("Ingrese la zona (1=América, 2=Europa, 3=Asia, 4=África):");
    let costoKg = 0;

    if (peso > 5) {
        console.log(" No se aceptan paquetes mayores a 5 kg.");
        return;}

    if (zona === "1") { // América
        costoKg = 30;
    } else if (zona === "2") { // Europa
        costoKg = 60;
    } else if (zona === "3") { // Asia
        costoKg = 80;
    } else if (zona === "4") { // África
        costoKg = 100;
    } else {
        console.log("Zona inválida.");
        return;
    }

    let costoEnvio = peso * costoKg;
    alert("Costo envío: $" + costoEnvio);
}


calcularEnvio();
