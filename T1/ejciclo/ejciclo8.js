/**
 * ejercico 8; N paquetes en paquetería
 * variables de entrada: n, contador, peso, costopaquete, costototal
 * proceso: el usuario ingresa el peso de cada paquete y el sistema le indica el costo por paquete
 * y el costo total de todos los paquetes. ademas que el proceso se repetira las veces que el usuario desee.
 * variables de salida: costototal
 */

function seriePaquetes(n) {
    let contador = 1;

    while (contador <= n) {
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

     contador = contador + 1;
    }
}  
seriePaquetes(3)