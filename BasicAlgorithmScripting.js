/*   16 EJERCICIOS EXPLICADOS DE PROGRAMACION DE ALGORITMOS BASICOS                         */




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





/* */
/* */
/* */
/* */