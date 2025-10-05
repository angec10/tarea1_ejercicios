/** Guía Práctica Experimental N.°2                                    
 *                                              BLOQUE 1 Y 2
 *                              Arreglos y estructuras tipo pila con objetos
 * 1. REGISTRAR LIBROS EN UN ARREGLO
 */

let biblioteca = [
    {titulo: "Los juegos del hambre", autora: "Sussana Collins", año: 2008 },
    {titulo: "Cien años de soledad", autor: "G. García Márquez", año: 1967 },
    {titulo: "El asesino de la montaña", autor: "Anders de la Motte", año: 2024}, //en listo mi biblioteca con libros conocidos
    {titulo: "El principito", autor: "Antoine de Saint-Exupéry", año: 1943},
    {titulo: "Cadaver exquisito", autora:"Agustina Bazterrica", año: 2017}
    ]
/**
 * 2. Pedir al usuario un título y verificar si existe en el arreglo de libros.
 */
function buscarLibro(){
    let libro = prompt("ingrese el titulo del libro que desea encontrar");//le pido al usuario que ingrese el titulo para buscar el libro
    let encontrado = false // declaro encontrado como false ya que con esto agilizare la busqueda
    for (let i = 0; i < biblioteca.length; i++){ //utilizo un for para recorrer dentro de la biblioteca
        if (libro === biblioteca[i].titulo){ // utilizo un condicional para ver si el titulo coincide
            console.log(`el libro ${libro} si se encuentra en nuestra biblioteca.`)//muestro un mensaje al usuario si el libro se encuentra en mi biblioteca
            encontrado = true //el booleano se va por verdadero pra que en el caso de no encontrar el libro me de la respuesta contraria
            break
        }
} 
    if (!encontrado) { //aca invierto el booleano con ! para que asi el true vuelva a ser false
            console.log ("libro no encontrado")
        }
}buscarLibro();
/**
 * 3. Recorrer el arreglo y mostrar cuántos cumplen esa condición
 */
function contarLibros(){
    let c = 0; //declaro un contador para saber cuantos libros han sido publicados despues del 2000
    for (let i = 0; i < biblioteca.length; i++){ //utilizo un ciclo para recorrer la biblioteca
        if (biblioteca[i].año > 2000){ //el condicional para saber cual a sido publicado despues del 2000
           c++
        }
    } console.log(`la cantidad de libros publicados despues del 2000 son: ${c}`)
}contarLibros();
/**
 * 4. Concatenar todos los títulos en una sola cadena
 */
function concatenarTitulos(){ 
    let titulos = []
    for (let i = 0; i < biblioteca.length; i++){
         titulos.push(biblioteca[i].titulo) // agrega los titulos a la nueva variable
    } console.log (`${titulos.join("-")}`)
} concatenarTitulos();
/**
 * 5. Pedir el título y un nuevo año, recorrer el arreglo y modificar ese objeto.
 */
function actualizarAño(){
    let titulo = prompt("ingrese el titulo del libro que desea actualizar");
    let nuevoAño = prompt("ingrese el nuevo año del libro");
    for (let i = 0; i < biblioteca.length; i++){
        if (titulo === biblioteca[i].titulo){ //busca el titulo del libro que se desea actualizar y cambia el año
            biblioteca[i].año = nuevoAño
            break;
        }
    } console.log("la biblioteca actualizada se ve asi ");
    console.log(biblioteca);
}actualizarAño();

/**
 * 6. Implementar una pila de libros (push)
 */
function implementarPila(){
    let libro1 = [
        {titulo: "el señor de las moscas", autor:"Willian Golding", año:1954},
        {titulo: "amanecer en la cosecha", autora: "Sussana Collins", año: 2025},
        {titulo: "el arte de la alegria", autora: "Goliarda Sapienza", año: 1976}
    ];
    biblioteca.push(...libro1); // Agrega cada libro individualmente
    console.log(biblioteca);
}
implementarPila();

/**
 * 7. Aplicar pop() a la pila y mostrar el libro eliminado
 */
function eliminarLibro(){
    let libroeliminado = biblioteca.pop() //elimina el ultimo lipro de la pila con la funcion pop
    console.log ("el libro que ha sido eliminado es : ",libroeliminado);
}eliminarLibro();

/**
 * 8. Ver el libro en la cima de la pila (peek)
 */
function cimadelaPila(){
    let ultimolibro = biblioteca[biblioteca.length - 1] //aqui aplica peek osea que muestra el ultimo libro sin eliminarlo
    console.log("el ultimo libro ingresado es ", ultimolibro)
}cimadelaPila();

/**
 * 9. Verificar si la pila está vacía (isEmpty)
 */
function pilaVacia(){
    let = vacio = false
    if (biblioteca.length === 0){
        console.log("la biblioteca no contiene libros");//al no haber la funcion isEmpty utilizamos length si este es igual a cero entonces 
        vacio = true                                    //muestra un mensaje de que ya no tiene contenido y viceversa
    }if (!vacio){
        console.log("la biblioteca tiene contenido");}
}pilaVacia();

/**
 * 10. Vaciar completamente la pila
 */
function vaciarBiblioteca(){
    while( biblioteca.length > 0){ //utiliza las funciones anteriores para vaciar la pila y comprobar que esta vacia
        eliminarLibro();
    }
    pilaVacia();

}vaciarBiblioteca();