import ReporteIncidencia from "./ReporteIncidencia.js";


const fechaAyer = new Date();
fechaAyer.setDate(fechaAyer.getDate() - 1);

const fechaHace3Dias = new Date();
fechaHace3Dias.setDate(fechaHace3Dias.getDate() - 3);


const reporte1 = new ReporteIncidencia(1, 1, fechaAyer, true, "Vehículo reubicado correctamente");
const reporte2 = new ReporteIncidencia(2, 2, new Date(), false, "Esperando equipo de limpieza");
const reporte3 = new ReporteIncidencia(3, 3, fechaHace3Dias, false, "Vehículo aún en el lugar");
const reporte4 = new ReporteIncidencia(1, 4, new Date(), false, "Reportado hace una hora");

console.log("=== REPORTES DE INCIDENCIA CREADOS ===");
console.log(reporte1);
console.log(reporte2);
console.log(reporte3);

console.log("\n=== TIEMPO TRANSCURRIDO ===");
console.log(`Reporte vehículo ${reporte1.getVEHICULO_id}: ${reporte1.obtenerTiempoTranscurrido()}`);
console.log(`Reporte vehículo ${reporte2.getVEHICULO_id}: ${reporte2.obtenerTiempoTranscurrido()}`);
console.log(`Reporte vehículo ${reporte3.getVEHICULO_id}: ${reporte3.obtenerTiempoTranscurrido()}`);

console.log("\n=== VERIFICACIÓN DE URGENCIA ===");
console.log(`Reporte 1 es urgente: ${reporte1.esUrgente()}`);
console.log(`Reporte 2 es urgente: ${reporte2.esUrgente()}`);
console.log(`Reporte 3 es urgente: ${reporte3.esUrgente()}`);

console.log("\n=== RESOLUCIÓN DE INCIDENCIAS ===");
// Resolver una incidencia pendiente
reporte2.resolverIncidencia("Área limpiada y desinfectada");
console.log(`Reporte 2 resuelto: ${reporte2.getResuelto}`);
console.log(`Observaciones: ${reporte2.getObservaciones}`);


const reportesIncidencia = [reporte1, reporte2, reporte3, reporte4];

console.log("\n=== ESTADÍSTICAS DE REPORTES ===");
console.log(`Total de reportes: ${reportesIncidencia.length}`);
console.log(`Reportes resueltos: ${reportesIncidencia.filter(r => r.getResuelto).length}`);
console.log(`Reportes pendientes: ${reportesIncidencia.filter(r => !r.getResuelto).length}`);
console.log(`Reportes urgentes: ${reportesIncidencia.filter(r => r.esUrgente()).length}`);

console.log("\n=== REPORTES POR VEHÍCULO ===");
console.log(`Reportes del vehículo 1: ${reportesIncidencia.filter(r => r.getVEHICULO_id === 1).length}`);
console.log(`Reportes del vehículo 2: ${reportesIncidencia.filter(r => r.getVEHICULO_id === 2).length}`);
console.log(`Reportes del vehículo 3: ${reportesIncidencia.filter(r => r.getVEHICULO_id === 3).length}`);