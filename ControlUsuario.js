import Usuario from "./Usuario.js";
import PerfilUsuario from "./PerfilUsuario.js";

const PerfilUsuario1 = new PerfilUsuario(1, "Administrador");
const PerfilUsuario2 = new PerfilUsuario(2, "Operador");
const PerfilUsuario3 = new PerfilUsuario(3, "Visitante");
console.log(PerfilUsuario1);
console.log(PerfilUsuario2);
console.log(PerfilUsuario3);

const Usuario1 = new Usuario(1, "CC", "123456789", "Juan", "", "Pérez", "Gómez", "juan.perez@example.com", "3001234567", "foto1.jpg", "Activo", "clave1", PerfilUsuario1.id);
const Usuario2 = new Usuario(2, "TI", "987654321", "María", "", "López", "Martínez", "maria.lopez@example.com", "3007654321", "foto2.jpg", "Inactivo", "clave2", PerfilUsuario2.id);
const Usuario3 = new Usuario(3, "CC", "456789123", "Carlos", "", "García", "Hernández", "carlos.garcia@example.com", "3004567891", "foto3.jpg", "Activo", "clave3", PerfilUsuario3.id);

console.log(Usuario1);
console.log(Usuario2);
console.log(Usuario3);