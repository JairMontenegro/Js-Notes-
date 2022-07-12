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
segun lo que investigue es una funcion anonima y autoejecutable

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




/* */
/* */
/* */
