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

// UN PRINCIPIO FUNDAMENTAL DE LA FUNCION FUNCIONAL ES NO MUTAR LAS COSAS, YA QUE LAS MUTACIONES CONDUCEN A ERRORES
// ES MAS FACIL EVITAR ERRPRES SABIENDO QUE LAS FUNCIONES NO CAMBIAN NADA, INCLUYENDO LO    S ARGUMENTOS DE LA FUNCION O CUALQUIER VARIABLE GLOBAL
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



Cuando se utiliza la función callback, se pasan tres argumentos. El primer argumento es el elemento actual que se está
procesando. El segundo es el índice de ese elemento y el tercero es el arreglo al que se llamó el método map.


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map  


*/




/*                                                           METODO FILTER PARA EXTRAER DATOS DE UN ARGUMENTO                                            */


/*llama a una funcion en cada elemento de un arreglo y devuelve un nuevo arreglo que contiene solo los elementos
por lo que esa funcion devuelve true, filtra el arreglo basandose en la funcion que se le pasa. Y tampoco muta el arreglo original

La función callback acepta tres argumentos. El primer argumento es el elemento actual que se está procesando. El segundo es el índice de ese elemento y el
tercero es el arreglo sobre el que se llamó al método filter.

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

// para remover datos de un arreglo es mejor usar slice ya que el metodo splice que tambien remueve los elementos que necesitamos 
// asi que usar slice en lugar de splice  ayuda a prevenir cualquier daño efecto secundario de  mutar un arreglo 


/* 

EJERCICIO 
Reescribe la función nonMutatingSplice usando slice en lugar de splice. Debe limitar el arreglo proporcionado cities a una longitud d
e 3 y devolver un nuevo arreglo con solo los primeros tres elementos.

No modifiques el arreglo original proporcionado en la función.

 */

function nonMutatingSplice(cities) {
    return cities.slice(0,3);
}
const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.log(nonMutatingSplice(inputCities));


/*                                                    METODO CONCAT                                                                    */

// CONCATENAR SIGNIFICA UNIR DE EXTREMO A EXTREMO, EN JS CONCAT FUNCIONA DE LA MISMA MANERA PARA ARREGLOS Y STRINGS 

// SINTAXYS [1, 2, 3].concat([4, 5, 6]);  
/* 
EJERCICIO : 

Usa el método concat en la función nonMutatingConcat para concatenar attach al final de original. La función deber devolver el
 arreglo concatenado.
*/ 

function nonMutatingConcat(original, attach) {
    return original.concat(attach)
}
    const first = [1, 2, 3];
    const second = [4, 5];
    let test = nonMutatingConcat(first, second);
    console.log(test)


/*                                                     USAR CONCAT EN VEZ DE PUSH                                                       */


/*
COMO EL PRINCIPAL OBJETIVO DE LA PROGRAMACION FUNCIONAL ES USAR FUNCIONES NO MUTANTES. Y RECORDANDO QUE EL METODO .PUSH LE EMPUJA/AÑADE
ELEMENTOS AL FINAL DE UN ARREGLO MUTANDOLOS (haciendo que puedan aparecer efectos secundarios), una manera de arregla este problema.
es con concat ya que añade nuevos elementos  al final de un arreglo sin mutar el arreglo original
EJERCICIO 
Cambia la función nonMutatingPush para que use concat para añadir newItem al final de original en lugar de push. La función debe devolver un arreglo.

 */
function nonMutatingPush(original, newItem) {
    return  original.concat(newItem)
    
    //return original.push(newItem); // si usaramos push la consola nos mostraria solo el numero 4.
  }
  const first2 = [1, 2, 3];
  const second2 = [4, 5];
   console.log(nonMutatingPush(first2, second2)); 




   /*                                                     REDUCE PARA ANALIZAR DATOS                                                    */

/*
El método reduce itera sobre cada elemento del arreglo y devuelve un solo valor (por ejemplo una cadena, número, objeto, arreglo).
Esto se consigue mediante una función callback que se llama en cada iteración.


La función callback acepta cuatro argumentos. El primer argumento se conoce como acumulador, que recibe el valor retornado de la función
callback de la iteración anterior, el segundo es el elemento actual que se está procesando, el tercero es el índice de ese elemento y el 
cuarto es el arreglo sobre el que se llama a la función reduce.

Además de la función callback, reduce tiene un parámetro adicional que toma un valor inicial para el acumulador. Si este segundo parámetro no se utiliza,
entonces la primera iteración se omite y la segunda se pasa por el primer elemento del arreglo como acumulador.

array.reduce (function (total, currentValue, currentIndex, arr), initialValue)



EJERCICIO 

https://www.freecodecamp.org/espanol/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-reduce-method-to-analyze-data   

La variable watchList contiene un arreglo de objetos con información sobre varias películas. Utiliza reduce para encontrar la calificación
media en IMDB de las películas dirigidas por Christopher Nolan. Recuerda de desafíos anteriores filtrar (filter) los datos y mapear (map) 
sobre ellos para extraer lo que necesitas. Puede que necesites crear otras variables y devolver la calificación media con la función getRating. 
Ten en cuenta que los valores de calificación se guardan como cadenas en el objeto y necesitan ser convertidos en números antes de ser utilizados
en cualquier operación matemática.

intente solucionarlo de la siguiente manera 


*/

function getRating(watchList) {
    let nolanMovies = watchList.filter(movies => { // con filter lo que hacemos es filtrar iterando por toda la lista el parametro 
        if(movies.Director === "Christopher Nolan") return movies   // y con if buscamos que 
    }) 

let imdbRatingSum = nolanMovies.reduce((total , movie) => { // linea 247  pasamos la funcion callback con dos argumentos el cual el primero 
    // es el total de lo que estamos reduciendo y el segundo es para iterar en los valores de movie.imdbRating acumulador 
    total += parseFloat(movie.imdbRating) //convertimos a Float 
   return total 
  },0) // valor donde queremos que inicie el acumulador. linea 244
  
    let averageRating = imdbRatingSum / nolanMovies.length; // sacamos promedio 
  
  
    return averageRating; // devolvemos el promedio 
  }
  
  console.log(getRating(watchList)); //  8.675      



/* EJERCICIO 
Completa el código para la función squareList usando cualquier combinación de map(), filter(), y reduce(). 
La función debe devolver un nuevo arreglo que contenga los cuadrados de solamente los enteros positivos (números decimales no son enteros)
 cuando se le pasa un arreglo de números reales. Un ejemplo de un arreglo que contiene números reales es [-3, 4.8, 5, 3, -3.2].

Nota: Tu función no debe usar ningún tipo de bucle for o while o la función forEach().*/

const squareList = arr => { 
let itsIntegerAndPositive = arr.filter(x => x % 1 === 0 && x > 0 ) // filtramos el arreglo para que en el resultado de cada iteracion nos retorne
// un arreglo que no sea decimal y tampoco sea negativo 
return itsIntegerAndPositive.map(x => x * x) // iteramos y a cada iteracion que le hacemos lo multiplicamos para sacar el cuadrado.
};

const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
console.log(squaredIntegers); //[ 16, 1764, 36 ] 








/*                                                       METODO SORT PARA ORDENAR                                         */
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#examples

// El método sort ordena los elementos de un arreglo de acuerdo a la función callback.

/*Ejercicio 
Utiliza el método sort en la función alphabeticalOrder para ordenar los elementos de arr en orden alfabético. 
La función debe devolver el arreglo ordenado. */

function alphabeticalOrder(arr) {
    arr.sort((a,b)=> a === b ? 0 : b < a ? 1 : -1) // pasamos un callback donde si devuevle un valor menor a 0 para a y b entonces b ira antes que a 
                // y si devuelve un valor mayor para a y b entnces a ira antes que b 
                // y si es 0 pues los dejara como esta 
        return arr
    }
    
    console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));  //  [ 'a', 'a', 'c', 'd', 'g', 'z' ]


    // SORT TIENE EFECTOS SECUNDARIOS YA QUE COMO PUDIMOS VER, MUTA EL ARREGLO ORIGINAL Una forma de evitar esto es concatenar primero 
    // un arreglo vacío al que está siendo ordenado (recuerda que slice y concat devuelven un nuevo arreglo), luego ejecutar el método sort.


// EJERCICIO 
// Utiliza el método sort en la función nonMutatingSort para ordenar los elementos de un arreglo en orden ascendente. La función debe devolver un
// nuevo arreglo y no mutar la variable globalArray. 
// lo solucione asi 
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
    let localArray = [] 
    let copyArr = arr.slice()
    let concat =  copyArr.concat(localArray)
    return concat.sort((a , b) => a - b)
    
    }
    
    console.log(nonMutatingSort(globalArray)) ; 


/*                                                   REPASO METODO SPLIT () 

DIVIDE UNA CADENA EN UN ARREGLO DE CADENAS BUSCANDO NECESITANDO UN PATRON SPLIT PUDIENDO SER UN CARACTER O UNA REGEX

EJERCICIO 
Utiliza el método split dentro de la función splitify para dividir str en un arreglo de palabras.
La función debe devolver un arreglo. Ten en cuenta que las palabras no siempre están separadas por espacios
y que el arreglo no debe contener signos de puntuación.



*/ 
function splitify(str) {
    return str.split(/\W/)
    }
    console.log(splitify("Hello World,I-am code"));



/*                                                 REPASO METODO JOIN () 


        UNE LOS ELEMENTOS DE UN ARRAY EN UN STRING CON UN DELIMITADOR TAMBIEN PUDIENDO SER UN CARACTER O UNA REGEX  
        EJERCICIO 


Utiliza el método join (entre otros) dentro de la función sentensify para hacer una oración a partir de las palabras 
en la cadena str. La función debe devolver una cadena. Por ejemplo, I-like-Star-Wars se convertiría en I like Star Wars.
Para este desafío, no utilices el método replace.
*/

function sentensify(str) {
    let convertToArray = str.split (/\W/)
    return convertToArray.join(" ")
    }
    
    console.log(sentensify("May-the-force-be-with-you"));
/* */
/* */