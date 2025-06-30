//Clase Usuario: Propiedades:
//Nombre, id, librosPrestados,
//Métodos: tomarPrestado(libro), devolverLibro(libro)

class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.librosPrestados = [];
  }
  tomarPrestado(libro) {
    this.librosPrestados.push(libro)
    console.log(
      `El usuario, llamado ${this.name}, ha tomado el libro prestado${libro.titulo}`
    );
  }
  devolverLibro(libro) {
    const index = this.librosPrestados.indexOf(libro);
    if (index > -1) {
      this.librosPrestados.splice(index, 1);
    } else {
      console.log(`${this.name} ha devuelto el libro: ${libro}`);
    }
  
      console.log(`${this.name} no tiene ese libro.`);

  }
}

module.exports = User;





