/*                                                 COMPROBADOR DE PALINDROMOS PROYECTO 1 


Devuelve true si la cadena proporcionada es un palíndromo. De lo contrario, devuelve false.
Un palíndromo es una palabra o frase que se escribe de la misma manera hacia adelante y hacia atrás, 
ignorando la puntuación, mayúsculas, minúsculas y espaciado.

Nota: Tendrás que eliminar todos los caracteres no alfanuméricos (puntuación, espacios y símbolos) y 
convertir todo en mayúsculas o minúsculas para comprobar si hay palíndromos.

Pasaremos cadenas con formatos variables, como racecar, RaceCar y race CAR entre otros.

También pasaremos cadenas con símbolos especiales, como 2A3*3a2, 2A3 3a2 y 2_A3*3#A2.

*/
function palindrome(str) {
    let replace = str.replace(/\W+|_/g ,"").toLowerCase()
    let reverse =  replace.split("").reverse().join("")


    return reverse === replace ? true : false
}

console.log(palindrome("A man, a plan, a canal. Panama"));



/*                                            CONVERSOR NUMEROS ROMANOS PROYECTO 2
Conversor de números romanos
Convierte el número proporcionado en un número romano.

Números romanos	Números arábigos
M	1000
CM	900
D	500
CD	400
C	100
XC	90
L	50
XL	40
X	10
IX	9
V	5
IV	4
I	1 


*/

function convertToRoman(num) {

    let romanNumbers = 
    { 
        M: 1000, 
        CM: 900,
        D: 500, 
        CD: 400, 
        C: 100, 
        XC: 90, 
        L: 50, 
        XL: 40, 
        X: 10, 
        IX: 9, 
        V: 5, 
        IV: 4, 
        I: 1 }; 
    
    let str = ''; 
    for (let i of Object.keys(romanNumbers)){ 
    let division =   Math.floor(num / romanNumbers[i]); 
    num -= division * romanNumbers[i]
    str += i.repeat(division);
    }
        return str; 
    
    }
    
    console.log(convertToRoman(36));

/*                                                          CIFRADO CESAR PROOYECTO 3
Uno de los cifrados más simples y conocidos es el cifrado César, también conocido como cifrado por desplazamiento.
En un cifrado por desplazamiento los significados de las letras se desplazan por una cantidad determinada.

Un uso moderno común es el cifrado ROT13, donde los valores de las letras son desplazados por 13 lugares. 
Así que A ↔ N, B ↔ O y así sucesivamente.
Escribe una función que reciba una cadena codificada en ROT13 como entrada y devuelva una cadena decodificada.
Todas las letras estarán en mayúsculas. No transformes ningún carácter no alfabético (espacios, puntuación, por ejemplo),
 pero si transmítelos.



*/

function rot13(str) {
    let result = ""; 
    let abcEnd = "NOPQRSTUVWXYZ"
    let abcStart  = "ABCDEFGHIJKLM"
   
    str.split("").forEach( letter  => {
      let alphabetStart = abcStart.indexOf(letter)
      let alphabetEnd = abcEnd.indexOf(letter)
  
      if(alphabetStart >= 0){
        result += abcEnd[alphabetStart]
        
      }else if (alphabetEnd >= 0 ){
        result += abcStart[alphabetEnd]
      }else{
        result += letter
      }
    })  
  return result 
  }

  
  console.log(rot13("SERR CVMMN!"));// FREE PIZZA



  /*                                      VALIDADOR DE NUMEROS TELEFONICOS  PROYECTO 4 

  Devuelve true si la cadena pasada concuerda con un número de teléfono válido en Estados Unidos.

El usuario puede completar el campo del formulario de la forma que elija, siempre que tenga el formato de un número estadounidense válido
Los siguientes ejemplos son de formatos válidos para números estadounidenses (consulte las pruebas a continuación para otras variantes):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
Para este desafío se te presentará una cadena como 800-692-7753 o 8oo-six427676;laskdjf.
Tu trabajo es validar o rechazar el número de teléfono estadounidense basado en cualquier 
combinación de los formatos proporcionados arriba. El código de área es obligatorio. Si el código de país es proporcionado,
debes confirmar que el código de país es 1. Devuelve true si la cadena es un número de teléfono estadounidense valido; de lo contrario devuelve false.
*/
function telephoneCheck(str) {
 
  if(str.indexOf("(")=== -1 && str.indexOf(")") > -1){
    return false
  }
  if(str[0]== "-"){
    return false
  }
  
  if (str.indexOf(")") - str.indexOf("(") >= 5){
    return false
  }
 
  if (str.match(/-/g) && str.match(/-/g).length > 2) {
     return false;
 }
 
  let  tlf = str.replace(/-| /g,"")
   if(tlf.indexOf("(") < tlf.indexOf(")") ){
     tlf = tlf.replace(/\(|\)/g,"")
     }
 
 
  if (tlf.length === 10 ){
    return true 
  }else if( tlf.length === 11 && tlf[0] == 1 ){
    return true 
  }
   return false
 }
 
 console.log(telephoneCheck("55 55-55-555-5"));



/**/
/**/
