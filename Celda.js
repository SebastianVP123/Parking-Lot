class Celda {
  constructor(id, tipo, estado = "disponible", area = "Piso 1", vehiculo = null) {
    this.id = id;
    this.tipo = tipo; // "moto", "carro", "discapacitado"
    this.estado = estado; // "disponible", "ocupado"
    this.area = area; // área, piso o nivel
    this.vehiculo = vehiculo; // referencia al vehículo que ocupa la celda
  }

  // Calcular tarifa según tipo de celda
  calcularTarifa() {
    const tarifas = {
      'moto': 1500,
      'carro': 3000,
      'discapacitado': 2500
    };
    return tarifas[this.tipo] || 2000;
  }

  // Ocupar la celda con un vehículo
  ocuparCelda(vehiculo) {
    if (this.estado === "disponible") {
      this.estado = "ocupado";
      this.vehiculo = vehiculo;
      return true;
    }
    return false;
  }

  // Liberar la celda
  liberarCelda() {
    this.estado = "disponible";
    this.vehiculo = null;
  }

  get getId() {
    return this.id;
  }
  get getTipo() {
    return this.tipo;
  }
  get getEstado() {
    return this.estado;
  }
  get getArea() {
    return this.area;
  }
  get getVehiculo() {
    return this.vehiculo;
  }
  set setId(id) {
    this.id = id;
  }
  set setTipo(tipo) {
    this.tipo = tipo;
  }
  set setEstado(estado) {
    this.estado = estado;
  }
  set setArea(area) {
    this.area = area;
  }
  set setVehiculo(vehiculo) {
    this.vehiculo = vehiculo;
  }
}

export default Celda;