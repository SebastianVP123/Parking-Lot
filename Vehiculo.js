class Vehiculo {
  constructor(id, placa, color, modelo, marca, tipo, USUARIO_id_usuario, activo = true) {
    this.id = id;
    this.placa = placa;
    this.color = color;
    this.modelo = modelo;
    this.marca = marca;
    this.tipo = tipo; // "moto", "carro"
    this.USUARIO_id_usuario = USUARIO_id_usuario;
    this.activo = activo;
  }

  validarPlaca() {
    const patronCarro = /^[A-Z]{3}[0-9]{3}$/;
    const patronMoto = /^[A-Z]{3}[0-9]{2}[A-Z]$/;
    
    if (this.tipo === "carro") {
      return patronCarro.test(this.placa);
    } else if (this.tipo === "moto") {
      return patronMoto.test(this.placa);
    }
    return false;
  }

  
  obtenerInfoCompleta() {
    return `${this.marca} ${this.modelo} - ${this.placa} (${this.color})`;
  }

 
  cambiarEstado() {
    this.activo = !this.activo;
  }

 
  puedeUsarCelda(tipoCelda) {
    if (tipoCelda === "discapacitado") {
      return true; 
    }
    return this.tipo === tipoCelda;
  }

  get getId() {
    return this.id;
  }
  get getPlaca() {
    return this.placa;
  }
  get getColor() {
    return this.color;
  }
  get getModelo() {
    return this.modelo;
  }
  get getMarca() {
    return this.marca;
  }
  get getTipo() {
    return this.tipo;
  }
  get getUsuarioId() {
    return this.USUARIO_id_usuario;
  }
  get getActivo() {
    return this.activo;
  }
  set setId(id) {
    this.id = id;
  }
  set setPlaca(placa) {
    this.placa = placa;
  }
  set setColor(color) {
    this.color = color;
  }
  set setModelo(modelo) {
    this.modelo = modelo;
  }
  set setMarca(marca) {
    this.marca = marca;
  }
  set setTipo(tipo) {
    this.tipo = tipo;
  }
  set setUsuarioId(USUARIO_id_usuario) {
    this.USUARIO_id_usuario = USUARIO_id_usuario;
  }
  set setActivo(activo) {
    this.activo = activo;
  }
}

export default Vehiculo;