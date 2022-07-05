// PROGRAMACION ORIENTADA OBJETOS 


/* Repasar como crear y como acceder a un objeto mediante notacion de punto (dot notation) */



/* METODOS  */

/*FUNCIONES QUE SON ESTABELCIDAS A UNA PROPIEDAD DE UN OBJETO. EJEMPLO 
 */

let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}}; 
dog.sayLegs();




/* FUNCIONES CONSTRUCTOR */

/* Construyen nuevos objetos, y definen propiedades y comportamientos que van a tener los nuevos objetos
se puede pensar como un modelo para la creacion de nuevos objetos

- SE TIENEN QUE ESCRIBIR CON LA PRIMERA LETRA MAYUSUCLA PARA DIFERENCIARLAS DE FUNCIONES QUE NO SEAN CONSTRUCTORS
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


/*INSTANCE OF    / instanceof

gracias a este operardor nos permite corroborar si un objeto fue credado a partr de otro devolviendonos TRUE  FALSE 
EJEMPLO.
*/

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  let myHouse = new House (20); 
  
  console.log(myHouse instanceof House) // true 



/*PROPIEDDES DIRECTAS */


/*  cuando una instancia de objeto */



/* */
/* */
/* */