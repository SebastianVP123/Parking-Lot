class AccesoSalidas {
  constructor(id, movimiento, fecha_hora, puerta, tiempo_estadia = 0, VEHICULO_id) {
    this.id = id;
    this.movimiento = movimiento; // "entrada" o "salida"
    this.fecha_hora = fecha_hora;
    this.puerta = puerta;
    this.tiempo_estadia = tiempo_estadia;
    this.VEHICULO_id = VEHICULO_id;
  }

  
  calcularCosto() {
    const tarifaPorHora = 2000;
    const horas = Math.ceil(this.tiempo_estadia / 60); 
    return horas * tarifaPorHora;
  }

  
  registrarEntrada() {
    this.movimiento = "entrada";
    this.fecha_hora = new Date();
    this.tiempo_estadia = 0;
  }

  
  registrarSalida() {
    this.movimiento = "salida";
    const fechaSalida = new Date();
   
    const tiempoEnMinutos = (fechaSalida - this.fecha_hora) / (1000 * 60);
    this.tiempo_estadia = Math.floor(tiempoEnMinutos);
  }

  get getid(){
    return this.id;
  }
  get getmovimiento(){
    return this.movimiento;
  }
  get getfecha_hora(){
    return this.fecha_hora;
  }
  get getpuerta(){
    return this.puerta;
  }
  get gettiempo_estadia(){
    return this.tiempo_estadia;
  }
  get getVEHICULO_id(){
    return this.VEHICULO_id;
  }
  set setid(id){
    this.id = id; 
  }
  set setmovimiento(movimiento){
    this.movimiento = movimiento;
  }
  set setfecha_hora(fecha_hora){
    this.fecha_hora = fecha_hora;
  }
  set setpuerta(puerta){
    this.puerta = puerta;
  }
  set settiempo_estadia(tiempo_estadia){
    this.tiempo_estadia = tiempo_estadia;
  }
  set setVEHICULO_id(VEHICULO_id){
    this.VEHICULO_id = VEHICULO_id;
  }
}

export default AccesoSalidas;