                            /*   16 EJERCICIOS EXPLICADOS DE PROGRAMACION DE ALGORITMOS BASICOS                         */


                            

/* Convierte Celsius a Fahrenheit
La fórmula para convertir de Celsius a Fahrenheit es la temperatura en Celsius multiplicado por 9/5, más 32.

Se te da una variable celsius que representa una temperatura en Celsius. Utiliza la variable fahrenheit ya definida
y asígnale la temperatura Fahrenheit equivalente a la temperatura Celsius dada. Utiliza la fórmula mencionada anteriormente
para ayudarte a convertir la temperatura Celsius a Fahrenheit.*/

        function convertToF(celsius) {
            let fahrenheit = celsius * 9/5 + 32;
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
    return  str.split('').reverse().join("");
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
    if (num <= 1){  // caso base basicamente le estamos diciendo que cuando el factor llegue a 1 pues retorene uno. 
        return 1 
    } else {
      return factorialize(num - 1) * num //aqui estamos llamando a la funcion de nuevo en si misma a esto se le conoce como recursividad.
                                        //  donde numde l esta siendo multiplicado por n -1 
    }
    }
  let factor = factorialize(5); // esto dara 120 
console.log(factor)


/*                                                      EJERCICIO NUMERO 3                                                 */



/* */
/* */
/* */