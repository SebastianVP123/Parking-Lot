class HistorialParqueo {
  constructor(CELDA_id, VEHICULO_id, fecha_hora = new Date(), fecha_salida = null, costo = 0) {
    this.CELDA_id = CELDA_id;
    this.VEHICULO_id = VEHICULO_id;
    this.fecha_hora = fecha_hora; // fecha de entrada
    this.fecha_salida = fecha_salida;
    this.costo = costo;
  }

  
  calcularDuracion() {
    if (this.fecha_salida) {
      return Math.floor((this.fecha_salida - this.fecha_hora) / (1000 * 60));
    }
    return Math.floor((new Date() - this.fecha_hora) / (1000 * 60));
  }


  registrarSalida(tarifaPorHora = 2000) {
    this.fecha_salida = new Date();
    const duracionMinutos = this.calcularDuracion();
    const horas = Math.ceil(duracionMinutos / 60);
    this.costo = horas * tarifaPorHora;
  }

  
  estaActivo() {
    return this.fecha_salida === null;
  }

  get getCELDA_id() {
    return this.CELDA_id;
  }
  get getVEHICULO_id() {
    return this.VEHICULO_id;
  }
  get getfecha_hora() {
    return this.fecha_hora;
  }
  get getCosto() {
    return this.costo;
  }
  set setCELDA_id(CELDA_id) {
    this.CELDA_id = CELDA_id;
  }
  set setVEHICULO_id(VEHICULO_id) {
    this.VEHICULO_id = VEHICULO_id;
  }
  set setfecha_hora(fecha_hora) {
    this.fecha_hora = fecha_hora;
  }
  set setFechaSalida(fecha_salida) {
    this.fecha_salida = fecha_salida;
  }
  set setCosto(costo) {
    this.costo = costo;
  }
}

export default HistorialParqueo;