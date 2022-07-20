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



  /**/
/**/
/**/
/**/
