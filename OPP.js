//                                                                  PROGRAMACION ORIENTADA OBJETOS 


/* Repasar como crear y como acceder a un objeto mediante notacion de punto (dot notation) */



/* METODOS  */

/*FUNCIONES QUE SON ESTABELCIDAS A UNA PROPIEDAD DE UN OBJETO. EJEMPLO 
 */

let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}}; 
dog.sayLegs();




/*                                                                   FUNCIONES CONSTRUCTOR                                                          */

/* Construyen nuevos objetos, y definen propiedades y comportamientos que van a tener los nuevos objetos
se puede pensar como un modelo para la creacion de nuevos objetos

- SE TIENEN QUE ESCRIBIR CON LA PRIMERA LETRA MAYUSCULA PARA DIFERENCIARLAS DE FUNCIONES QUE NO SEAN CONSTRUCTORS
- Utilizan la palabra clave this para establecer propiedades del objeto que crearán. Dentro del constructor, this se 
    refiere al nuevo objeto que creará.
- Los Constructors definen propiedades y comportamientos en vez de devolverlos como un valor como lo harían otras funciones. 
EJEMPLO
*/


function Dog () {
  this.name ="Firulais";
  this.color = "green";
  this.numLegs = 4;
}


/*A partir de este constructor podemos crear nuevos objetos y asignarmos a una varialbe. 
Recordemos que es necesario usar la palabra this para hacer referencia a ese constructor 
de otro modo la creacion del nuevo objeto presentaria problemas inesperados  ejemplo: */  

let firulaisSon = new Dog(); // estamos creando un nuevo objeto con sus mismas caracteristicas. 


/*¿Que pasaria si queremos cambiar esas caracteristicas?
Ahi es donde se comienza a demostrar el poder de las funciones constructor. 
ya que podemos asignarles sus propiedades como parametros de la funcion y asignarselos cuando estemos creando una
cantidad de nuevos objetos a partir de uno solo. EJEMPLO 
*/  
function Dog(name, color ) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}
  let terrier = new Dog ("Firulais Son" , "Gray")   // CADA VEZ QUE UNA FUNC CONSTRUCTORA CREA UN OBJETO, A ESTA SE LE CONOCE COMO 
                                                    //INSTANCIA DE ESE OBJETO 


    console.log(terrier)// { name: 'Firulais Son', color: 'Gray', numLegs: 4 }


/*                                                      INSTANCE OF    / instanceof                                             */
/*
gracias a este operardor nos permite corroborar si un objeto fue credado a partr de otro devolviendonos TRUE  FALSE 
EJEMPLO.
*/

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  let myHouse = new House (20); 
  
  console.log(myHouse instanceof House) // true 



/*                                                          PROPIEDDES DIRECTAS                                                                 */


/* En nuestro ejemplo de Dog nos damos cuenta que tenemos 3 propiedades name color y numlegs. 
y son directas porque estan definidas directamente en la isntancia del objeto.

cada objeto creado a partir de ese constructor tendra su porpia copia de estas propiedades.         

ejemplo en esta iteracion a traves del obejto con  for in podemos iterar a travez de las propiedades y 
asignarlas a un arreglo previamente creado. 
*/

function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  
  for (let property in canary){
    if(canary.hasOwnProperty(property)){
      ownProps.push(property)
    }
  }
  
  console.log(ownProps)



/*                                           PROPTOTYPE PARA REDUCIR EL CODIGO DUPLICADO                                                           */


/* prototype se usa para compartir las propiedades que puedan tener en todas las instancias de un objeto. 
si tienen el mismo valor */


function Dog(name) {
    this.name = name;
}
Dog.prototype.numLegs = 4 ; // se pueden pensar como en una receta para crear objetos. 

let beagle = new Dog("Snoopy");
let bulterrier  = new Dog("Perralay")
  console.log(beagle) // { name: 'Snoopy' }
  console.log(bulterrier.numLegs) // 4



/*ITERAR SONRE TODAS LAS PROPIEDADES YA SEAN DIRECTAS O PROTOTYPE

con nuestro ejemplo seri de la siguiente manera.
*/

function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle2 = new Dog("Snoopy");
  
  let ownProps2 = [];
  let prototypeProps = [];
  
  
  for(let property in beagle){
    if(Dog.hasOwnProperty(property)){
      ownProps.push(property)
    }else{
      prototypeProps.push(property)
    }
  }
  
  console.log(ownProps)
  console.log(prototypeProps)



  /*                                                PROPIEDAD CONSTRUCTOR (CONSTRUCTOR PROPERTY)                                         */

  /*Esta propiedad hace referencia al constructor que creo que la instancia y se usa para verificar  */
  
  function Dog(name) {
    this.name = name;
  }
  
  function joinDogFraternity(candidate) {
    if (candidate.constructor===Dog){ // asi seria su uso y su resultado seria si dog hace parte del constructor que pasamos como paramtro 
    return  true
   
    }else{
      return false
    }
  
  }
  
  let bolt = new Dog ("Bolty")

  console.log(joinDogFraternity(bolt)) // true 



/*                                                       PROTOTYPE A UN OBJETO                                                                 */

/*Una buena practica con prototype es cambiar todas las declaraciones prototype por un objeto

    esto es muy util cuando tenemos que agregar muchas propiedades al prototype, ya que seria muy tedioso agregar una a una. 
    entonces basciamente las agregamos todas a un objeto.prototype como el siguiente ejemplo. 
*/

function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    numLegs: 2,
    eat : () => {console.log("i love to eat kibble")},
    describe : function () {console.log(`Hello mi name is ${this.name}`)}
  };
  
  let santasLittleHelper = new Dog ("Santa's Little Helper")
  
  console.log(santasLittleHelper.name) // Santa's Little Helper
  console.log(santasLittleHelper.eat()) // i love to eat kibble
  console.log(santasLittleHelper.describe()) // Hello mi name is Santa's Little Helper

/*Un cambio crucial cuando hay se establece el prototype en un nuevo objeto es que la propiedad constructor ya no funciona al ser sobreescrita
para solucionar esto lo que debemos hacer es volver a definir la propiedad constructor 
 */

function Dog(name) {
  this.name = name;
}
Dog.prototype = {
  constructor : Dog, // agregar la propiedad constructor y de esa manera ya se puede comprobar si es instancia de un objeto constructor
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};


/* */
/* */
/* */
/* */
/* */