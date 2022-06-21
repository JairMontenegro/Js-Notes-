/**/
/* expresiones regulares 

Sirven para encontrar buscar o remplezar texto

metodo .test() : 
        nos ayuda a encontrar un patron que le pasamos mediante una cadena al metodo.  Ejemplo 
        queremos encontrar la plabra learlning en la variable myString. 
        nota: (debemos usar los slash /expresion/) 
        nota 2 : recordemos el Case sensitive en las expresiones regulares tambien debemos respetarlo
        ya que no es lo mismo, siguiendo este ejemlo:  Learning, LEARNING, lEaRning  */
        
        let myString = "Jair is learning react"
        let myRegex =  /learning/ 
        let result = myString.test(myRegex)
/*
aqui encontramos la palabra learning dentro del string DEVOLVIENDO TRUE
*/

/* | ENCONTRAR VARIAS POSIBILIDADES  USANDO EL OPERDOR OR | 

si en una expresion necesitamos encontrar distitnas posibilidades las podemos encontrar con el operador or (|)
en el mismo ejemplo 

*/

        let myStringOr = "Jair is learning react"
        let myRegexOr =  /learning|react/ 
        let resultOr = myString.test(myRegex)

/*IGNORAR CAPITALIZACION CON LA BANDERA (I) FLAG(I) 

si queremos encontrar en nuestra exp una palabra sin importar si esta con mayuscula o minuscula podemos usar la flag i
sigamos con el ejemplo y le agregaremos mas palabras, 
*/

        let myStringFlag = "Jair is Learning REACT para Conseguir TRABAJO "
        let myRegexFLag =  /learning|react|conseguir|trabajo/i
        let resultFlag = myString.test(myRegex)
        /*todas devolveran true*/

/**/
/*METODO .MATCH ()
se diferencia entre el .test() en que ya no devuelve true sino la plabra que buscamos coincidir ejemplo 
*/

        let myStringMatch = "Jair is Learning REACT para Conseguir TRABAJO "
        let myRegexMatch =  /conseguir/i
        let resulMatch = myString.match(myRegex); 
        /*Nos devolvera por consola el  ["conseguir"]*/


/* BANDERA G o FLAG G 
Nos permite buscar o extraer un patron que se repite mas de una vez su uso es igual al flag i*/

        let myStringFlagG = "Jair is Learning REACT para Conseguir TRABAJO, ya sea trabajo front end, trabajo como back pero no trabajo como testing"
        let myRegexFLagG =  /ltrabajo/gi // recuerdar el camel sensitive por eso esta la flag i ahi tambien. 
        let resultFlagG = myString.match(myRegex)
        /*en consola nos va a mostrar ["trabajo", "trabajo", "trabajo", "trabajo"]*/

/*COMODIN DE PUNTO (DOT WILDCARD)

sirve para especificar un grupo de caracteres a concidir ejemplo
*/

        let simpleString =  "Let's have fun with regular expressions!"
        let regexDot = ".un"
        let resultDot = regexDot.test(simpleString)
        
/*coincidira con las palbras que tengan la misma estructura despues del punto  es decir (run, sun, fun, pun, nun, y bun) 
pst (tambien se puede usar al final)*/

/**/
/* HACER COINCIDIR UN CARACTER EN ESTE CASO PALABRA CON MUCHAS POSIBILIDADES 

podemos hacer esto usando clases de caracteres, que permitien definir un grupo de caracteres que queremos coincidir
colocandolos dentro de corchetes []*/

        let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
        let vowelRegex = /[aeiou]/gi;
        let result2 = quoteSample.match(vowelRegex); 

/*Nos buscara todas las vocales que hay en el string y las coincidira */


/**/
/*  COINCIDIR CON UN RANGO
Para hacer coincidir un rango amplio de caracteres, lo que debemos hacer es usar el guion -

EJEMPLO 
Queremos hacer coincidir todas las letras del abecedario en un string.  
usando el mismo ejemplo de arriba, lo hariamos de la siguiente manera. 
*/


let quoteSample2 = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex2 = /[a-z]/gi; //recordar camel sensitive y las veces que se repie, como vemos usamos un rango 
let result3 = quoteSample.match(vowelRegex); 

/*por consola nos devolvera un arreglo con todas las letras por separado.*/

/*El - para hacer coincidir un rango no solo se limita a las letras, tambien podemos hacer coincidir un rango de numeros
EJEMPLO:       
        vamos a crear una sola expresión regular que coincida con un rango de letras entre h y s, 
        y un rango de números entre 2 y 6.
*/
        let quoteSample3 = "Blueberry 3.141592653s are delicious.";
        let myRegex3 = /[h-s2-6]/gi;
        let result4 = quoteSample.match(myRegex);
        console.log(result4)

/*Nos mostrara por consola el siguiente arreglo [ 'l','r','r','3','4','5','2','6','5','3','s','r','l','i','i','o','s' ]*/

/*CARACTEES QUE NO QUEREMOS COINCIDIR (^) */
/*Podemos usar (^) para crear un cojunto de caracteres que no coincidan con los que le pasemos con ese caracter de intercalacion 
EJEMPLO : 
Crearemos una sola expresión regular que coincida con todos los caracteres que no son un número o una vocal. 
*/ 
        let quoteSample4 = "3 blind mice.";
        let myRegex4 = /[^aeiou3]/gi; 
        let result5 = quoteSample.match(myRegex); 
        console.log(result5)     

/*Como podemos estamos anteponiendo el caracter de interalacion al principio del rango de caracteres que no queremos coincidir, 
teniendo por resultado en la cosola que se muestre el sigueinte arreglo  [ ' ', 'b', 'l', 'n', 'd', ' ', 'm', 'c', '.' ]  */


/*COINCIDIR CARACTERES QUE APARECEN UNA O MAS VECES. */

/*A veces necesitarmoes hacer coincidir caracteres que estan seguidos y esto es posible gracias al caracter (+)
cabe resaltar que el caracter que queremos hacer coincidir debe estar presente consecutivamente. 
abc regex = /a+/g  encontraria una sola vez a y devolveria por consola ["a"]
aabc regex = /a+/g  encontraria una sola vez a y devolveria por consola ["aa"]
pero en 
abac regex = /a+/g  encontraria dos veces a y devolveria por consola ["a","a"] porque hay un caracter en medio de ellos 
*/

/*COINCIDIR CARACTERES QUE APARECEN  0 O MAS VECES. */
/*De la misma forma que vimmos atenriormente podemos hacer coincidir caracteres que apareezcan 0 o mas veces usando ahora el 
caracter  (*). Ejemplo de esto Aaaaaaaaarrrrg usaremos la regex siguiente: 
regex =  /*Aa/ pñor consola saldra [ 'Aaaaaaaaaaaaaaaa',]
*/

/*EXPRESIONES REGULARES CODICIOSAS  Y PEREZOSAS GRADY  LAZY  caracter.(?)  */

/*como primera medida tenemos que aclarar que las expresiones regulares por DEFECTO son GREDY CODICIOSAS.

¿Que quiere decir que sea codiciosa? 
Que encuentra o coincide la parte mas larga posible de un string que se ajusta al patron de la expresion regular y 
lo retorna como una coincidencia. 
Usaremos un ejemplo para entenderlo un poco mejor :

Corregir la expresión regular /<.*>/ para que devuelva la etiqueta HTML <h1> y no el texto "<h1>Winter is coming</h1>". 
(recuerda el wild dot linea 61)*/

        let text = "<h1>Winter is coming</h1>";
        let yRegex = /<h.*?>/; 
        let resulta = text.match(yRegex);
        console.log(resulta)
/* efectivamente la consola nos retornara solo <hi> 

/*USANDO EL CARACTER ^ (caret) FUERA DE UN RANGO O CONJUNTO linea 114 */
/*

De este modo lo podemos usar para comporbar o buscar patrones al principio de una cadena. 
ejemplo 
Usaremos  el carácter caret en una expresión para buscar Cal solo al principio de la cadena rickyAndCal.

*/
/**/

