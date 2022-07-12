//                                                         PROGRAMACION FUNCIONAL 


/* 

La programación funcional es un estilo de programación donde las soluciones son simples, 
funciones aisladas, sin ningún efecto secundario fuera del ámbito de la función: INPUT -> PROCESS -> OUTPUT

La programación funcional se refiere a:

Funciones aisladas: sin dependencia alguna del estado del programa, el cual incluye variables globales sujetas a cambios
Funciones puras: una misma entrada siempre da la misma salida

Funciones con efectos secundarios limitados: cualquier cambio o mutación en el estado del programa fuera de la función 
son cuidadosamente controlados
*/

// IMPORTANTE 
/*                                                  CALLBACK                                                                    */

// FUNCION QUE SE PASA A OTRA FUNCION COMO PARAMETRO, SE DESLIZA A OTRA FUNCION PARA DECICIR QUE HACER CUANDO LA FUNCION SE INVOQUE

// FUNCIONES DE PRIMERA CLASE :       
/*

Funciones que pueden ser  asignadas a una variable, pasadas a otra funcion devueltas desde otra funcion como otro valor
normal, en js todas las funciones son de primera clase

*/

// FUNCIONES DE ORDEN SUPERIOR : 
/* 
Son funciones que toman una función como argumento o devuelven una función como valor de retorno
*/


// FUNCIONES LAMBDA  :
/* 
segun lo que investigue es una funcion anonima y autoejecutable (Fat Arrow Function)

*/



/* PROGRAMACION FUNCIONAL IMPERATIVA O DECLARATIVA */

// Ambas coexisten 


/* IMPERATIVA su caracteristica principal es que debemos indicar y definir el control de flujo .  
Son ejemplos cuando usamos sentencias if, if else,  funciones, llamadas, sumas y demas, etiquetas.  . */


/* DECLERATIVA  usamos la composicion de funciones para poder detallar el flujo, teniendo como ventaja 
es mas facil de leer siempre y cuando este correctamente realizada. */

// UN PRINCIPIO FUNDAMENTAL DE LA FUNCION FUNCIONAL ES NO CAMBIAR LAS COSAS, YA QUE LOS CAMBIOS CONDUCEN A ERRORES
// ES MAS FACIL EVITAR ERRPRES SABIENDO QUE LAS FUNCIONES NO CAMBIAN NADA, INCLUYENDO LOS ARGUMENTOS DE LA FUNCION O CUALQUIER VARIABLE GLOBAL
// RECORDAR QUE CAMBIAR O ALTERAR COSAS SE LLAMA MUTAR Y ESTAS CONLLEVAN EFECTOS SECUNDARIOS



// OTRO PRINCIPIO ES DECLARAR SIEMPRE SUS DEPENDENCIAS DE FORMA EXPLICITA EJEMPLO 


/* Esto significa si una función depende de que una variable u objeto esté presente,
 después pasa esa variable u objeto directamente a la función como argumento.  EJEMPLO  */




let fixedValue = 4; // La variable global

function incrementer(value) { // damos un parametro 
return value + 1 ;


}

console.log(incrementer(fixedValue)) // como argumento pasamos la variable global 


/*

REFACTORIZA VARIABLES GLOBALES POR FUERA DE FUNCIONES


Hasta ahora, hemos visto dos principios distintos para la programación funcional:

No alteres una variable u objeto: crea nuevas variables y objetos y devuélvelos, si es necesario, desde una función. 
Pista: usar algo como const newArr = arrVar, donde arrVar es un arreglo, simplemente creará una referencia a la variable existente
y no una copia. Así que cambiar un valor en newArr cambiaría el valor en arrVar.

Declara parámetros de función: cualquier cálculo dentro de una función depende sólo de los argumentos pasados a la función 
y no en ningún objeto o variable global.

Añadir uno a un número no es muy emocionante, pero podemos aplicar estos principios cuando trabajamos con arreglos u objetos más complejos.*/

// EJERCICIO PARA TENER EN CUENTA 
//https://www.freecodecamp.org/espanol/learn/javascript-algorithms-and-data-structures/functional-programming/refactor-global-variables-out-of-functions


/*                      METODO MAP PARA EXTRAER DATOS DE UN ARREGLO                                                 */


/* Toma un arreglo de una cantidad determinada y nos va a devolver otro arreglo que va a tener la mixma longitud 
que el arreglo inicial al cual le llamamos el metodo, nos permite tomar la funcion que le pasamos como argumento   
y aplicar esa funcion a cada uno de los elementos que se encuentra dentro del arreglo.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map  


*/




/*                                                           METODO FILTER PARA EXTRAER DATOS DE UN ARGUMENTO                                            */


/*llama a una funcion en cada elemento de un arreglo y devuelve un nuevo arreglo que contiene solo los elementos
por lo que esa funcion devuelve true, filtra el arreglo basandose en la funcion que se le pasa. Y tampoco muta el arreglo original

EJERCICIO https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-filter-method-to-extract-data-from-an-array

lo intente solucionar de la siguiente manera.  
*/

const filteredList = watchList.map(movie =>{ /*"mapeamos todo el arreglo pasandole una fat arrow function la cual iteramos entre todos
los objetos del arreglo"*/
let newObj = {}  
    newObj["title"] = movie.Title // estamos asignandole las propiedades de nuestra iteracion através de movie, a un nuevo objeto que creamos
    newObj["rating"] = movie.imdbRating 
    return newObj 
}).filter(individualRating => { //filtramos un elemento y ahi es donde viene su defincion, nos devuelve el array con LA MISMA CANTIDAD DE ELEMENTOS 
    //O MENOS  y estamos filtrando el objeto en este caso con una tambien fat arrow function el cual le decimos que intere por los rating y con el ternary conditional
    let convertToFloat = parseFloat(individualRating.rating)  // convertimos a decimal 
    return convertToFloat <= 8.0 ? "": individualRating // le estamos diciendo que si la conversion del decimal es menor o igual 8.0  no nos muestre nada
    // caso contrario nos muestre los que tengan mas que ese numero
});

//ESTA COSA CADA VEZ SE VUELVE MAS COMPLEJA, PERO TAMBIEN INTERESANTE.


/*                                                         METODO SLICE REPASO                                                           */

/* Utiliza el método slice en la función sliceArray para retornar parte del arreglo anim dados los índices beginSlice y endSlice. 
La función debe devolver un arreglo.*/

function sliceArray(anim, beginSlice, endSlice) {
    return anim.slice(beginSlice, endSlice)     
    }
    
    const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
    console.log(sliceArray(inputAnim, 1, 4));







/* */
/* */
/* */
