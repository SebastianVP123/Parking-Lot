class Incidencia {
  constructor(id, nombre, descripcion = "", gravedad = "media", activo = true) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.gravedad = gravedad; 
    this.activo = activo;
  }

  
  obtenerPrioridad() {
    const prioridades = {
      'alta': 1,
      'media': 2,
      'baja': 3
    };
    return prioridades[this.gravedad] || 2;
  }

  
  cambiarEstado() {
    this.activo = !this.activo;
  }

  
  obtenerDescripcionCompleta() {
    return `${this.nombre}: ${this.descripcion} (Gravedad: ${this.gravedad})`;
  }

  get getId() {
    return this.id;
  }
  get getNombre() {
    return this.nombre;
  }
  get getDescripcion() {
    return this.descripcion;
  }
  get getGravedad() {
    return this.gravedad;
  }
  get getActivo() {
    return this.activo;
  }
  set setId(id) {
    this.id = id;
  }
  set setNombre(nombre) {
    this.nombre = nombre;
  }
  set setDescripcion(descripcion) {
    this.descripcion = descripcion;
  }
  set setGravedad(gravedad) {
    this.gravedad = gravedad;
  }
  set setActivo(activo) {
    this.activo = activo;
  }
}

export default Incidencia;