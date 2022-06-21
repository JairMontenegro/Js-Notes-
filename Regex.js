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
/*coIncidira con las palbras que tengan la misma estructura despues del punto  es decir (run, sun, fun, pun, nun, y bun) 
pst (tambien se puede usar al final)*/

/**/
/* HACER COINCIDIR UN CARACTER EN ESTE CASO PALABRA CON MUCHAS POSIBILIDADES 

podemos hacer esto usando clases de caracteres, que permitien definir un grupo de caracteres que queremos coincidir
colocandolos dentro de corchetes []*/

        let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
        let vowelRegex = /[aeiou]/gi;
        let result2 = quoteSample.match(vowelRegex); 
/*Nos buscara todas las vocales que hay en el string y las coincidira */




/*  COINCIDIR CON UN RANGO
Para hacer coincidir un rango amplio de caracteres, lo que debemos hacer es usar el guion -

EJEMPLO 
Queremos hacer coincidir todas las letras del abecedario en un string.  
usando el mismo ejemplo de arriba, lo hariamos de la siguiente manera. 
*/


let quoteSample2 = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex2 = /[a-z]/gi; //recordar camel sensitive y las veces que se repie, como vemos usamos un rango 
let result3 = quoteSample.match(vowelRegex); 

