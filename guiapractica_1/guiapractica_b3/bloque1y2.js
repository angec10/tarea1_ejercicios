/**                                      BLOQUE 1 Y 2 - CADENAS
 * 
 * 1. contar caracteres de una palabra
 * entrada: "manzana
 * proceso: el algoritmo recibe un dato tipo cadena, cuenta la cantidad de caracteres que tiene y
 *  lo almacena en una variable
 * salida: "la palabra tiene 7 letras"
 */

function contarCaracteres(palabras) {                          
//let palabras = prompt("ingrese una palabra"); 
console.log("la palabra tiene " + palabras.length + " letras");}                                                   

/**
 * 2. contar apariciones de una letra especifica 
 * Entrada: "Me encanta el café"
 * Proceso: el algoritmo recibe un dato tipo cadena y una letra, cuenta la cantidad de veces que aparece la letra en 
 * la cadena y lo almacena en una variable
 * salida: "La letra 'e' aparece 4 veces."
 */

function contarApariciones(cadena, letra) {
//let cadena = prompt("ingrese una frase");             
//let letra = prompt("ingrese una letra a buscar");   
let contador = 0;
for (let i = 0; i < cadena.length; i++) {    
        
    if (cadena[i] === letra) {                       
        contador++;                                  
    }
}
console.log("La letra '" + letra + "' aparece " + contador + " veces.");}
//contarApariciones()

/**
 * 3. Invertir un texto
 * Entrada: "Quito"
 * proceso: el algoritmo recibe un dato tipo cadena, invierte el orden de los caracteres y lo almacena en una variable
 * Salida: "otiuq"
 */

function invertirTexto(palabras) {
//let texto = prompt("ingrese una palabra");
let textoInvertido = "";    
for (let i = palabras.length - 1; i >= 0; i--) {
    textoInvertido += palabras[i];
}  console.log("La palabra invertida es: " + textoInvertido);}
//invertirTexto();

/**
 * 4. comparar longitudes de cadenas
 * Entrada: "García", "Pérez"
 * proceso: el algoritmo recibe dos datos tipo cadena, compara sus longitudes y almacena el resultado en una variable
 * Salida: "El apellido 'García' tiene más letras."
 */

function compararLongitudes(cadena1, cadena2) {
//let cadena1 = prompt("ingrese la primera palabra");
//let cadena2 = prompt("ingrese la segunda palabra");
if (cadena1.length > cadena2.length) {
    console.log("El apellido '" + cadena1 + "' tiene más letras.");
} else if (cadena2.length > cadena1.length) {
    console.log("El apellido '" + cadena2 + "' tiene más letras.");   
}}
//compararLongitudes();

/**
 * 5. Iniciales de un nombre completo
 * Entrada: "Ana María Torres"
 * proceso: el algoritmo recibe un dato tipo cadena, extrae la primera letra de cada palabra y las almacena en una variable
 * Salida: "A.M.T."
 */

function obtenerIniciales(nombres) {
//let nombreCompleto = prompt("Ingrese su nombre completo:");
let iniciales = "";
for (let i = 0; i < nombres.length; i++) {

    if (i === 0 || nombres[i - 1] === " ") {
        iniciales += nombres[i] + " "; 
    }
}
console.log("Sus iniciales son: " + iniciales);}
//obtenerIniciales();

/**
 * 6. reemplazo de carecteres
 * Entrada: "Programador"
 * proceso: el algoritmo recibe un dato sea por arreglo o por ingreso de teclado
 * este reemplazara las letras o dentro de dicha palabra. esto se aplicara usando un ciclo for
 * y una estructura condicional if-else, en donde la palabra modificada se almacenara en una variable 
 * para luego mostrarla en pantalla.
 * Salida: "Pr#gramad#r"
 */

function reemplazarCaracteres(palabras) {
//let palabra = prompt("ingrese una palabra");
let palabraModificada = "";
for (let i = 0; i < palabras.length; i++){
    if (palabras[i] === "o" ) {
        palabraModificada += "#"; 
    } else {
        palabraModificada += palabras[i]; 
    }
}
console.log("La palabra modificada es: " + palabraModificada);}
//reemplazarCaracteres();

/**
 * 7. Palabra palíndroma
 * Entrada: "radar"
 * proceso: en este algoritmo debemos encontrar si una palabra es palindroma o no.
 * para lograr esto vamos a utilizar un ciclo for que sera el que nos ayudara a recorrer la palabra
 * y una estructura condicional if-else que nos ayudara a comparar los caracteres de la palabra.
 * si la palabra es palindroma se almacenara en una variable y se mostrara en pantalla.
 * salida: "La palabra 'radar' es un palíndromo."
 */

function palabraPolindroma(palabras){
//let palabra1 = prompt("ingrese una palabra");
let palabra2 = ""
for (let i = palabras.length - 1; i >= 0; i--) {
    palabra2= palabra2 + palabras[i];}
   if (palabras === palabra2){
        console.log("La palabra " + palabras + "' es un palíndroma.");}
    else {
        console.log("La palabra " + palabras + "' no es un palíndroma.");}}
//palabraPolindroma();

/**
 * 8. Frase con mayor cantidad de caracteres
 * Entrada: "Me gusta el fútbol", "Prefiero el baloncesto"
 * proceso: el algoritmo recibe dos frases, luego en la condicion pregunta si hay espacios y si no los hay
 * agrega los caracteres aun contador para luego comparar las longitudes de ambas frases.
 * salida: "La frase con más caracteres es: 'Prefiero el baloncesto'"
 */

function mayorCantidadcaracters(texto1, texto2) {
    //let texto1 = prompt("ingrese la primera frase");
    //let texto2 = prompt("ingrese la segunda frase");
    let contador1 = 0;
    let contador2 = 0;
    for (let i = 0; i < texto1.length; i++) {
        if (texto1[i] !== " ") {  // si no es espacio, contamos
            contador1++;
        }}
    for (let i = 0; i < texto2.length; i++) {
        if (texto2[i] !== " ") {  
            contador2++;
        }}
    if (contador1 > contador2) {
        console.log("La frase con más caracteres es: '" + texto1 + "'");
    } else if (contador2 > contador1) {
        console.log("La frase con más caracteres es: '" + texto2 + "'");
    } else {
        console.log("Ambas frases tienen la misma cantidad de caracteres.");
    }
}
//mayorCantidadcaracters();

/**
 * 9. Contar apariciones de un carácter elegido
 * Entrada: Texto "Examen de programación", carácter "m"
 * proceso: el algoritmo recibe un texto y un carácter específico, luego 
 * utiliza un ciclo for para recorrer cada carácter del texto. 
 * cada vez que encuentra una coincidencia con el carácter especificado,
 * incrementa un contador. Al final, muestra el número total de apariciones del carácter en el texto.
 * salida: "El carácter 'm' aparece 3 veces en el texto."
 */

function contarAparicionesCaracter(oracion, caracter) {
//let oracion = prompt("Ingrese una oración");
//let caracter = prompt("Ingrese un carácter a buscar");
let contador = 0;   
for (let i = 0; i < oracion.length; i++) {
    if (oracion[i] === caracter) {
        contador++;
    } 
} console.log("El carácter '" + caracter + "' aparece " + contador + " veces en el texto  " + oracion );
}
//contarAparicionesCaracter();

/**
 * 10. Dividir oración en palabras
 * Entrada: "Me gusta aprender programación"
 * proceso: en este algoritmo se pide al usuario ingresar una oración
 * luego se utiliza un ciclo for para recorrer cada caracter de la oración.
 * si el caracter no es un espacio, se agrega a una variable temporal que almacena la palabra actual.
 * cuando se encuentra un espacio, se agrega la palabra completa a una variable de resultado y se 
 * reinicia la variable temporal. Al final, se agrega la última palabra si existe.
 * Salida:
 * Me
 * gusta
 * aprender
 * programación
 */

function dividirOracion(oraciones) {
  //let oracion = prompt("Ingrese una oración");
  let palabra = "";
  let resultado = "Las palabras son:\n";

  for (let i = 0; i < oraciones.length; i++) {
    let caracter = oraciones[i];

    if (caracter !== " ") {
      palabra += caracter;
    } else {
      if (palabra.length > 0) {
        resultado += palabra + "\n";
        palabra = "";
      }}}
  if (palabra.length > 0) {
    resultado += palabra + "\n";}
  console.log(resultado);}
//dividirOracion();

/**                                               BLOQUE 2 - Cadenas con Arreglos
 * 1. Contar caracteres de varias palabras
 * entrada: varios caracteres agregados en un arreglo
 * proceso: para este algoritmo vamos a reutilizar las funciones anteriores 
 * y la vamos a adaptar para que puedan procesar mas de una palabra.
 * salida: debe mostrar la cantidad de letras que tiene cada palabra. 
 */

function contarCaracteresVarios() {
let palabras = ["manzana", "banana", "cereza"];
 for (let i = 0; i < palabras.length; i++) {
 contarCaracteres(palabras[i]);}
}
contarCaracteresVarios();

/**
 * 2. Contar apariciones de una letra en varias frases
 * entrada: varias frases y una letra a buscar
 * proceso: para este algoritmo vamos a reutilizar las funciones anteriores 
 * y la vamos a adaptar para que puedan procesar mas de una frase.
 * salida: debe mostrar la cantidad de veces que aparece la letra en cada frase.
 */

function contarAparicionesVarios() {
    let arreglo = [
        {cadena : "me encanta el cafe", letra : "e"}, 
        {cadena : "estudio programacion", letra : "e"}];
    for (let i = 0; i < arreglo.length; i++) {
        contarApariciones(arreglo[i].cadena, arreglo[i].letra);
    }
}contarAparicionesVarios();

/**
 * 3.  Invertir varios textos
 */

function variosTextos() {
 let palabras = ["Quito", "Lima", "Bogota"];
 for (let i = 0; i < palabras.length; i++){
    invertirTexto(palabras[i]);
 }
}variosTextos();

/**
 * 4. Comparar longitudes de pares de palabras en arreglo
 */

function compararLongitudesV() {
    let compararP = [ 
        {cadena1: "garcia", cadena2: "perez"},
        {cadena1: "lopez", cadena2: "ramirez"}];
    for (let i = 0; i < compararP.length; i++) {
        compararLongitudes(compararP[i].cadena1, compararP[i].cadena2);
    }
}compararLongitudesV();

/**
 * 5. Iniciales de varios nombres completos
 */

function inicialesNombres() {
    let nombres = ["Ana María Torres", "Juan Carlos Pérez"]
    for (let i = 0; i < nombres.length; i++) {
         obtenerIniciales(nombres[i])
}}inicialesNombres();

/**
 * 6. Reemplazo de caracteres en varios textos
 */

function reemplazodeLetras() {
    let palabras = ["programador", "motor"]
    for (let i = 0; i < palabras.length; i++){
        reemplazarCaracteres(palabras[i]);
    }
}reemplazodeLetras();

/**
 * 7. Palíndromos en un arreglo
 */

function palindromasP(){
    let palabras = ["ana", "radar", "hola", "reconocer"];
    for (let i = 0; i < palabras.length; i++) {
        palabraPolindroma(palabras[i]);
}}palindromasP();

/**
 * 8. Frase con más caracteres en varios pares
 */

function fraseMayor() {
    let frases = [
        {texto1: "Me gusta el fútbol", texto2: "Prefiero el baloncesto"},
        {texto1: "Hola" , texto2: "Adiós"}
    ];
    for (let i = 0; i < frases.length; i++){
        mayorCantidadcaracters(frases[i].texto1, frases[i].texto2);
    }
}fraseMayor();

/**
 * 9. Contar apariciones de un carácter en varios textos
 */

function caracteresYapariciones() {
    let texto = [
        {oracion:"Examen de programación", caracter:"m"},
        {oracion: "hola mundo", caracter: "o"}
    ];
    for (let i = 0; i < texto.length; i++) {
        contarAparicionesCaracter(texto[i].oracion, texto[i].caracter);
    }
}caracteresYapariciones();

/**
 * 10. Dividir varias oraciones en palabras
 */

function dividirlasOraciones(){
    let oraciones = ["me gusta aprender programacion", "hola mundo"]
    for (let i = 0; i < oraciones.length; i++){
        dividirOracion(oraciones[i]);
    }
}dividirlasOraciones();