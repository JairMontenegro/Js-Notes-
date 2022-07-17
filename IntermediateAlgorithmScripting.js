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
*/
function spinalCase(str) {
  let camelCaptureGroup = str.replace(/([a-z])([A-Z])/g, "$1 $2") // grupos de captura 
  let spaceAndDashes = camelCaptureGroup.replace(/\s/g, "-")  
  let spinalCase = spaceAndDashes.toLowerCase()
  return spinalCase
}

console.log(spinalCase('This Is Spinal Tap'));

/**/
/**/
/**/
/**/
/**/
/**/
