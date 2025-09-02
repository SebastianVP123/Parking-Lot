import Celda from "./Celda.js";

const celda1 = new Celda(1, "carro", "disponible", "Piso 1");
const celda2 = new Celda(2, "moto", "disponible", "Piso 1");
const celda3 = new Celda(3, "carro", "ocupado", "Piso 2");
const celda4 = new Celda(4, "discapacitado", "disponible", "Piso 1");
const celda5 = new Celda(5, "moto", "disponible", "Piso 2");
const celda6 = new Celda(6, "carro", "disponible", "Piso 3");

console.log("=== CELDAS CREADAS ===");
console.log(celda1);
console.log(celda2);
console.log(celda3);
console.log(celda4);
console.log(celda5);
console.log(celda6);

console.log("\n=== TARIFAS POR TIPO DE CELDA ===");
console.log(`Celda ${celda1.getId} (${celda1.getTipo}): ${celda1.calcularTarifa()}`);
console.log(`Celda ${celda2.getId} (${celda2.getTipo}): ${celda2.calcularTarifa()}`);
console.log(`Celda ${celda4.getId} (${celda4.getTipo}): ${celda4.calcularTarifa()}`);

console.log("\n=== OCUPACIÓN DE CELDAS ===");
const vehiculoEjemplo = { id: 1, placa: "ABC123" };
console.log(`Intentando ocupar celda ${celda1.getId}: ${celda1.ocuparCelda(vehiculoEjemplo)}`);
console.log(`Estado de celda ${celda1.getId}: ${celda1.getEstado}`);

console.log("\n=== LIBERACIÓN DE CELDAS ===");
celda1.liberarCelda();
console.log(`Celda ${celda1.getId} liberada. Estado: ${celda1.getEstado}`);

const celdas = [celda1, celda2, celda3, celda4, celda5, celda6];

console.log("\n=== ESTADÍSTICAS DEL PARQUEADERO ===");
console.log(`Total de celdas: ${celdas.length}`);
console.log(`Celdas disponibles: ${celdas.filter(c => c.getEstado === "disponible").length}`);
console.log(`Celdas ocupadas: ${celdas.filter(c => c.getEstado === "ocupado").length}`);
console.log(`Celdas para carros: ${celdas.filter(c => c.getTipo === "carro").length}`);
console.log(`Celdas para motos: ${celdas.filter(c => c.getTipo === "moto").length}`);
console.log(`Celdas para discapacitados: ${celdas.filter(c => c.getTipo === "discapacitado").length}`);