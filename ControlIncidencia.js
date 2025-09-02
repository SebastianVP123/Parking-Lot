import Incidencia from "./Incidencia.js";


const incidencia1 = new Incidencia(1, "Vehículo mal parqueado", "Vehículo ocupando dos espacios", "media");
const incidencia2 = new Incidencia(2, "Derrame de aceite", "Mancha de aceite en el piso de la celda", "alta");
const incidencia3 = new Incidencia(3, "Vehículo abandonado", "Vehículo lleva más de 48 horas en el mismo lugar", "alta");
const incidencia4 = new Incidencia(4, "Daño en puerta", "Puerta principal no cierra correctamente", "baja");
const incidencia5 = new Incidencia(5, "Falta de iluminación", "Luz del piso 2 no funciona", "media");

console.log("=== INCIDENCIAS CREADAS ===");
console.log(incidencia1);
console.log(incidencia2);
console.log(incidencia3);
console.log(incidencia4);
console.log(incidencia5);

console.log("\n=== PRIORIDADES DE ATENCIÓN ===");
console.log(`${incidencia1.getNombre} - Prioridad: ${incidencia1.obtenerPrioridad()}`);
console.log(`${incidencia2.getNombre} - Prioridad: ${incidencia2.obtenerPrioridad()}`);
console.log(`${incidencia3.getNombre} - Prioridad: ${incidencia3.obtenerPrioridad()}`);

console.log("\n=== DESCRIPCIONES COMPLETAS ===");
console.log(incidencia1.obtenerDescripcionCompleta());
console.log(incidencia2.obtenerDescripcionCompleta());
console.log(incidencia3.obtenerDescripcionCompleta());

console.log("\n=== GESTIÓN DE ESTADOS ===");
console.log(`Incidencia ${incidencia4.getId} activa: ${incidencia4.getActivo}`);
incidencia4.cambiarEstado();
console.log(`Incidencia ${incidencia4.getId} después de cambiar estado: ${incidencia4.getActivo}`);


const incidencias = [incidencia1, incidencia2, incidencia3, incidencia4, incidencia5];

console.log("\n=== ESTADÍSTICAS DE INCIDENCIAS ===");
console.log(`Total de incidencias: ${incidencias.length}`);
console.log(`Incidencias activas: ${incidencias.filter(i => i.getActivo).length}`);
console.log(`Incidencias de alta prioridad: ${incidencias.filter(i => i.obtenerPrioridad() === 1).length}`);
console.log(`Incidencias de media prioridad: ${incidencias.filter(i => i.obtenerPrioridad() === 2).length}`);
console.log(`Incidencias de baja prioridad: ${incidencias.filter(i => i.obtenerPrioridad() === 3).length}`);


function buscarIncidenciasPorGravedad(gravedad) {
  return incidencias.filter(incidencia => incidencia.getGravedad === gravedad && incidencia.getActivo);
}

console.log("\n=== INCIDENCIAS POR GRAVEDAD ===");
console.log(`Incidencias críticas: ${buscarIncidenciasPorGravedad("alta").length}`);
console.log(`Incidencias medias: ${buscarIncidenciasPorGravedad("media").length}`);
console.log(`Incidencias menores: ${buscarIncidenciasPorGravedad("baja").length}`);