/**
 * variables de entrada:Datos de viajes en arreglo
 * proceso: se utilizo un arreglo y un ciclo for para recorrer cada viaje, 
 * aplicando una estructura switch para determinar la tarifa segun el tipo de bus,
 * y una estructura condicional para calcular la cantidad de personas a cobrar.
 * variables de salida: cpersonas, costototal
 */

const viajes = [
    { tipo: "A", distancia: 100, personas: 15 },
    { tipo: "C", distancia: 50, personas: 30 }
];

for (let c = 0; c < viajes.length; c++) {
    let tarifa = 0;
    switch (viajes[c].tipo) {
        case "A":
            tarifa = 2.00;
            break;
        case "B":
            tarifa = 2.50;
            break;
        case "C":
            tarifa = 3.00;
            break;
        default:
            console.log("Tipo de bus no válido");
            continue;
    }
    let distancia = viajes[c].distancia;
    let personas = viajes[c].personas;
    let cantidadp = personas < 20 ? 20 : personas;
    let costototal = tarifa * distancia * cantidadp;
    let cpersonas = costototal / personas;
    
    console.log("Costo por persona: " + cpersonas.toFixed(2));
    console.log("Costo total del viaje: " + costototal.toFixed(2));
}