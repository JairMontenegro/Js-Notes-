/*                                                      ESTRUCTURAS DE DATOS                                                 */

https://codeburst.io/javascript-passing-by-value-vs-reference-explained-in-plain-english-8d00fd06a47c

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
        -Los primeros dos parametros representan :  SE PUEDE DECIR QUE EXTRAE
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
        
        /*Cabe resaltar que con el operador de propagacion podemos insertar todos los elementos de un arreglo en cualquier lugar 
        arreglo ejemplo.
        Hemos definido una función spreadOut que devuelve la variable sentence. Modifica la función usando el operador de propagación 
        para que devuelva el arreglo ['learning', 'to', 'code', 'is', 'fun'].
      */
        function spreadOut() {
                let fragment = ['to', 'code'];
                let sentence =  ['learning', ...fragment, 'is', 'fun']; 
                return sentence;
        }
        console.log(spreadOut()); // Nos mostrara por la consola. [ 'learning', 'to', 'code', 'is', 'fun' ]. 


        /*                                              indexOF                                                         */

        /* Ya que los arreglos son mutables, no se puede garantizar donde estara un dato en concreto en un arreglo determinado 
        o si ese arreglo sigue exsitiendo.
        para comprobar rapida y facilmente todas estas cosas existe   INDEXOF().
        
        CARACTERISTICAS: 
                        -Toma un elemento como parametro y cuando lo llama devuelve el indice donde se encuentra
                        -Devuelve -1 si el elemento no existe en el arreglo
        EJEMPLO 
        Hemos definido una función, quickCheck, que toma un arreglo y un elemento como argumentos. 
        Modifica la función usando indexOf() para que devuelva true si el elemento pasado existe en el arreglo,
        y false si no existe.*/
        
        function quickCheck(arr, elem) {
                return (arr.indexOf(elem) >= 0 ? true : false)
                }
                console.log(quickCheck(['squash', 'onions', 'shallots'], 'squash')); // nos devolvera una true puesto que esta 
                // en el indice 0 lo cual es igual a nuestra condicion, si fuese - 1 nos mostraria false, y aqui estoy usando 
                // "Conditional Ternary"



                /*              REPASO DEL BUCLE FOR PARA ITERAR POR ARREGLOS                     */

/*Hemos definido una función, filteredArray, que toma arr, un arreglo anidado, y elem como argumentos, y devuelve un nuevo arreglo.
elem representa un elemento que puede o no estar presente en uno o más de los arreglos anidados dentro de arr. 
Modifica la función, usando un bucle for, para que devuelva una versión filtrada del 
arreglo pasado de forma que cualquier arreglo anidado dentro de arr que contenga elem haya sido eliminado. */



        //EJEMPLO 
        function filteredArray(arr, elem) {
                let newArr = [];
                for (let i = 0; i < arr.length; i++) { //estamos iterando por cada uno de los indices de arr uno en uno 
                if (arr[i].indexOf(elem) == -1) { // comprobamos la existencia de elem con indexOf (linea 146) 
                newArr.push(arr[i]);  // si el numero existe vamos a actualizar newArr incorperando ese sub arr 
                }
        }
                return newArr
        } 
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)); // mostraria un arreglo vacio ya que todos tienen 3



/* REPASAR OBJETOS CLAVE VALOR  COMO ACCEDER CON DOT NOTATION O BRAKET NOTATION Y COMPROBAR SI EXISTEN CLAVES EN UN OBJETO*/

/*                                      ITERAR A TRAVES DE LAS CLAVES DE UN OBJETO CON  FOR IN                          */



/*  Se puede hacer con for in             
                                -Una caracteristica importante es que los objetos NO MANTIENEN UN ORDEN para las claves como lo hacen 
                                los arreglos. La posicion de una clave o el orden en que aparece es irrelevante cuando se accede a ella. 

        for (let <<declara variable>> in << nombre del objeto>>) {// iterara por cada clave del objeto 
                y aqui el codigo que queremos ejectuar para cada iteracion 
        }

        EJEMPLO 
        Hemos definido una función countOnline que acepta un argumento (usersObj).
        Utiliza una sentencia for...in dentro de esta función para iterar sobre el objeto usuarios
        (users) pasado a la función y devuelve el número de usuarios cuya propiedad online esté establecida 
        como true. A continuación se muestra un ejemplo de un objeto usuario que podría pasarse a countOnline.
        Cada usuario tendrá una propiedad online con un valor true o false.


*/
const users = {
        Alan: {
                online: false
        },
        Jeff: {
                online: true
        },
        Sarah: {
                online: false
        }
}
                function countOnline(usersObj) {
                let result = 0 // declaramos e inicializamos una variable en 0 
                for (let user in usersObj){  // iteramos a traves del objeto con for in 
                if(usersObj[user]["online"] === true){  // el parametro pasado la funcion, coincide con un nombre de la variable user
                        // y a su vez este user tiene como valor en la clave online en true. 
                result++; // vamos a actualizar la variable result por cada vez que esto suceda. 
                }
                }
                return result // retornamos esa nueva variable modificada y  en este caso nos daria 1 que seria yeff 
                }
                console.log(countOnline(users));


/*                                              Object.keys()                                                                 */




/*Con este metodo podemos obtener todos las claves almacenandas en un objeto pasandolo como parametro y nos las va a devolver
en  un arreglo  de cadenas que representan cada propiedad del objeto.  
                EJEMPLO MY FISH. 
Termina de escribir la función getArrayOfUsers para que devuelva un arreglo que contenga todas 
las propiedades del objeto que recibe como argumento.
*/

        let users2 = { // SE EXPLICA POR SI SOLO. 
        Alan: {
                age: 27,
                online: false
        },
        Jeff: {
                age: 32,
                online: true
        },
        Sarah: {
                age: 48,
                online: false
        },
        Ryan: {
                age: 19,
                online: true
        }
        };
                        function getArrayOfUsers(obj) {
                        }
                console.log(getArrayOfUsers(users2)); //[ 'Alan', 'Jeff', 'Sarah', 'Ryan' ]

        /* EJERCICIO DE ESTRUCTURA DE DATOS */

        /*Hecha un vistazo al objeto que hemos proporcionado abajo. El objeto user contiene tres claves. 
        La clave data contiene cinco claves, una de las cuales contiene un arreglo de friends. A partir de esto, 
        puedes ver lo flexibles que son los objetos como estructuras de datos. Hemos empezado a escribir una función addFriend. T
        ermina de escribirla para que tome un objeto user y agregue el nombre del argumento friend al arreglo 
        almacenado en user.data.friends y devuelva ese arreglo. */

        let user = {
                name: 'Kenneth',
                age: 28,
                data: {
                username: 'kennethCodesAllDay',
                joinDate: 'March 26, 2016',
                organization: 'freeCodeCamp',
                friends: [
                        'Sam',
                        'Kira',
                        'Tomo'
                        ],
                        location: {
                        city: 'San Francisco',
                        state: 'CA',
                        country: 'USA'
                        }
                }
        };
                function addFriend(userObj, friend) {
                userObj["data"]["friends"].push(friend)
                return userObj["data"]["friends"] 
                }
                console.log(addFriend(user, 'Pete'));


                /* */


/* */
/* */