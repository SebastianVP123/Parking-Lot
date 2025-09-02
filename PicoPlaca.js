class PicoPlaca {
  constructor(id, tipo_vehiculo, numero, dia, activo = true) {
    this.id = id;
    this.tipo_vehiculo = tipo_vehiculo; // "carro", "moto"
    this.numero = numero; // último dígito de la placa
    this.dia = dia; // día de la semana (0-6, donde 0 es domingo)
    this.activo = activo;
  }

  
  tieneRestriccionHoy(placa) {
    const hoy = new Date().getDay();
    const ultimoDigito = parseInt(placa.slice(-1));
    
    if (!this.activo || hoy !== this.dia) {
      return false;
    }
    
    return ultimoDigito === this.numero;
  }

  
  obtenerNombreDia() {
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    return dias[this.dia] || 'Día inválido';
  }

 
  aplicaRestriccion(hora = new Date().getHours()) {
    // Horarios típicos de pico y placa: 6-8 AM y 5-7 PM
    const horarioMañana = hora >= 6 && hora <= 8;
    const horarioTarde = hora >= 17 && hora <= 19;
    
    return this.activo && (horarioMañana || horarioTarde);
  }

  get getId() {
    return this.id;
  }
  get getTipoVehiculo() {
    return this.tipo_vehiculo;
  }
  get getNumero() {
    return this.numero;
  }
  get getDia() {
    return this.dia;
  }
  get getActivo() {
    return this.activo;
  }
  set setId(id) {
    this.id = id;
  }
  set setTipoVehiculo(tipo_vehiculo) {
    this.tipo_vehiculo = tipo_vehiculo;
  }
  set setNumero(numero) {
    this.numero = numero;
  }
  set setDia(dia) {
    this.dia = dia;
  }
  set setActivo(activo) {
    this.activo = activo;
  }
}

export default PicoPlaca;