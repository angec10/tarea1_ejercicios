 /*                                                BLOQUE 3 Y 4
 * Bloque 3: Problemas Secuenciales Numéricos (10 ejercicios, sin arreglos)
 * 1. Calcular el promedio de 5 números.
 * entrada: Entrada: 5, 7, 9, 3, 6
 * proceso: en este algoritmo vamos a procesar 5  numeros que sean ingresados por el usuario
 * los vamos a ir sumando para luego dividirlos por la cantidad de numeros ingresados
 * y asi obtener el promedio.
 * salida: el promedio es 6
 */

function sacarPromedio(numero){
    //let cantidadN = 5;
    let suma = 0;
    for ( let i= 0; i < numero.length; i++){
        //let numero = parseFloat(prompt("ingrese un numero"));
        suma += numero[i];
    }
    let promedio = suma / numero.length;
    console.log( "el promedio es " + promedio);
    }
//sacarPromedio();

/**
 * 2. Contar cuántos de 5 números son impares.
 * entrada: Entrada: 2, 5, 7, 8, 10
 * proceso: en este ejercicio vamos a encontrar los numeros impares, para encontrarlos vamos a utilizar el mood
 * si el numero ingresado por el usuario tiene un resto distinto de 0 al dividirlo por 2, entonces es impar.
 * salida: Salida: "Cantidad de impares = 2"
 */

function contarImpares(numero){
    //let cantidadN = 5;
    let contadorImpares = 0;
    for ( let i= 0; i < numero.length; i++){
        //let numero = parseInt(prompt("ingrese un numero"));
        if ( numero[i] % 2 !== 0){
            contadorImpares++;
        }
    }
       console.log("Cantidad de impares = " + contadorImpares);
}//contarImpares();

/**
 * 3. Leer 5 edades y contar cuántos son mayores de edad.
 * Entrada: 15, 22, 18, 30, 12
 * proceso: declaramos las variables que van a aparticipar en el algoritmo y luego 
 * le pedimos al usuario que ingrese 5 edades para saber si estas son mayores de edad comparandolas con 18
 * si la edad ingresada es mayor o igual a 18, entonces se incrementa el contador de mayores de edad.
 * Salida: "Mayores de edad: 3"
 */

function mayoresdeEdad(edad){
    //let cantidadN = 5;
    let contadorMayores = 0;
    for ( let i= 0; i < edad.length; i++){
        //let edad = parseInt(prompt("ingrese una edad"));
        if ( edad[i] >= 18){
            contadorMayores++;
        }
    }
    console.log("la cantidad de mayores de edad es " + contadorMayores);
}//mayoresdeEdad();

/**
 * 4. Buscar un valor en 4 números.
 * entrada: Entrada: (4, 8, 15, 23), valor=15
 * proceso: agregamos 4 numeros sin utilizar un arreglo sino que le asignamos una variable para poder
 * comparar con el valor ingresado y poder mostrar en pantalla si el valor ingresado se encuentra o no
 * salida: "El valor 15 existe."
 */
function buscarValor(numeros, valor){
    //let numero1= 4;
    //let numero2= 8;
    //let numero3= 15;
    //let numero4= 23;
    //let valor= parseInt(prompt("ingrese un valor a buscar"));
    if ( valor === numeros[0] || valor === numeros[1] || valor === numeros[2] || valor === numeros[3]){
        console.log("El valor " + valor + " existe.");
    } else {
        console.log("El valor " + valor + " no existe.");
    }
}//buscarValor();

/**
 * 5. Concatenar 3 palabras.
 * Entrada: "Me", "gusta", "programar"
 * proceso: en este ejercicio vamos a concatenar palabras, que es basicamente unirlas en una sola cadena
 *  para eso vamos a pedirle al usuario que ingrese 3 palabras y las vamos a ir concatenando en una variable
 * salida: "Me gusta programar"
 */
function concatenarP(palabras){
    //let palabra = 3;
    let resultado= "";
    for ( let i = 0; i < palabras.length; i++){
        //let palabras= prompt("ingrese una palabra");
        resultado += palabras[i]
    }
    console.log(resultado)
}//concatenarP();
 
/**
 * 6. Calcular el cubo de 3 números.
 * Entrada: 2, 3, 4
 * proceso: tomamos los valores y los multiplicamos tres veces por si mismos y esto lo guardamos en la variable
 * cubo y luego formar un solo arreglo en resultados con la funcion push. luego esto lo mostramos en pantalla.
 * salida: 8, 27, 64
 */

function calcularalCubo(numero){
    //let cantidad = 3;
    let resultados = [];
   //for (let i = 0; i < cantidad; i++){
    for (let i = 0; i < numero.length; i++){
        //let num = prompt("ingrese tres numeros para elevarlos al cubo");
        let num = numero[i];
        let cubo = num*num*num;
        resultados.push(cubo);
    }
    console.log("el resultado de elevar el numero al cubo es " + resultados)
}//calcularalCubo();

/**
 * 7. Mostrar tabla de multiplicar de un número.
 * Entrada: 5
 * proceso: para este algoritmo declaramos las variables numero en 10 ya que pide la tabla de multiplicar del uno al 10.
 * la variable resultado guarda los numeros que ya han sido multiplicados. utilizamos un for que cuente las 10 
 * veces que va a ser multiplicado el numero que ingrese el usuario. pra cumplir con el algoritmo multiplicamos
 * numeroS con el contador y el resultado lo guardamos y luego lo mostramos en pantalla con console.
 * salida: 5, 10, 15, …, 50
 */
function tabladeMultiplicar(numeroS){
     let resultado = [];
     //let multit  = prompt("ingrese un numero")
     for (let i = 1; i <= 10; i++){
       resultado.push(numeroS*i)
     }
       console.log("la tabla de multiplicar " + numeroS + "  es : " + resultado)
}//tabladeMultiplicar();

/**
 * 8. Calcular factorial de un número.
 * entrada: 4
 * proceso: para encontrar el factorial se debe multiplicar la sucesion del numero elegidopor ejemplo: 6
 * el factorial de este se encuentra de la siguiente manera 6!= 1*2*3*4*5*6= 720, 
 * pues esto es lo que hace nuestro algoritmo
 * multiplica la sucesion de estos en el ciclo for que va contando y a la vez sumando
 * y esto se lo guarda en la variable factorial.
 * salida: 24
 */ 
function factorialN(numeroF){
    //let numeroF = prompt("ingrese el numero al que le quiera sacar factorial")
    let factorial = 1;
    for (let i = 1; i <= numeroF; i++){
        factorial = factorial*i
    }
    console.log("el factorial de " + numeroF + " es " + factorial)
}//factorialN();

/**
 * 9. Leer 4 números y mostrar los que sean pares.
 * Entrada: 3, 8, 11, 14
 * proceso: el proceso de este ejercicio consta de tres variables en donde cantidad esta definida con las veces
 * que va a pedir un numero al usuario para que ingrese un numero y encontrar el par, este se guarda en numero 
 * que gracias a la condicion conprueba si el numero tiene mood cero, si es el caso se suma un numero a pares.push.
 * Salida: 8, 14
 */
function numerosPares(numerosp){
    //let num = 5;
    let pares = [];
    for (let i = 0; i < numerosp.length; i++){
        //let num = parseInt(prompt("ingrese 4 numeros"))
        num = numerosp[i]
        if (num%2 === 0){
        pares.push(num)
        }
    }
    console.log("los numeros pares son " + pares )
}//numerosPares();

/**
 * 10. Sumar 2 grupos de 3 números.
 * Entrada: A=(2,4,6), B=(1,3,5)
 * proceso: en este ejercicio vamos a sumar dos grupos de numeros almacenados en grupo A y grupo B estos
 * numeros fueron ingresados por el usuario, luego vamos a sumarlos segun el orden: a1+b1=c1. 
 * el resultado de esto se guardara en las variables ( c1, c2, c3) para luego mostrarlas en pantalla.
 * Salida: C=(3,7,11)
 */
function sumaDegrupos(A, B){
    let C1, C2, C3;

for (let i = 1; i <= 3; i++) {
    //let A = parseInt(prompt("Ingrese número A" + i  ));
    //let B = parseInt(prompt("Ingrese número B" + i  ));

    if (i === 1) {
        C1 = A[0] + B[0];
    } else if (i === 2) {
        C2 = A[1] + B[1];
    } else {
        C3 = A[2] + B[2];
    }
}
console.log("C = (" + C1 + ", " + C2 + ", " + C3 + ")");
}//sumaDegrupos();

/**                               BLOQUE 4--PROBLEMAS NUMEROS CON ARREGLOS (10 ejercicios)
 * 1. Promedio de un arreglo
 * Entrada: [5, 7, 9, 3, 6]
 * proceso: es el mismo ejercicio anterior solo que esta vez llama a la funcion y le proporciona un arreglo
 * Salida: "El promedio es 6"
 */

function sacarPromarreglo(){
    let numero = [5, 7, 9, 3, 6];
          sacarPromedio(numero);
}sacarPromarreglo();

/**
 * 2. Contar impares en un arreglo
 */
function contarImparesarreglo(){
      let numero = [2, 5, 7, 8, 10];
      contarImpares(numero);
}contarImparesarreglo();

/**
 * 3. Mayores de edad en un arreglo
 */
function mayoresdeEdadarreglo(){
    let edad = [15, 22, 18, 30, 12];
        mayoresdeEdad(edad);
}mayoresdeEdadarreglo();

/**
 * 4. Buscar valor en un arreglo
 */
function buscarValorarreglo (){
    let numeros = [4, 8, 15, 23];
    let valor = 15;
    buscarValor(numeros, valor)
}buscarValorarreglo ();

/**
 * 5. Concatenar palabras de un arreglo
 */
function concatenarParreglo(){
    let palabras =  ["Me", "gusta", "programar"]
        concatenarP(palabras)
}concatenarParreglo();

/**
 * 6. Cubo de elementos en arreglo
 */
function elevaralCubo(){
    let numero =  [2, 3, 4];
     calcularalCubo(numero)
}elevaralCubo();

/**
 * 7. Tabla de multiplicar de elementos
 */
function tabladeMultiplicararreglos(){
    let numeroS = [3, 5];
    for (let i = 0; i < numeroS.length; i++){
    tabladeMultiplicar(numeroS[i]);
    }
}tabladeMultiplicararreglos();

/**
 * 8. Factorial de elementos en arreglo
 */
function factorialarreglo(){
    let numeroF = [4, 6];
    for ( let i = 0; i < numeroF. length; i++){
        factorialN(numeroF[i]);
    }
}factorialarreglo();

/**
 * 9. Copiar pares a otro arreglo
 */
function numerosParesarreglo(){
    let numerosp = [3, 8, 11, 14, 25];
        numerosPares(numerosp);
}numerosParesarreglo();

/**
 * 10. Suma de dos arreglos
 */
function sumadearreglos(){
    let A = [2, 4, 6];
    let B = [1, 3, 5];
    sumaDegrupos(A, B);
}sumadearreglos();