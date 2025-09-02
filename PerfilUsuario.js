class PerfilUsuario {
  constructor(id, perfil) {
    this.id = id;
    this.perfil = perfil;
  }
  get getId() {
    return this.id;
  }
  get getPerfil() {
    return this.perfil;
  }
  set setId(id) {
    this.id = id;
  }
  set setPerfil(perfil) {
    this.perfil = perfil;
  }
}

export default PerfilUsuario;
