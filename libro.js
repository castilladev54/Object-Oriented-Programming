//Clase Libro:
//Propiedades: titulo, autor, disponible
//Métodos: prestar(), devolver()

class Libro {
  constructor(titulo, autor, disponible){
    this.titulo= titulo;
    this.autor= autor;
    this.disponible= disponible;
  }
  prestar(){
    if (this.disponible) {
      this.disponible= false;
      console.log(`Se ha prestado el libro "${this.titulo}".`);
    } else {
      console.log(`El libro "${this.titulo}", no esta disponible`);
    }
  }
  devolver(){
    this.disponible= true;
    console.log(`Se ha devuelto el libro "${this.titulo}". Ahora está disponible.`);
  }
}

module.exports= Libro;