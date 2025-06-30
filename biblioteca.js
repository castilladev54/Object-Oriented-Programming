const Subject = require('./subject');

class Biblioteca extends Subject {
  constructor() {
    super();
    if (Biblioteca.instancia)
      return Biblioteca.instancia; 
    
    this.listaDeLibros = [];
    this.usuarioRegistrado = [];
    Biblioteca.instancia = this; // Guardamos la instancia
  }

  registrarLibros(libro) {
    this.listaDeLibros.push(libro);
    this.notificar("libroRegistrado", libro);
  }
  
  registrarUsuario(usuario) {
    this.usuarioRegistrado.push(usuario);
    this.notificar("usuarioRegistrado", usuario);
  }
  buscarlibro(titulo) {
    const libroEncontrado = this.listaDeLibros.find(
      (libro) => libro.titulo.toLowerCase() === titulo.toLowerCase()
    );
    if (libroEncontrado) {
      console.log(
        `📘 Libro encontrado: "${libroEncontrado.titulo}" por ${libroEncontrado.autor}`
      );
    } else {
      console.log(`❌ Libro con el título "${titulo}" no encontrado.`);
    }
  }
}

module.exports = Biblioteca;