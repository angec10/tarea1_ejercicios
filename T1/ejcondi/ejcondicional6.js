/**
 *  ejercicio6: Fábrica El Cometa – precio de venta
 * variables de entrada: precio, precioventa
 * proceso: el usuario ingresa la clave del producto (1–6) y el valor de la materia prima,
 * el sistema calcula el costo de producción (materia prima + mano de obra + gastos de fabricación)
 * y el precio de venta (costo de producción + 45%).
 * variables de salida:
 */
   
    function calcularCostoVenta() {
    let clave = parseInt(prompt("Ingrese la clave (1–6):"));
    let materiaPrima = parseFloat(prompt("Ingrese el valor de la materia prima:"));

    let manoObra = 0;
    let gastosFab = 0;

    if (clave === 1) {
        manoObra = materiaPrima * 0.80;
        gastosFab = materiaPrima * 0.28;
    } else if (clave === 2) {
        manoObra = materiaPrima * 0.85;
        gastosFab = materiaPrima * 0.30;
    } else if (clave === 3) {
        manoObra = materiaPrima * 0.75;
        gastosFab = materiaPrima * 0.35;
    } else if (clave === 4) {
        manoObra = materiaPrima * 0.70;
        gastosFab = materiaPrima * 0.25;
    } else if (clave === 5) {
        manoObra = materiaPrima * 0.65;
        gastosFab = materiaPrima * 0.20;
    } else if (clave === 6) {
        manoObra = materiaPrima * 0.60;
        gastosFab = materiaPrima * 0.40;
    } else {
        alert(" Clave inválida. Debe ser un número entre 1 y 6.");
        return;
    }

    let costoProduccion = materiaPrima + manoObra + gastosFab;
    let precioVenta = costoProduccion * 1.45;

    let resultado = 
        "Materia Prima: $" + materiaPrima.toFixed(2) + "\n" +
        "Mano de Obra: $" + manoObra.toFixed(2) + "\n" +
        "Gastos de Fabricación: $" + gastosFab.toFixed(2) + "\n" +
        "Costo de Producción: $" + costoProduccion.toFixed(2) + "\n" +
        "Precio de Venta: $" + precioVenta.toFixed(2);

    alert(resultado);
}

// Ejecutar función
calcularCostoVenta();
