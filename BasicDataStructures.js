/*                                                      ESTRUCTURAS DE DATOS                                                 */


/*La implementacion mas basica de una estructura de datos es un arreglo con valores adentro sin otros arreglos anidados dentro de si. A esto se le conoce como arreglos unidimesionales es decr que solo tiene un nivel. */
let simpleArray = ['one', 2, 'three', true, false, undefined, null];

/*Una implementacion mas compleja de un arreglo se le conoce como muldidimensional (arreglos o objetos anidados dentro de un arreglo) */

let complexArray = [
[
        {
        one: 1,
        two: 2
                },
        {
        three: 3,
        four: 4
                }
        ],
        [
        {
        a: "a",
        b: "b"
                },
        {
        c: "c",
        d: "d"
                }
]
];// Un arreglo con dos arreglos anidados y en cada arreglo dos objetos anidados 


/*                                                              REPASO                                                  */

/*
1) Como ya sabemos todos los arreglos tienen una propiedad de longitud. Su sintaxys es Array.length

2) Tambien recordemos que para ingresar al contenido de un arreglo usamos corchetes con indice en base 0 y asi mismo con ese indice 
   se puede modificar valores dentro del arreglo.

3) Array.push() y Array.unshift() primero: los arreglos son mutables, segundo la expresion .push() nos permite agregar/empujar un
    valor al FINAL de un arreglo. 
    .unshift() por el contrario nos permite agregarlo, al pirncipio del arreglo 

4) Array.pop() y Array.shift() Evidentemente son todo lo contrario, es decir, eliminan un valor al final y al principio de un     
    arreglo respectivamente. Diferencia clave, ninguno de estos acepta parametros. Ademas algo SUMAMENTE IMPORTANTE es que estos nos
    devuelven el valor de lo que eliminamos, por ejemplo si lo asignasemos a una variable. 
*/



/* 
Array.splice(). 


CARACTERISTICAS 
        -Toma hasta tres parametros enteros (int).
        -Los primeros dos parametros representan : 
                                                el primero el indice donde queremos comenzar a eliminar elementos. 
                                                el segundo el numero de elementos a eliminar. 
        -IMPORTANTE No solo los elimina sino tambien los devuelve en un nuevo arreglo que va a contener los valores eliminados
                        POR EJEMPLO : 
*/

// Hemos inicializado un arreglo arr. Usa splice() para eliminar elementos de arr, de forma que sólo contenga elementos que sumen el valor de 10.

                const arr = [2, 4, 5, 1, 7, 5, 2, 1];
                let deleted = arr.splice( 1 , 4)
                console.log(arr); // La consola nos mostrara los valores [ 2, 5, 2, 1 ] (la cual su suma da 10)
                console.log(deleted);//Como lo almacenamos en una variable nos mostrara los valores que se eliminaron del arreglo
                //[ 4, 5, 1, 7 ]

/*       - El tercer parametro que .splice() recibe sirve para agregar uno o varios elementos al arreglo. 
        la syntaxis seria de la sigueinte manera  .splice(indiceComienzo, numeroDePosicionesBorrar, lo, que, queramos, agregar)
        EJEMPLO:
*/           //   Hemos definido una función, htmlColorNames, que toma un arreglo de colores HTML como argumento. Modifica la función usando splice() para eliminar los dos primeros elementos del arreglo y agrega 'DarkSalmon' y 'BlanchedAlmond' en sus respectivos lugares. 
function htmlColorNames(arr) {
        let result =  arr.splice(0,2,'DarkSalmon','BlanchedAlmond')
        console.log(result)// nos mostratria la el arreglo con las dos eliminaciones ['DarkGoldenRod', 'WhiteSmoke']
        return arr;
        }
        console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
        // el resultado de esto por consola seria [ 'DarkSalmon','BlanchedAlmond','LavenderBlush','PaleTurquoise','FireBrick' ]


/* Array.slice(). 

En lugar de modificar un arreglo, extrae/copia  un numero indeterminado de elementos dejando intacto el arreglo al que llama. 

CARACTERISTICAS. 

                -Toma dos parametros. 
                                - En el primero indicamos el elemento de inicio que queremos copiar/extraer. 
                                - En el segundo  parametro, es donde se deteiene la extracion SIN INCLUIR EL ELEMENTO DE ESE INDICE.
        EJEMPLO: 
        Hemos definido una función, forecast, que toma un arreglo como argumento. Modifica la función usando slice() para extraer información del arreglo de argumentos
        y devuelve un nuevo arreglo que contenga los elementos warm y sunny.*/
        function forecast(arr) {
                // Cambia solo el código debajo de esta línea
        let newArray = arr.slice(2 , 4 )
                return newArray;
        }
        
        // Cambia solo el código encima de esta línea
        console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

/*NOTA IMPORTANTE 

        Gracias a Es6 podemos copiar un arreglo con una sintaxys mas sencilla, con el operador spread (...) un ejemplo de esto 
        con el mismo anterior seria asi 
*/
        let forecast1 = ['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']
        let newArray = [...forecast1] // y la consola nos mostraria la copia del arreglo 

        // EJEMPLO DOS SPREAD OPERATOR
/* 
        Hemos definido una función, copyMachine que toma arr (un arreglo) y num (un número) 
        como argumentos.  Se supone que la función devuelve un nuevo arreglo compuesto por 
        num copias de arr. Hemos hecho la mayor parte del trabajo por ti, pero aún no funciona 
        del todo bien. Modifica la función usando sintaxis de propagación para que funcione 
        correctamente
*/      function copyMachine(arr, num) {
        let newArr = [];
        while (num >= 1) {
        newArr.push([...arr]) // estamos empujando por cada iteracion del bucle while la cantidad de veces el parametro arr 
                // pasado por el parametro num. 
        num--;
        }
        return newArr;
      }
      
      console.log(copyMachine([true, false, true],2));



/* */
/* */