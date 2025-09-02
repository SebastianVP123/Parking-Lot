import Vehiculo from "./Vehiculo.js";

// Instancias de ejemplo de vehículos
const vehiculo1 = new Vehiculo(1, "ABC123", "Rojo", "2020", "Toyota", "carro", 1);
const vehiculo2 = new Vehiculo(2, "XYZ45A", "Azul", "2019", "Yamaha", "moto", 2);
const vehiculo3 = new Vehiculo(3, "DEF456", "Blanco", "2021", "Chevrolet", "carro", 3);
const vehiculo4 = new Vehiculo(4, "GHI78B", "Negro", "2018", "Honda", "moto", 1);

console.log("=== VEHÍCULOS CREADOS ===");
console.log(vehiculo1);
console.log(vehiculo2);
console.log(vehiculo3);
console.log(vehiculo4);

console.log("\n=== VALIDACIÓN DE PLACAS ===");
console.log(`${vehiculo1.getPlaca} es válida: ${vehiculo1.validarPlaca()}`);
console.log(`${vehiculo2.getPlaca} es válida: ${vehiculo2.validarPlaca()}`);

console.log("\n=== INFORMACIÓN COMPLETA ===");
console.log(vehiculo1.obtenerInfoCompleta());
console.log(vehiculo2.obtenerInfoCompleta());

console.log("\n=== VERIFICACIÓN DE COMPATIBILIDAD CON CELDAS ===");
console.log(`${vehiculo1.getPlaca} puede usar celda de carro: ${vehiculo1.puedeUsarCelda("carro")}`);
console.log(`${vehiculo2.getPlaca} puede usar celda de moto: ${vehiculo2.puedeUsarCelda("moto")}`);
console.log(`${vehiculo1.getPlaca} puede usar celda de discapacitado: ${vehiculo1.puedeUsarCelda("discapacitado")}`);


const vehiculos = [vehiculo1, vehiculo2, vehiculo3, vehiculo4];

console.log("\n=== GESTIÓN DE VEHÍCULOS ===");
console.log(`Total de vehículos: ${vehiculos.length}`);
console.log(`Vehículos activos: ${vehiculos.filter(v => v.getActivo).length}`);