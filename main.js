//Uso del Singleton

const biblioteca = require("./biblioteca.js");
const logger = require("./logger.js")

const biblioteca1 = new biblioteca();
const biblioteca2 = new biblioteca();
biblioteca2.suscribir(logger); // Se suscribe al evento

console.log(biblioteca1 === biblioteca2); // true

biblioteca1.registrarLibros({titulo : "1984", autor: "George Orwell"});
biblioteca1.registrarUsuario({ id: 1, name:"Carlos"}); 



