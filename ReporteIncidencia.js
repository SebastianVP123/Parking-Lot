class ReporteIncidencia {
  constructor(id, VEHICULO_id, fecha_reporte = new Date(), resuelto = false, observaciones = "") {
    this.id = id;
    this.VEHICULO_id = VEHICULO_id;
    this.fecha_reporte = fecha_reporte;
    this.resuelto = resuelto;
    this.observaciones = observaciones;
  }

 
  obtenerTiempoTranscurrido() {
    const ahora = new Date();
    const tiempoTranscurrido = Math.floor((ahora - this.fecha_reporte) / (1000 * 60 * 60)); 
    
    if (tiempoTranscurrido < 24) {
      return `${tiempoTranscurrido} hora(s)`;
    } else {
      const dias = Math.floor(tiempoTranscurrido / 24);
      const horasRestantes = tiempoTranscurrido % 24;
      return `${dias} día(s) y ${horasRestantes} hora(s)`;
    }
  }

  esUrgente() {
    if (this.resuelto) {
      return false;
    }
    
    const ahora = new Date();
    const horasTranscurridas = (ahora - this.fecha_reporte) / (1000 * 60 * 60);
    return horasTranscurridas > 24;
  }


  resolverIncidencia(observaciones = "") {
    this.resuelto = true;
    this.observaciones = observaciones;
  }

 
  get getId() {
    return this.id;
  }
  get getVEHICULO_id() {
    return this.VEHICULO_id;
  }
  get getFechaReporte() {
    return this.fecha_reporte;
  }
  get getResuelto() {
    return this.resuelto;
  }
  get getObservaciones() {
    return this.observaciones;
  }

  
  set setId(id) {
    this.id = id;
  }
  set setVEHICULO_id(VEHICULO_id) {
    this.VEHICULO_id = VEHICULO_id;
  }
  set setFechaReporte(fecha_reporte) {
    this.fecha_reporte = fecha_reporte;
  }
  set setResuelto(resuelto) {
    this.resuelto = resuelto;
  }
  set setObservaciones(observaciones) {
    this.observaciones = observaciones;
  }
}

export default ReporteIncidencia;