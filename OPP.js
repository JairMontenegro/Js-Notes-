//                                                 PROGRAMACION ORIENTADA OBJETOS 


/* Repasar como crear y como acceder a un objeto mediante notacion de punto (dot notation) */



/* METODOS  */

/*FUNCIONES QUE SON ESTABLECIDAS A UNA PROPIEDAD DE UN OBJETO. EJEMPLO 
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



/*                                           PROPTOTYPE                                                   */


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
  
  
  for(let property in beagle2){
    if(Dog.hasOwnProperty(property)){ 
      ownProps2.push(property)
    }else{
      prototypeProps.push(property)
    }
  }
  
  console.log(ownProp2s) // nos mostrara las propiedades directas 
  console.log(prototypeProps) // nos mostrara las propiedades del prototype



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
  constructor : Dog, // agregar la propiedad constructor y de esa manera ya se puede comprobar si es instancia de un objeto constructor mira la linea 161
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};



/*                                      DE DONDE VIENE EL PROTOTIPO DE UN CONSTRUCTOR                                                */

//  Heredan su prototype directamente de la funcion constructor que lo creo  y con isPrototypeOf se puede mostrar si es verdadero o falso
//      EJEMPLO 

function Dog(name) {
    this.name = name;
}
let beagle3 = new Dog("Snoopy");
console.log(Dog.prototype.isPrototypeOf(beagle3)) // true 





/*                                                  COMPRENDER LA CADENA PROTOTYPE         //supertype subtype                                                   */




/* Comprende la cadena "prototype" Todos los objetos en JavaScript (con algunas excepciones) tienen un prototype. 
Además, el prototype de un objeto en sí mismo es un objeto. ya que javascript es un lenguaje de programacion orientado a objetos 
con una estructura basada  en prototipos, teniendo el concepto de objeto como su principal abstraccion. 

Cada objeto cuando se crea recibe su propio prototipo, si este no esta establecido de manera explicita, recibe un prototipo predeterminado 
como su objeto de heriencia. TODO LOS OBJETOS HEREDAN DE OBJECT.PROTOTYPE 


SI UNA PROPIEDAD NO SE ENCUENTRA EN EL OBJETO MISMO, HAY UN INTENTO DE BUSCARLA EN EL PROTOTIPO, SI NO SE ENCONTRO SE BUSCA EN EL PROTOTIPO DEL
PROTOTIPO Y ASI SUCESIVAMENTE HASTA QUE SE AGOTEN TODAS LAS CADENAS DE PROTOTIPO (NULL) 

                                    ENVIO DINAMICO O DOLEGACION

*/
function Dog(name) {
    this.name = name;
  }
  
  let beagles = new Dog("Snoopy"); // dog seria el supertype de beagles, beagles
  
  Dog.prototype.isPrototypeOf(beagles);  // produce true   
  
  Object.prototype.isPrototypeOf(Dog.prototype); // Object.prototype es el protype Dog.Prototype





/*                                                          HERIENCIA PARA NO REPETIR CODIGO                                     */


/* Ya que corregir varios lugares donde el codigo se repite se convierte en un problema grande para los programadores existe una
buena practica que se conoce como "DRY" evita multiples errores en la repeticion de codigo.  */

function Cat(name) {
    this.name = name;
  }
  
  Cat.prototype = {
    constructor: Cat,
  };
  
  function Bear(name) {
    this.name = name;
  }
  
  Bear.prototype = {
    constructor: Bear,
  
  };
  
  function Animal() { }
  
  Animal.prototype = {
    constructor: Animal,
    eat: function() {
      console.log("nom nom nom"); // aqui estariamos creando un mismo metodo que se repetia en el prototipo  de cat y bear 
    }
  };


/*                                                       HERIENCIA SUPERTYPE                                                      */


// COMO SE PODRIA USAR LA HERIENCIA PARA REUTILIZAR METODOS SIN NECESIDAD DE DEFINIRLOS OTRA VEZ 
// Primero veamos como crear una instancia de del supertype o del objeto padre. 


/*Con Object.create(obj) creamos un objeto nuevo y establece obj como el prototype del nuevo objeto. 
Recuerda que prototype es como la "receta" para crear un objecto. EJEMPLO */

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
let duck = Object.create(Animal.prototype); 
console.log(duck instanceof Animal) //true
let beagles1 = Object.create(Animal.prototype);
console.log( beagles1  instanceof Animal) //true

/* ahora veamos como establecer el prototypo de hijo para instancia del padre*/

  ChildObject.prototype = Object.create(ParentObject.prototype);// syntaxis

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    return "nom nom nom"
  }
};

function Dog() { }

Dog.prototype = Object.create(Animal.prototype) // estamos definiendo el prototypo de dog y creamos un objeto nuevo con el prototype de animal 
// que se podria describir como la "receta para que un nuevo animal sea creado"
let beaglest = new Dog(); // este nuevo objeto tendra todas las props que tiene el prototipo de un animal TAMBIEN ES BUENO PENSAR EN EL PROTOTIPO
                            // COMO EN UN "CODIGO GENETICO DEL OBJETO"
beaglest.eat() //nom nom nom






// IMPORTANTE CUANDO UN OBJETO HEREDA EL PROTOTYPE DE OTRO OBJETO TAMBIEN HEREDA LA PROPIEDAD DEL CONSTRUCTOR DEL SUPERTYPE

// para eso podemos reestablecer el constructor de forma manual ejemplo


function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype); // estamos creando la isntancia de prototypo de animal  para cada funcion y heredaria el constructor de animal

Dog.prototype = Object.create(Animal.prototype); 




Bird.prototype.constructor = Bird // sin estas lineas el constructor de nuestras nuevas instancias de objeto seria el 
Dog.prototype.constructor = Dog // que heredan por el prototype animal = Function Animal asi que lo estamos estableciendo para que el constructor sea el child



let ducks = new Bird(); 
let beagles2= new Dog();
console.log(ducks.constructor)  // aqui el constructor de animal nos mostrara por consola que es function Bird y no Animal 
console.log(beagle2.constructor) // aqui el constructor de animal nos mostrara por consola que es function Dog y no Animal 




/*                              AÑADIR METODOS DESPUES DE LA HERIENCIA                                                */



/*
Una función constructor que hereda su objeto prototype de una función constructor "supertype" 
puede seguir teniendo sus propios métodos además de los heredados.
EJERCICIO 
Añade el código necesario para que el objeto Dog herede de Animal y el constructor prototype de Dog sea establecido en Dog.
A continuación agrega el método bark() al objeto Dog, para que beagle pueda "comer" eat() y "ladrar" bark(). El método bark()
debe imprimir Woof! por consola.
*/

ChildObject.prototype.methodName = function() {}; //sintaxys 

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog
Dog.prototype.bark = function (){
  return "Woof!"
  }



let beagle12 = new Dog(); 
console.log(beagle12.bark()) // Woof!



/*                                       SOBRE ESCRIBIR METODOS HEREDADOS                                               */




/* Trambien podemos sobreescribir los metodos heredados. es decir  en el ejemplo anterior podriamos sobre escribir bark. */

Dog.prototype.barlk = function (){return "I'm barking, Woof!!  Woof!! "}  


/*                      "MIXIN" PARA AÑADIR UN COMPORTAMIENTO COMUN ENTRE OBJETOS NO RELACIONADOS                      */

// para compartir metodos de objetos que no esten relacioneados entre si ejemplo con ejercicio 

/*Crea un mixin llamado glideMixin que defina un método llamado glide. Luego utiliza el glideMixin para dar a bird y boat 
la habilidad de planear.
 */

let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

let glideMixin = function (obj){
  obj.glide = function (){
    return "I'm gidling"
  }
}

glideMixin(boat)
glideMixin(bird)

console.log(boat.glide()) // I'm gidling
console.log(bird.glide()) // I'm gidling


/*                                                TEMA IMPORNTANTE CLOSURES                                */

//https://www.freecodecamp.org/espanol/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-closure-to-protect-properties-within-an-object-from-being-modified-externally
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

//  FUNCION QUE ENCAPSULA UNA SERIE DE VARIABLES Y DEFINICIONES LOCALES QUE UNICAMENTE SERAN ACCESIBLES SI SON DEVUELTAS CON RETURN
//  NOS PERMITE TENER VARIABLES PRIVADAS (NO DEL TODO) PERO HACEMOS QUE SEA DIFICIL ACCEDER DESDE FUERA DEL SCOPE.
//  NOS PERMITE MODULARIZAR NUESTRO CODIGO COMO POR EJEMPLO LINEA 508
//  


// En JavaScript, una función siempre tiene acceso al contexto en el que se creó. A esto se le llama closure.

/*Se usa para evitar que las propiedades de un obj, metodo o funcion, NO puedan ser cambiadas, suponiendo que estemos en una 
aplicacion de banco con algun objeto con informacion, podiamos ocasionar varios errores al 
dejar que esas propiedades puedan ser modificadas a lo largo de nuestro codigo. 

La manera mas sencilla de arreglar esta situacion es declarando una variable dentro de la funcion constructora 
para que solo nos permita cambiarla dentro el ambito de esa funcion y ya no podamos acceder a ella de manera global.
*/

function Bird() {
  let weight = 15; // definimos la variable 

  this.getWeight = function (){
    return weight //metodo para retornar nuestra variable y evite ser cambiada 
  }

}
let donald = new Bird()


donald.getWeight() // metodo privilegiado porque tiene acceso a la variable privada weight 
// 





/*                               funciones que son invocadas inmediatamente (IIFE)                                */
/*                               Immediately Invoked Function Expression (IIFE)                                   */

 // es un patron comun ver funciones que se invoquen de manera inmediata un ejemplo de ellas es la siguiente. 

 (function () { // se coloca entre parentesis "notar que no hay nombre y no se almacena en ningun lugar"
  console.log("A cozy nest is ready"); 
})() // estos paretecis hacen que la funcion sea invocada inmediatamente. En este caso la consola nos mostraria A cozy nest is ready


/*                                         CREAR MODULOS GRACIAS A (IIFE)                                          */


let  funModule = (function(){ // estamos definiendo un modulo gracias a las IIFE (CONTIENE DOS MIXIN) REVISAR MIXIN
  return {
  isCuteMixin : function(obj) {
    obj.isCute = function() {
      return true;
    };
  },
   singMixin : function(obj) {
    obj.sing = function() {
      console.log("Singing to an awesome tune");
     };
    }
  }
  })(); // RECORDAR INVOCAR LA FUNCION O "MODULO"

// con esto tenemos la ventaja de usarlos en un solo paquete para cualquiera de nuestros objetos solo invocando nuestra variable 
// en este caso funModule  y ESTO ES UN CLOSURO PETRON PARECIDO A CLASES 
 
// como por ejemplo esto.

funModule.isCuteMixin(dog);
dog.iscute();


  

/* */
/* */