class Subject {
  constructor() {
    this.observers = [];
  }

  suscribir(observer) {
    this.observers.push(observer);
  }

  desuscribir(observer) {
    this.observers = this.observers.filter(obs => obs !== observer)
  }

  notificar(evento, data){
    this.observers.forEach(observer => observer.actualizar(evento, data));
  }
}

module.exports = Subject;
