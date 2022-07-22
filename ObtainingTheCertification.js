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



/*                                                      CAJA REGRISTRADORA 
Caja registradora
Diseña una función checkCashRegister() que acepte el precio de compra como primer argumento (price), la cantidad pagada como segundo argumento (cash), 
y el dinero en efectivo que tiene la caja (cid) como tercer argumento.

cid es un arreglo 2D que enumera las monedas disponibles.
La función checkCashRegister() siempre debe devolver un objeto con una clave status y una clave change.
Devuelve {status: "INSUFFICIENT_FUNDS", change: []} si el efectivo en caja es menor que el cambio necesario, o si no puedes devolver el cambio exacto.
Devuelve {status: "CLOSED", change: [...]} si el efectivo en caja como valor de la clave change es igual al cambio que se debe entregar.
En cualquier otro caso, devuelve {status: "OPEN", change: [...]}, con el cambio a entregar en monedas y billetes, ordenados de mayor a menor, como valor de la clave change.

Unidad Monetaria	Importe
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
A continuación, un ejemplo del efectivo en caja en formato de arreglo:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
*/


function checkCashRegister(price, cash, cid) {
  
  let mutatedCID  = [ ]
  let moneyForCustomer  = 0 ;
  let change  = cash*1000  - price*1000 ;
  let oneHundred  = 0 ;
  let twenty  = 0 ;
  let ten = 0 ;
  let five  = 0 ;
  let one = 0 ;
  let quarter = 0 ;
  let dime  = 0 ;
  let nickel  = 0 ;
  let penny = 0 ;
  let billsAnDCoinsForCustomer  = [] ;
    let newCid  = [] ; 
  let newDenominationsofCurrency  =  []  ;
  let totalForCustomer  =  []  ;
  let backwardMutatedCID  = [] ;
  
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  
  let obj1 = {
      status: "OPEN"  ,
      change: totalForCustomer
    
  }
    
  let obj2  =  {
      status: "CLOSED"  ,
      change: backwardMutatedCID
    
  }

  let obj3 = {
      status: "INSUFFICIENT_FUNDS"  ,
      change: []
    
  }
  let denominationsOfCurrency = 
  [
    ["ONE HUNDRED", 100000],
    ["TWENTY", 20000],
    ["TEN", 10000],
    ["FIVE", 5000],
    ["ONE", 1000],
    ["QUARTER", 250],
    ["DIME", 100],
    ["NICKEL", 50],
    ["PENNY", 10]
  ];

  


  for (let i = 0 ; i < denominationsOfCurrency.length;i++)  {
    for ( let j = 0 ; j < cid.length ; j++ ) {
        if  ( denominationsOfCurrency[i][0] ===cid[j][0]) {
          newCid.push(cid[j]) ;
          newDenominationsofCurrency.push(denominationsOfCurrency[i])


          
        }     
     }
  }

  for (   let i = 0 ; i < newCid.length ; i++  )  {
      mutatedCID.push(newCid[  i ][ 1 ] * 1000)
  }

  let totalInMutatedCID  = mutatedCID.reduce(reducer);
  if( totalInMutatedCID  > change   &&  change<=mutatedCID[0] ){
      for(  let i = 0;  i < denominationsOfCurrency.length ; i ++ )  {
      while (change >= denominationsOfCurrency[ i ][  1 ]   && mutatedCID [ i ]  > 0   )  {
          change  -=  denominationsOfCurrency[ i ][  1 ]  ;
          mutatedCID [ i ]  -=  denominationsOfCurrency[ i ][  1 ]  ;
          moneyForCustomer  +=  denominationsOfCurrency[ i ][  1 ]  ;
          billsAnDCoinsForCustomer.push(  denominationsOfCurrency[ i ]  )



      }
  }
  for ( let i = 0 ; i < billsAnDCoinsForCustomer.length ; i++  )  {
      if (  billsAnDCoinsForCustomer[i][  0 ] == "ONE HUNDRED"  ){
          oneHundred  +=  100000 ;
      }
      if (  billsAnDCoinsForCustomer[i][0] == "TWENTY"  ){
          twenty  +=  20000 ;
      }
      if (  billsAnDCoinsForCustomer[i][0] == "TEN"  ){
          ten  +=  10000 ;
      }
      if (  billsAnDCoinsForCustomer[i][0] == "FIVE"  ){
          five  +=  5000 ;
      }
      if (  billsAnDCoinsForCustomer[i][0] == "ONE"  ){
          one  +=  1000 ;
      }
      if (  billsAnDCoinsForCustomer[i][0] == "QUARTER"  ){
          quarter  +=  250 ;
      }
      if (  billsAnDCoinsForCustomer[i][0] == "DIME"  ){
          dime  +=  100 ;
      }
      if (  billsAnDCoinsForCustomer[i][0] == "NICKEL"  ){
          nickel  +=  50 ;
      }
      if (  billsAnDCoinsForCustomer[i][0] == "PENNY"  ){
          penny  +=  10 ;
      }


    
  }

    if  ( oneHundred  > 0 ) {
        totalForCustomer.push(  ["ONE HUNDRED", oneHundred/1000])
       }
       if ( twenty  > 0 )  {
         totalForCustomer.push(  ["TWENTY", twenty/1000])
        }
        if ( ten  > 0 )  {
         totalForCustomer.push(  ["TEN", ten/1000])
        }
        if ( five  > 0 )  {
         totalForCustomer.push(  ["FIVE", five/1000])
        }
        if ( one  > 0 )  {
         totalForCustomer.push(  ["ONE", one/1000])
        }
        if ( quarter  > 0 )  {
         totalForCustomer.push(  ["QUARTER", quarter/1000])
        }
        if ( dime  > 0 )  {
         totalForCustomer.push(  ["DIME", dime/1000])
        }
        if ( nickel  > 0 )  {
         totalForCustomer.push(  ["NICKEL", nickel/1000])
        }
        if ( penny  > 0 )  {
         totalForCustomer.push(  ["PENNY", penny/1000])
        }
       
      return obj1

  } else if (totalInMutatedCID  == change){

          for(  let i = 0;  i < denominationsOfCurrency.length ; i ++)  {
      while (change >= denominationsOfCurrency[i][1]   && mutatedCID [ i ]  > 0   )  {
          change  -=  denominationsOfCurrency[i][1]  ;
          mutatedCID [ i ]  -=  denominationsOfCurrency[i][1]  ;
          moneyForCustomer  +=  denominationsOfCurrency[i][1]  ;
          billsAnDCoinsForCustomer.push(  denominationsOfCurrency[i]  )



      }
  }

      for ( let i = 0 ; i < billsAnDCoinsForCustomer.length ; i++  )  {
    
      if (  billsAnDCoinsForCustomer[i][0] == "ONE HUNDRED"  ){
          oneHundred  +=  100000 ;
      }
      if (  billsAnDCoinsForCustomer[i][0] == "TWENTY"  ){
          twenty  +=  20000 ;
      }
      if (  billsAnDCoinsForCustomer[i][0] == "TEN"  ){
          ten  +=  10000 ;
      }
      if (  billsAnDCoinsForCustomer[i][0] == "FIVE"  ){
          five  +=  5000 ;
      }
      if (  billsAnDCoinsForCustomer[i][0] == "ONE"  ){
          one  +=  1000 ;
      }
      if (  billsAnDCoinsForCustomer[i][0] == "QUARTER"  ){
          quarter  +=  250 ;
      }
      if (  billsAnDCoinsForCustomer[i][0] == "DIME"  ){
          dime  +=  100 ;
      }
      if (  billsAnDCoinsForCustomer[i][0] == "NICKEL"  ){
          nickel  +=  50 ;
      }
      if (  billsAnDCoinsForCustomer[i][0] == "PENNY"  ){
          penny  +=  10 ;
      }


    
  }

    if  ( oneHundred  => 0 ) {
        totalForCustomer.push(  ["ONE HUNDRED", oneHundred/1000])
       }
       if ( twenty  => 0 )  {
         totalForCustomer.push(  ["TWENTY", twenty/1000])
        }
        if ( ten  => 0 )  {
         totalForCustomer.push(  ["TEN", ten/1000])
        }
        if ( five  => 0 )  {
         totalForCustomer.push(  ["FIVE", five/1000])
        }
        if ( one  => 0 )  {
         totalForCustomer.push(  ["ONE", one/1000])
        }
        if ( quarter  => 0 )  {
         totalForCustomer.push(  ["QUARTER", quarter/1000])
        }
        if ( dime  => 0 )  {
         totalForCustomer.push(  ["DIME", dime/1000])
        }
        if ( nickel  => 0 )  {
         totalForCustomer.push(  ["NICKEL", nickel/1000])
        }
        if ( penny  => 0 )  {
         totalForCustomer.push(  ["PENNY", penny/1000])
        }

          for(let i=0;i<cid.length;i++ ){

            for(let j= 0;j<totalForCustomer.length ;j++)   {
                    if( totalForCustomer[i][0]==cid[j][0] ){
                            backwardMutatedCID.push(totalForCustomer[j])
                        }
                }
            }
    return obj2
  } else  {

      return obj3}
      
     }
let result = checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

console.log(result)
/**/
