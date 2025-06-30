const logger = {
  actualizar(evento, data){
    console.log(`📢 [Evento : ${evento}]`, data);
  }
};

module.exports = logger;