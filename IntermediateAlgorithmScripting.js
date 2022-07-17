/*                                                      SUMA TODOS LOS NUMEROS EN UN RANGO 

Te pasaremos un arreglo de dos números. Devuelve la suma de estos dos números más la suma de todos los números entre ellos. El número más 
bajo no siempre será el primero.

Por ejemplo, sumAll([4,1])> debe devolver 10 porque la suma de todos los números entre 1 y 4 (ambos incluidos) es 10.

*/


function sumAll(arr) { // primero tenemos que averiguar que numero es menor y que numero  es mayor
    let  min = Math.min(...arr) // spread operator 
    let  max = Math.max(...arr)
    let result = 0 
  for (let i = min ; i <= max ; i++){   // iteramos para que nos de todas las posiciones entre  el numero minmo y maximo 
    result += i  // le sumamos el resultado de la iteracion a la variable result 
  }
  return result    
  }
  
  console.log(sumAll([1, 4]));




/*                                                         EJERCICIO 2 DIFERENCIA ENTRE DOS ARREGLOS

Diferencia entre dos arreglos
Compara dos arreglos y devuelve un nuevo arreglo con los elementos que sólo se encuentran en uno de los dos arreglos dados, 
ero no en ambos. En otras palabras, devuelve la diferencia simétrica de los dos arreglos.

*/
function diffArray(arr1, arr2) { 
    const newArr = [];
    for(let i = 0; i < arr1.length ; i++){ // iteramos en cada arreglo 
    if (arr2.indexOf(arr1[i]) === -1){ //recordar indexOf functional programing  (linea 146 ) 
        newArr.push(arr1[i]) // si en cada itracion del primer arreglo tiene el mismo elemento en el segundo arreglo
    }// lo añadimos a newArr 
    }
    for(let j = 0; j < arr2.length; j++){ //exactamente lo mismo pero a la inversa.
    if(arr1.indexOf(arr2[j]) === -1){
        newArr.push(arr2[j])
    }
    }
    return newArr;
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); // [4]

// refactorizando 
// https://www.w3schools.com/jsref/jsref_foreach.asp es un metodo que llama a una funcion para cada elemento de un array 

function diffArray(arr1, arr2) {
    const newArr = [];
    const compareArrays = (firstArr , secondArr) => {
    firstArr.forEach(num => {
      if(secondArr.indexOf(num) ===  -1 ){ // es la misma logica solo no debemos olvidar llamar a las funciones
        newArr.push(num)
      }
    })
    }
  compareArrays(arr1 ,arr2)
  compareArrays(arr2 ,arr1)
   return newArr;
  }
  
  console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], 
  ["diorite", "andesite", "grass", "dirt", "dead shrub"])); //[ 'pink wool' ]


/*                                                      EJERCICIO 3  BUSCA Y DESTRUYE       

Se proporcionará un arreglo inicial (el primer argumento en la función destroyer), seguido de uno o más argumentos. 
Elimina todos los elementos del arreglo inicial que tengan el mismo valor que estos argumentos.

Nota: Tienes que utilizar el objeto arguments.


nunca habia usado este objeto arguments asi que intentare explicarme, como se hace.  
Object.values(arguments) // nos muestra por consola los argumentos y el indice 
en este caso tedriamos que acceder al indice [0] que es el primer argumento y de esa manera los siguentes.

 */


function destroyer(arr) {
    let surviving = [] 
    let battleField = Object.values(arguments)[0] // aqui estamos accediendo al argumento  [1, 2, 3, 1, 2, 3]
    let destroyElements = Object.values(arguments).slice(1) // aqui estamos accediendo  2, 3 
    //recordar que si a slice se le pasa un solo argumento copia los elementos desde ese indice en adelante
    for( let i = 0 ; i < battleField.length; i++){ 
        if(destroyElements.indexOf(battleField[i]) === -1 ){//  basicamente igual que en el ejercicio anterior.
        surviving.push(battleField[i]) 
    }
    }    
    return surviving ;
}
        
    
    console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));  // [1,1]

// COMO ES BASTANTE PARECIDO AL EJERCICIO ANTERIOR TAMBIEN PODEMOS USAR FOR EACH PARA REFACTORIZARLO Y DEJARLO MAS NINDO

function destroyer(arr) {
    let surviving = []
    let battleField = Object.values(arguments)[0]
    let destroyElements = Object.values(arguments).slice(1)
    
    battleField.forEach(war => {
      if(destroyElements.indexOf(war) === -1) surviving.push(war)
    })
    return surviving;
  }
  
  console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")); // [ 12, 92, 65 ] 
  


/*                                                      EJERCICIO 4  DONDE ESTAS      



Crea una función que busque a través de un arreglo de objetos (primer argumento) y devuelva un arreglo de todos los objetos que tengan 
pares de nombre y valor coincidentes (segundo argumento). Cada par de nombre y valor del objeto fuente tiene que estar presente en el 
objeto de la colección si se va a incluir en el arreglo devuelto.

*/

function whatIsInAName(collection, source) {
    let getKey = Object.keys(source)
  
    return collection.filter(find =>{
    return getKey.every(key => find.hasOwnProperty(key)&& find[key] === source[key]) 
     });
    }  




/*                                                      EJERCICIO 5 Spinal case   


Convierte una cadena a spinal case. Spinal case significa todas-las-palabras-en-minúscula-unidas-por-guiones.
ejercicio de regex 
PAGINA UTIL https://regex101.com/
*/
function spinalCase(str) {
  let camelCaptureGroup = str.replace(/([a-z])([A-Z])/g, "$1 $2") // grupos de captura  regex.js linea 312 
  let spaceAndDashes = camelCaptureGroup.replace(/\s|_/g, "-")  // agrupaciones mixtas regex.js linea 295
  let spinalCase = spaceAndDashes.toLowerCase()
  return spinalCase
}

console.log(spinalCase('This Is Spinal Tap'));

/*                                                      EJERCICIO 6 Spinal case   

Pig Latin (Latin de los cerdos)
Pig Latin (latin de los cerdos) es una manera de alterar las palabras en inglés. Las normas son las siguientes:

- Si una palabra comienza con una consonante, toma la primer consonante o grupo de consonantes, muévela al final de la palabra, y añade ay a ella.

- Si una palabra comienza con una vocal, solo añade way al fina
*/


function translatePigLatin(str) {
  return str.replace(/^[aeiou]\w*/, "$&way") 
  .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
   
 }
 
 translatePigLatin("consonant");






  /*                                                      EJERCICIO 7 BUSCA Y REEMPLAZA   

  Busca y reemplaza

  Realiza una búsqueda y reemplaza en la oración usando los argumentos proporcionados y devuelve la nueva oración.

  El primer argumento es la frase sobre la que se va a realizar la búsqueda y el reemplazo.

  El segundo argumento es la palabra que se reemplazará (antes).

  El tercer argumento es lo que reemplazará el segundo argumento (después).

  Note: Mantén la capitalización del primer carácter en la palabra original cuando lo estés reemplazando. Por ejemplo,
  si quieres reemplazar la palabra Book por la palabra dog, debe ser reemplazada como Dog
  */
  function myReplace(str, before, after) { // por mas que se ve horrible  no lo es cuando se esta empezando .
    let convert = str.split(" ") // convertimos en un arreglo de strings 

    for (let i = 0 ; i < convert.length; i++){ //  iteramos entre el arreglo de string para buscar el indice del elemento pasado como argumento before 
      if(convert[i]=== before ){// si el indice de la iteracion igual before y cumple con as siguientes condiciones. 
        if(after[0] === after[0].toUpperCase()){ // si after en el indice 0 tiene una letra mayusiula 
          after = after[0].toLowerCase() + after.slice(1) //la va a convertir en minuscula concatenandolo con el resto de la cadena 
        } if(convert[i][0] === convert[i][0].toUpperCase()){ // si el elemento a convertir en el indice 0 tiene una mayuscula 
          after = after[0].toUpperCase() + after.slice(1) // el elemento after ingresara a nuestro arreglo con letra mayusucula 
        }
        convert[i] = after // y si se cumplen todas estas condiciones lo que haremos es decir que nuestra palabra encontrada sera igual a after. 
      }
    } 
    return convert.join(" ")  // volvemos otravez un string 
    }
    
    console.log (myReplace("I think we should look up there", "up", "Down"));  // I think we should look down there



/*                                                      EJERCICIO 8 EMPAREJAMEINTO DE ADN

Los pares de las cadenas de ADN consisten en pares de base de proteínas. Los pares de base son representados por los caracteres
AT y CG, que forman bloques de doble hélix ADN.

A la cadena de ADN le falta el elemento de emparejamiento. Escribe una función que coincida con los pares de base faltantes 
para la hebra de ADN proporcionada.
Para cada carácter de la cadena proporcionada, encuentra el carácter de par base. Devuelve los resultados como un arreglo 2d.

Por ejemplo, la entrada GCG, devuelve [["G", "C"], ["C","G"], ["G", "C"]]

El carácter y su par se emparejan en un arreglo, y todos los arreglos se agrupan en un arreglo encapsulado.


*/
function pairElement(str) {
  let pairOfBase = { // yo lo simplifique con un objeto que tenga todas las posibles combinaciones, tambien se podria hacer una sentencia switch 
    // tambien se podria hacer una funcion aparte, lleno de sentencias if, para mi este fue el camino mas simple. 
    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C"
  }

  let toArray = str.split("") // convertimos 

  return toArray.map(pair => [pair, pairOfBase[pair]]) // mapeamos para que cada elemento dentro del array nos devuelve el elemento mas su par definido en el
  //objeto

  }
console.log(pairElement("GCG")) //[ [ 'G', 'C' ], [ 'C', 'G' ], [ 'G', 'C' ] ]


/*                                                         EJERCICIO 9 LETRAS FALTANTES


Encuentra la letra que falta en la siguiente cadena de letras y devuélvela.

Si todas las letras están presentes en la cadena, devuelve undefined.

*/
function fearNotLetter(str) {
  let abc = "abcdefghijklmnopqrstuvwxyz" ; 
  let startPosition = abc.indexOf(str[0])
  for(let i = startPosition; i < startPosition + str.length ; i ++){
    if(abc[i] != str[i-startPosition]){
      return abc[i]
    }
  }
}

console.log(fearNotLetter("stvwx")); // u






/*                                                         EJERCICIO 10 Unión ordenada

Escribe una función que tome dos o más arreglos y devuelve un nuevo arreglo de valores únicos manteniendo el orden original de los arreglos proporcionados.

En otras palabras, todos los valores presentes de todos los arreglos deben incluirse en su orden original, pero sin duplicados en el arreglo final.

Los números únicos deben ser ordenados según su orden original, pero el arreglo final no debe ordenarse según el orden numérico.

Revisa las pruebas de afirmación para ver ejemplos.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments necesario 



*/

function uniteUnique(arr) {
  let args = [...arguments]
    let newArray = []
  for(let i = 0; i < args.length; i++){
    for(let j = 0; j <args[i].length ;j++){
      newArray.push(args[i][j])
    }
  }

let filtered = newArray.filter((item, index) =>{
  return newArray.indexOf(item) === index
})

return filtered;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));


/*                                                         EJERCICIO 11 CONVIERTE ENTIDADES HTML 

Convierte entidades HTML
Convierte los caracteres &, <, >, " (dobles comillas), y ' (apóstrofo), en un cadena con su correspondiente entidad HTML.


*/
function convertHTML(str) {
  let getArray = str.split("");
  
  for (let i = 0; i < getArray.length; i++) {
    switch (getArray[i]) {
      case "<":
   getArray[i]= "&lt;";
        break;
      case "&":
      getArray[i]= "&amp;";
        break;
      case ">":
        getArray[i]= "&gt;";
        break;
      case '"':
        getArray[i] = "&quot;";
        break;
      case "'":
        getArray[i] = "&apos;";
        break;
    }
  }

   
  return getArray.join("");
}


console.log(convertHTML("Dolce & Gabbana"));



/*                                  EJERCICIO 12 SUMA TODOS LOS NUMEROS IMPARES DE FIBONACCI 

Dado un entero positivo num, devuelve la suma de todos los números impares de Fibonacci que son menores o iguales a num.

Los dos primeros números en la secuencia de Fibonacci son 1 y 1. Cada número adicional en la secuencia es la suma de los dos 
números anteriores. Los seis primeros números de la secuencia de Fibonacci son 1, 1, 2, 3, 5 y 8.

Por ejemplo, sumFibs(10) debe devolver 10 porque todos los números impares de Fibonacci menores o iguales a 10 son 1, 1, 3 y 5.

*/
function sumFibs(num) {
  let firstToValues = [0,1]
  let addOdd = 1
  let counter = firstToValues[firstToValues.length - 2] +
                firstToValues[firstToValues.length -1]
  
  while(counter <= num){
    firstToValues.push(counter)
    if(counter % 2 !== 0){addOdd += counter}
  
    counter = firstToValues[firstToValues.length - 2] +
              firstToValues[firstToValues.length -1]
  }          
  
  return addOdd
  }
  console.log(sumFibs(75025));




/*                                        EJERCICIO 13  Suma todos los números primo
Suma todos los números primos
Un número primo es un número entero mayor que 1 con sólo dos divisores: 1 y el propio número. 
Por ejemplo, 2 es un número primo porque sólo es divisible entre 1 y 2. Por el contrario, 4 no es primo ya que
es divisible entre 1, 2 y 4.

Reescribe sumPrimes para que devuelva la suma de todos los números primos que sean menores o iguales a num.


*/
function sumPrimes(num) {
  const isPrime = num => {
   if (num == 0 || num == 1 || num == 4) return false;
   for (let i = 2; i < num / 2; i++) {
     if (num % i == 0) return false;
   }
   return true;
 }
 
   let sum = 0;
   for (let i = 2; i <= num; i++) {
     if (isPrime(i))
       sum += i;
   }
   return sum;
 }
 
 
 console.log(sumPrimes(10));// 17 
/**/
/**/
/**/
