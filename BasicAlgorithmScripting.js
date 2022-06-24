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
/* */
/* */
