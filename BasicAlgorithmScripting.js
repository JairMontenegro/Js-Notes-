/*   16 EJERCICIOS EXPLICADOS DE PROGRAMACION DE ALGORI   MOS BASICOS                         */




/* Convierte Celsius a Fahrenheit
La fórmula para convertir de Celsius a Fahrenheit es la temperatura en Celsius multiplicado por 9/5, más 32.

Se te da una variable celsius que representa una temperatura en Celsius. Utiliza la variable fahrenheit ya definida
y asígnale la temperatura Fahrenheit equivalente a la temperatura Celsius dada. Utiliza la fórmula mencionada anteriormente
para ayudarte a convertir la temperatura Celsius a Fahrenheit.*/

function convertToF(celsius) {
  let fahrenheit = celsius * 9 / 5 + 32;
  return fahrenheit;
}
let result = convertToF(30);
console.log(result)

/*                                                      EJERCICIO NUMERO 2                                                 */

/* Invierte una cadena
Invierte la cadena proporcionada.

Es posible que necesites convertir la cadena en un arreglo antes de poder invertirla.

Tu resultado debe ser una cadena.*/

function reverseString(str) {
  return str.split('').reverse().join("");
}

let result2 = reverseString("hello");

console.log(result2) //olleh 


/* En este ejercicio podemos ver tres metodos
- .split() el cual nos permite convertir un string en un arreglo siguiendo un patron de busqueda, 
            en este caso la busqueda es cualquier caracter es decir el array que enque se convertira sera ['h','e','l','l', 'o']


- .reverse() revierte un arreglo en su lugar, es decir el primer elemento se convierte en el ultimo  y viceversa.
            en este ejercicio es lo que nos permite darle vuelta al arreglo, que fue convertido gracias al metodo anterior.  


- .join() crea y retrona un nuevo string concatenando todos los elementos que trae de un array, sepearado por comas o 
            un separador que pasemos como parametro, si el array tiene un solo item devolvera ese item sin usar separador. 

*/


/*                                                      EJERCICIO NUMERO 3                                                 */


/* Factoriza un número

Devuelve el factorial del entero proporcionado.

Si el número entero es representado con la letra n, un factorial es el producto de todos 
los enteros positivos menores o iguales a n.

Los factoriales suelen representarse con la abreviatura n!

Por ejemplo: 5! = 1 * 2 * 3 * 4 * 5 = 120

Sólo se proporcionarán a la función los enteros mayores o iguales a cero.
*/

//Este es un ejericicio muy basico y muy bueno para explicar el concepto de recursividad. 
// en palabras criollas, y con poco tecnisismo es basicamente una funcion que se llama a si misma(recursiva) en el cuerpo de esa
// funcion, estableciendo un caso base como punto final de la funcion. Mira el ejemplo 

function factorialize(num) {
  if (num <= 1) {  // caso base basicamente le estamos diciendo que cuando el factor llegue a 1 pues retorene uno. 
    return 1
  } else {
    return factorialize(num - 1) * num //aqui estamos llamando a la funcion de nuevo en si misma a esto se le conoce como recursividad.
    //  donde numde l esta siendo multiplicado por n -1 
  }
}
let factor = factorialize(5); // esto dara 120 
console.log(factor)


/*                                                      EJERCICIO NUMERO 4                                                 */


/* Encuentra la palabra más larga en una cadena
Devuelve la longitud de la palabra más larga en la oración proporcionada.

Tu respuesta debe ser un número.*/


function findLongestWordLength(str) {
  let longestWord = ""; // declaramos e inicializamos una variable con una cadena vacia. 
  let strSplit = str.split(" ") // al string pasado como argumento de la funcion le pasamos split que nos devuelve un arreglo 
  //separado por comas y lo colocamos en una variable nueva. 


  for (let i = 0; i < strSplit.length; i++) {// iteramos donde por cada iteracion buscamos la longitud de cada indice del arreglo 
    strSplit[i].length > longestWord ? longestWord = strSplit[i].length : NaN

    // por cada iteracion, cada longitud de cada indice del arreglo sera comparada con la variable longestWord
    // diciendo que en cada iteracion, si la longitud de nuestro indice es mayor que nuestra variable longestword
    //entonces nuestra variable longestWorrd sera igual a la longitud de ese indice, e ira actualizandose la longitud. 
    // y asi seguira comparandose con toda las longitudes de los indices hasta que el loop finalice.

  }

  return longestWord; // devolvemos nuestra variable nueva. 
}

let r = findLongestWordLength("The quick brown fox jumped over the lazy dog");

console.log(r) // 6 

/*                                                      EJERCICIO NUMERO 5                                                 */



/* Devuelve los números mayores en los arreglos
Devuelve un arreglo que consista en el mayor número de cada sub-arreglo proporcionado.
Por simplicidad, el arreglo dado contendrá exactamente 4 sub-arreglos.

*/
function largestOfFour(arr) {
  let newArray = [] // declaramos e inicializamos una variable


  for (let i = 0; i < arr.length; i++) { // iteramos a traves del arreglo de afuera.  
    let longitude = arr[i][0] // declaramos  una nueva variable para que en cada loop compare el arreglo con el index 0 de cada arreglo 
    for (let j = 0; j < arr[i].length; j++) { // iteramos en cada sub arreglo 
      arr[i][j] > longitude ? longitude = arr[i][j] : NaN //cada item del sub arreglo se comparara la variable longitude.
      //diciendo que si ese index es menor que longitude, longitude se va a actualizar con ese index 
    }
    newArray[i] = longitude
  }

  return newArray;
}

let re = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

console.log(re) //[ 5, 27, 39, 1001 ]


/*                                                      EJERCICIO NUMERO 6                                                 */


/*Usando el metodo substring()
Evalúa si una cadena (primer argumento, str) termina con la cadena de destino dada (segundo argumento, target).
 */

  function confirmEnding(str, target) {
    return str.substring(str.length - target.length) === target ? true : false   
    // La funcion retorna: el string pasado como argumento de la funcion con el metodo substring  y como parametro de 
    // ese metodo lo que estamos haciendo es retornar  la longitud del string para luego restarlo con la longitud
    // del parametro target, de esa manera, ese retorno lo comparamos con el parametro target devolviendo true si termina con 
    // el valor pasado como argumento de la funcion target. 

}

  let res = confirmEnding("Bastian", "an");
    console.log(res) // true



/*NOTAS : SUBSTRING es un metodo el cual nos retorna la parte del string entre los indices de inicio y final de un string  
entonces, recibe dos argmentos  substring(inicio y final) el argumento final es opcional ya que si pasamos un indice de inicio
comenzara a retornar de ahi hasta el final del string. 


*/

/*                                                      EJERCICIO NUMERO 7                                               */


/* Repite una cadena repite una cadena
Repite una cadena dada str (primer argumento) por un número (num) de veces (segundo argumento). 
Devuelve una cadena vacía si num no es un número positivo.*/

/*Esto tambien se puede hacer con recursividad */
// el planteamiento es similar al ejercicio 3. asi que su explicacion es bastante parecida, pero aqui usare el conditional ternary.

function repeatStringNumTimes(str, num) {
  return num <= 0 ? str = " " : str + repeatStringNumTimes(str, num - 1) ;
  }
  
  let resu = repeatStringNumTimes("abc", 3);
  
  console.log(resu) // "abcabcabc"


/*                                                      EJERCICIO NUMERO 8                                                  */


  /* 
Recorta una cadena (primer argumento) si es más larga que la longitud máxima proporcionada (segundo argumento). 
Devuelve la cadena recortada con un ... al final.
*/
function truncateString(str, num) {
  return num >= str.length ? str : str.substring(0,num) + '...'
  }
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))// A-tisket...;




  /*                                                      EJERCICIO NUMERO 9                                                 */

/* Crea una función que recorra un arreglo arr y devuelva el primer elemento que pase un "detector de verdad".
Esto significa que dado un elemento x, el "detector de verdad" es pasado si func(x) es true.  Si ningún elemento pasa
la prueba. la función debería devolver undefined*/

function findElement(arr, func) {
  let num = 0;   // inicializamos num 
  for(let i = 0; i < arr.length; i++ ){ // iteramos por cada una de las poisiciones del parametro arr 
  num = arr[i] // actualizamos num 
  if (func(num)){// establecemos num pasado a la funcion para evaluar lo que nos piden cuando la funcion sea llamada. 
  return num 
    }
  } // si no cumple requisito automaticamente nos va a dar undefined


}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));



  /*                                                      EJERCICIO NUMERO 9                                                 */

    
  /*Comprueba si el valor está clasificado como booleano primitivo. Devuelve true o false.
  Booleanos primitivos son true y false. */

  function booWho(bool) {
    return typeof bool === "boolean";  // typeof nos ayuda a ver que tipo de dato primitivo tenemos  
  } 
  console.log(booWho(true)); // true 
  
  /*                                                      EJERCICIO NUMERO 10                                                */

  
  /*Devuelve la cadena proporcionada con la primera letra de cada palabra en mayúsculas. 
Asegúrate de que el resto de la palabra esté en minúsculas.
Como propósito de este ejercicio, debes también usar mayúsculas conectando palabras como the y of. */

function titleCase(str) {
  let newArray = []  // definimos un nuevo arreglo 
  let arraySplit = str.split(" ") //convertimos el string pasado la funcion  en un array separado por comas. 
  for (let i = 0; i < arraySplit.length; i++){  //iteramos nueva posicion del array 
    newArray[i] = arraySplit[i][0].toUpperCase() + 
    arraySplit[i].slice(1).toLowerCase() /* varias cosas suceden aqui a la vez,:
                                          1) Estamos actualizando nuestro arreglo, con cada iteracion y por cada de de esta 
                                              vamos a accieder al primer indice de cada elemento del arreglo
                                          2) Lo pasamos a mayuculas <<toUpperCase()>> 
                                          3) Lo concatenamos con : 
                                                                3,1) cada iteracion con el resto de el elemnto usando slice desde el
                                                                      indice uno
                                                                3,2) El resto lo convertimos en minuscula por si hay alguna otro 
                                                                elemento que tenga una mayuscula
    */
  }
  return newArray.join(" ");// lo convertimos a string 
}

let test = titleCase("I'm a little tea pot");

console.log(test)

/*                                                      EJERCICIO NUMERO 11                                               */



/* Cortar y rebanar
Tienes dos arreglos y un índice.

Copia cada elemento del primer arreglo en el segundo arreglo, en orden.

Comienza insertando elementos en el índice n del segundo arreglo.

Devuelve el arreglo resultante. Los arreglos de entrada deben permanecer iguales luego de que se ejecute la función. */



/* Conozco dos maneras de hacerlo con estos apuntes la primera es iterar y la segunda es solo metodos
PRIMERA  */
function frankenSplice(arr1, arr2, n) {
  
  let newArray = arr2.slice(0) // extraemos / copiamos el arreglo y lo almacenamos en una nueva variable 

  for (let i = 0; i <arr1.length; i++){ //iteramos por el arreglo que tenemos que mutar 
    newArray.splice(n, 0, arr1[i]) // con splice como pirmer arguemto usamos el parametro de la funcion n, a 0  
                                    // y como tercero agregamos los indices de la iteracion 
    n++; // incrementamos n en uno asegurandonos de que cada item del arr1 se inserte dentro de  newArray en su propia 
    //posicion de item
  }
  return newArray
} 
let resultA = frankenSplice([1, 2, 3], [4, 5, 6], 1);

console.log(resultA) // [ 4, 1, 2, 3, 5, 6 ]


//SEGUNDO OPERADOR SPREAD 

function frankenSplice(arr1, arr2, n) {
  
  let newArray = arr2.slice() //iniciamos igual que en el ejemplo anterior 
  newArray.splice (n, 0, ...arr1)  // en vez de iterar copiamos directamente el arreglo con el metodo spread y lo "insertamos" 
  //en newArrat 
  return newArray 
} 
let resultad = frankenSplice([1, 2, 3], [4, 5, 6], 1); // exactamente el mismo resultado 

console.log(resultad)


/*                                                      EJERCICIO NUMERO 12                                              */


/*
Quita todos los valores falsos de un arreglo.

Los valores falsos en JavaScript son false, null, 0, "", undefined y NaN.

Sugerencia: Intenta convertir cada valor a booleano.*/

function bouncer(arr) {

  let newArr = []
  for ( let i = 0 ; i < arr.length; i++){ //iteramos 
   if (Boolean (arr[i]) ){ // convertimos todos los valores del parametro arr a boleanos 
    newArr.push(arr[i]) //  si los valores son verdaderos y no falsos los empujamos al neuvo arreglo 
   }

}
return newArr // lo retornamos  
}

console.log(bouncer([false, null, 0, NaN, undefined, ""]));
// puede ser util https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Boolean
// recordar valors " falsy " false, null, 0, "", undefined y NaN.






/*                                                      EJERCICIO NUMERO 13                                             */


/*
Dónde pertenezco
Devuelve el índice mas bajo en el que un valor (segundo argumento) debe ser insertado en un arreglo (primer argumento) 
una vez que éste haya sido ordenado. El valor devuelto debe ser un número.

Por ejemplo, getIndexToIns([1,2,3,4], 1.5) debe devolver 1 por que este valor es más grande que 1 (índice 0), 
pero menor que 2 (índice 1).

De esta forma, getIndexToIns([20,3,5], 19) debe devolver 2 porque una vez ordenado el arreglo, éste se verá así [3,5,20] 
y 19 es menor que 20 (índice 2) y mayor que 5 (índice 1). */

function getIndexToIns(arr, num) {
  let index = arr
    .sort((curr, next) => curr - next)// primero ordenamos el arreglo
    .findIndex(currNum => num <= currNum);
  return index === -1 ? arr.length : index;
}

getIndexToIns([40, 60], 500);



/*                                                      EJERCICIO NUMERO 14                                             */


/* Mutaciones
Devuelve true si la cadena de caracteres en el primer elemento del arreglo contiene todas las letras de la cadena en el segundo elemento del arreglo.

Por ejemplo, ["hello", "Hello"], debe devolver true porque todas las letras de la segunda cadena están presentes en la primera, ignorando mayúsculas o minúsculas.

Los argumentos ["hello", "hey"] deben devolver false porque la cadena hello no contiene y.

Finalmente, ["Alien", "line"], debe devolver true porque todas las letras de line están presentes en Alien.*/

function mutation([ target, test ], i = 0) {
  target = target.toLowerCase();
  test = test.toLowerCase();
  return i >= test.length
    ? true
    : !target.includes(test[i])
      ? false
      : mutation([ target, test ], i + 1);
}






/* */
/* */