import HistorialParqueo from "./HistorialParqueo.js";


const fechaAyer = new Date();
fechaAyer.setDate(fechaAyer.getDate() - 1);

const fechaHace2Horas = new Date();
fechaHace2Horas.setHours(fechaHace2Horas.getHours() - 2);


const historial1 = new HistorialParqueo(1, 1, fechaAyer, new Date(), 4000);
const historial2 = new HistorialParqueo(2, 2, fechaHace2Horas);
const historial3 = new HistorialParqueo(3, 3, new Date());
const historial4 = new HistorialParqueo(1, 4, fechaAyer, new Date(), 6000);

console.log("=== HISTORIAL DE PARQUEO CREADO ===");
console.log(historial1);
console.log(historial2);
console.log(historial3);

+
console.log("\n=== CÁLCULO DE DURACIÓN ===");
console.log(`Historial celda ${historial1.getCELDA_id} - Duración: ${historial1.calcularDuracion()} minutos`);
console.log(`Historial celda ${historial2.getCELDA_id} - Duración: ${historial2.calcularDuracion()} minutos`);

console.log("\n=== ESTADO DE PARQUEO ===");
console.log(`Vehículo ${historial1.getVEHICULO_id} está activo: ${historial1.estaActivo()}`);
console.log(`Vehículo ${historial2.getVEHICULO_id} está activo: ${historial2.estaActivo()}`);
console.log(`Vehículo ${historial3.getVEHICULO_id} está activo: ${historial3.estaActivo()}`);

console.log("\n=== REGISTRO DE SALIDAS ===");

historial2.registrarSalida(2500);
console.log(`Salida registrada para vehículo ${historial2.getVEHICULO_id}:`);
console.log(`- Costo: ${historial2.costo}`);
console.log(`- Duración: ${historial2.calcularDuracion()} minutos`);


const historiales = [historial1, historial2, historial3, historial4];

console.log("\n=== ESTADÍSTICAS DEL HISTORIAL ===");
console.log(`Total de registros: ${historiales.length}`);
console.log(`Vehículos actualmente parqueados: ${historiales.filter(h => h.estaActivo()).length}`);
console.log(`Registros completados: ${historiales.filter(h => !h.estaActivo()).length}`);


const ingresosTotales = historiales
  .filter(h => !h.estaActivo())
  .reduce((total, h) => total + h.costo, 0);

console.log(`\n=== INGRESOS TOTALES: $${ingresosTotales} ===`);