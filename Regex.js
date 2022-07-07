/*ESTA PAGINA TE AYUDA A ENTENDER UNA REGEX Y TAMBIEN TE AYUDA A TESTEARLA https://regexr.com/5b2o7 */  
/* EXPRESIONES REGUALARES 

Sirven para encontrar, buscar, coincidir o remplezar texto

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

        let myStringFlag = "Jair is Learning REACT para Conseguir TRABAJO " // spanglish my bro 
        let myRegexFLag =  /learning|react|conseguir|trabajo/i
        let resultFlag = myString.test(myRegex)
        /*todas devolveran true*/

/**/
/*METODO .MATCH ()
se diferencia entre el .test() en que ya no devuelve true sino la plabra que buscamos coincidir ejemplo 
*/

        let myStringMatch = "Jair is Learning REACT para Conseguir TRABAJO " // spanglish my bro 
        let myRegexMatch =  /conseguir/i
        let resulMatch = myString.match(myRegex); 
        /*Nos devolvera por consola el  ["conseguir"]*/


/* BANDERA G o FLAG (G) 
Nos permite buscar o extraer un patron que se repite mas de una vez su uso es igual al flag i*/

        let myStringFlagG = "Jair is Learning REACT para Conseguir TRABAJO, ya sea trabajo front end, trabajo como back pero no trabajo como testing"
        let myRegexFLagG =  /ltrabajo/gi // recordar el camel sensitive por eso esta la flag i ahi tambien. 
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


/*COINCIDIR CARACTERES QUE APARECEN UNA O MAS VECES. (+) */

/*A veces necesitarmoes hacer coincidir caracteres que estan seguidos y esto es posible gracias al caracter (+)
cabe resaltar que el caracter que queremos hacer coincidir debe estar presente consecutivamente.         
abc regex = /a+/g  encontraria una sola vez a y devolveria por consola ["a"]
aabc regex = /a+/g  encontraria una sola vez a y devolveria por consola ["aa"]
pero en 
abac regex = /a+/g  encontraria dos veces a y devolveria por consola ["a","a"] porque hay un caracter en medio de ellos 
*/

/*COINCIDIR CARACTERES QUE APARECEN  0 O MAS VECES. (*) */
/*De la misma forma que vimmos atenriormente podemos hacer coincidir caracteres que apareezcan 0 o mas veces usando ahora el 
caracter  (*). Ejemplo de esto Aaaaaaaaarrrrg usaremos la regex siguiente: 
regex =  /*Aa/ por consola saldra [ 'Aaaaaaaaaaaaaaaa',]
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
/* efectivamente la consola nos retornara solo <h1> 

/*USANDO EL CARACTER ^ (caret) FUERA DE UN RANGO O CONJUNTO linea 114 */
/*

De este modo lo podemos usar para comporbar o buscar patrones al principio de una cadena. 
ejemplo 
Usaremos  el carácter caret en una expresión para buscar Cal solo al principio de la cadena rickyAndCal.*/
                let rickyAndCal = "Cal and Ricky both like racing.";
                let calRegex = /^Cal/;
                let resultad = calRegex.test(rickyAndCal);
                console.log(resultad) // true 

/*COINCIDIR PATRONES DE CADENA FINAL caracter de ancla($)*/

/*Podemos hacer coincidir patrones de la misma manera que en el ejemplo anterior, 
pero al final usando el caracter de signo de dolar caracter de ancla ($) sigamos ocn el ejemplo anterior */
                let rickyAndCal2 = "Cal and Ricky both like racing.";
                let calRegex2 = /racing$/;
                let resultad2 = calRegex2.test(rickyAndCal2);
                console.log(resultad2) // true 


/*CLASES DE CARACTERES ABREVIADOS*/

/*COINCIDIR TODAS LAS LETRAS Y LOS NUMEROS (\w)  equivalente a  [A-Za-z0-9_]*/

/* 
Podemos hacer coincidir todas las letras del alfabbeto y numeros con el siguiente atajo ( \w ) ejemplo: 
Utilizaremos \w para contar el número de caracteres alfanuméricos en varias citas y cadenas.*/
                let quoteSample5 = "The five boxing wizards jump quickly.";
                let alphabetRegexV2 = /\w/g; // recordar repeticiones 
                let result6 = quoteSample5.match(alphabetRegexV2).length;
                console.log(result6) // 31




/*Tambien podemos hacer coincidir todo menos las letras y los numeros (\W) nota la mayuscula que seria 
equivalente a  [^A-Za-z0-9_]*/

                let quoteSample6 = "The five boxing wizards jump quickly.";
                let alphabetRegexV3 = /\W/g; // recordar repeticiones 
                let result7 = quoteSample6.match(alphabetRegexV3).length;
                console.log(result7) // los espacios y el punto recuerda la flag g 

/*Tambien podemos coincidir o buscar todos los numeros de un string  con \d  que es equivalente a [0-9] ejemplo */

                let movieName = "2001: A Space Odyssey";
                let numRegex = /\d/g; // 
                let result8 = movieName.match(numRegex).length;
                console.log(movieName.match(numRegex)) // ['2','0', '0', '1']   
                console.log(result8)  // 4


/*Tambien podemos coincidir o buscar todos los NO numeros de un string con \D que es equivalente a [^0-9] ejemplo */   

/*Usando el mismo ejemplo anterior */

                let movieName2 = "2001: A Space Odyssey";
                let numRegex2 = /\D/g; 
                let result9 = movieName.match(numRegex2).length;
                console.log(movieName.match(numRegex2)) // [ ':',' ','A',' ','S','p','a','c','e',' ','O','d','y','s','s','e','y' ]
                console.log(result9)  //17

/*Tambien podemos coincidir o buscar todos los espacios en blanco usando \s no solo hace coincidir los espacios en blanco si no los
carriage return [ \r\t\f\n\v]
*/ 

                let sample = "Whitespace is important in separating words";
                let countWhiteSpace = /\s/g; 
                let result10 = sample.match(countWhiteSpace);//nos mostrara tods los espacios 

/*Tambien podemos coincidir o buscar todo menos los espacios en blanco usando \S carriage return tampoco sera coincidido  [^ \r\t\f\n\v] ejemplo 

*/ 
                let sample2 = "Whitespace is important in separating words";
                let countNonWhiteSpace = /\S/g; //nos mostrara un array con todos los valores que no sean espacios, tabulaciones o return carriage
                let result11 = sample2.match(countNonWhiteSpace);

/*Tambien podemos especificar el numero menor y mayor de coincidencias  { , }
*/
        /* nota: recordemos que se usa el signo + para buscar uno o mas caracteres 
         y * para buscar 0 o mas caracteres revisar linea  130 y 138 respectivamente
        ejemplo 
         */
                let ohStr = "Ohhh no";
                let ohRegex = /oh{3,6}\sno/gi ; // aqui lo estamos haciendo coincidir las h con un rango de 3 a 6 (recuerda separarlos por coma (,) y no por guion (-)

                let result12 = ohRegex.test(ohStr);
                console.log(result12)  


/*Tambien podemos especificar solo el numero menor de coincidencias   { ,};
                ejemplo 
                */
                let haStr = "Hazzzzah";
                let haRegex = /haz{4,}ah/i;  // coincidira con strings que tengan 4 o mas z en este caso 
                let result13 = haRegex.test(haStr); // mostrara true 



/*Tambien podemos especificar el numero exacto de coincidencias  {};
ejemplo 
*/
                let timStr = "Timmmmber";
                let timRegex = /tim{4}ber/i;  // si tiene mas o menos seria false
                let result14 = timRegex.test(timStr);
                console.log(result14) // true 

/*COMPROBAR PATRONES QUE PUEDEN O NO EXISTIR ?
Se puede hacer mediante la colocacion de un signo de interrigacion (?) comprobando de 0 o 1 los elementos precedentes ante la posible existencia de patron.
EJEMPLO:  
*/
                let favWord = "favorite";
                let favRegex = /favou?rite/; // nos mostrara true, porque en este caso la u precede al signo de interrogacion lo cual hace que pueda estar o no. 
                let result15 = favRegex.test(favWord);
                console.log(result15)

/* LOOKAHEAD POSITIVO Y NEGATIVO

LOOKAHEAD : patrones que le indican a js que busque por anticipado para verificar patrones mas adelante 


LOOKAHEAD POSITIVO (?=patron): buscara para asgurarse que el elemento este en el patron de busqueda pero no lo coincidira.
LOOKAHEAD NEGATIVO (?!patron): buscara para asgurarse que el elemento NO este en el patron de busqueda, devolviendo el patron si la 
parte del lookhaead negativo no esta prestente. 

*/
                let sampleWord = "abc123";
                let pwRegex = /(?=\w{6})(?=\D*\d{2})/; // estamos buscando que el paton tenga al menos 5 caracteres y dos numeros con dos lookhaheads positivos.
                let result16 = pwRegex.test(sampleWord);
                console.log(result16)


/*COMPROBAR AGRUPACIONES MIXTAS*/


/*Cuando necesitemos comprobar grupos de caracteres utilizando regex USAMOS (|) con un operator  or 
ejemplo: 
        ejercicio : Corrige la expresión regular para que compruebe los nombres de Franklin Roosevelt o Eleanor Roosevelt de una manera sensible a mayúsculas y minúsculas y haciendo concesiones para los segundos nombres.

Luego, corrige el código para que la expresión regular que has creado se compruebe con myString y devuelva true o false dependiendo de si la expresión regular coincide.
SOLUICION  : 
*/  
                let myString3 = "Franklin D. Roosevelt";
                let myRegex2 = /(franklin d.|eleanor) roosevelt/i; 
                let result17 = myRegex2.test(myString3); 
                let result18 = myString3.match(myRegex);
                console.log(result17) //true con las dos posibilidades 
                console.log(result18) // "Franklin D. Roosevelt" y "Eleanor Roosevelt" dependiendo de la cadena que este en myString3   

/*GRUPOS DE CAPTURA*/

/*Se usan para capturar el patron de expresion mediante el uso de parentecis. si fuese una palabra con caracteres alfa numericos seria (\w+)
la subacadena que coincide con el grupo de busqueda se guarda en una "variable" temporal a la que podemos acceder dentro de la misma regex 
usando una barra invertida y dentro del GRUPO DE CAPTURA. EJ: (\w+)\1, estos grupos se enumeran de izquierda a derecha emepzando por el 1
EJEMPLO 
Utiliza los grupos de captura en reRegex para que coincida con una cadena que conste sólo del mismo número repetido exactamente tres veces separado por espacios.
*/
                let repeatNum = "42 42 42";
                let reRegex = /^(\d+)\s\1\s\1$/; // aqui estamos capturando 1 grupo y lo estamos reutliziando como "variable" en las otras comprobaciones"
                let result19 = reRegex.test(repeatNum);


/*GRUPOS DE CAPTURA BUSCAR Y REEMPLAZAR*/

/*Para buscar y remplazar podemos usar .replace() donde recibe dos parametros el primero es la expresion regular y el segundo lo que queremos remplazar*/
/*dicho de esta manera .replace(regex, "textToModify"), tambien se puede usar grupos de captura en la cadena de remplazo con el signo dolar $:  recuerdar las comllas en lo que quieran modificar
EJEMPLO :
Escribe una expresión regular fixRegex utilizando tres grupos de captura que buscarán cada palabra en la cadena one two three. Luego actualiza la variable replaceText para reemplazar one two three con la cadena three two one y asigna el resultado a la variable result.*/

                let str = "one two three";
                let fixRegex = /(\w+)\s(\w+)\s(\w+)/; 
                let replaceText ="$3 $2 $1" ; 
                let result20 = str.replace(fixRegex, replaceText);
                console.log(result20)    //por la consola mostrara el three two one           

/*ELIMINAR EL ESPACIO EN BLANCO DEL INICIO Y DEL FINAL

EJEMPLO: queremos eliminar los espacios, tanto de inicio como del final. Lo debemos hacer es buscar caputar el primer y ultimo espacio con 
(^ respectivamente $ ) variable global porque se repite y el operador or(ya que no es consecutivo) ! 
*/
                let hello = "   Hello, World!  ";
                let wsRegex = /^\s+|\s+$/g;     
                let result21 = hello.replace(wsRegex, "");  
                 console.log(result21)  //la consola nos mostrara la cadena Hello, world!

/**/
/**/