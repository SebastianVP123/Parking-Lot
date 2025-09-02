import AccesoSalidas from "./AccesoSalidas.js";


const acceso1 = new AccesoSalidas(1, "entrada", new Date(), "Puerta Principal", 0, 1);
const acceso2 = new AccesoSalidas(2, "salida", new Date(), "Puerta Principal", 120, 1);
const acceso3 = new AccesoSalidas(3, "entrada", new Date(), "Puerta Lateral", 0, 2);
const acceso4 = new AccesoSalidas(4, "entrada", new Date(), "Puerta Principal", 0, 3);

console.log("=== REGISTROS DE ACCESO CREADOS ===");
console.log(acceso1);
console.log(acceso2);
console.log(acceso3);

console.log("\n=== CÁLCULO DE COSTOS ===");
console.log(`Acceso ${acceso2.getid} - Costo por ${acceso2.gettiempo_estadia} minutos: $${acceso2.calcularCosto()}`);

console.log("\n=== REGISTRO DE NUEVAS ENTRADAS ===");
const nuevoAcceso = new AccesoSalidas(5, "", "", "Puerta Principal", 0, 4);
nuevoAcceso.registrarEntrada();
console.log(`Nuevo acceso registrado:`);
console.log(`- Movimiento: ${nuevoAcceso.getmovimiento}`);
console.log(`- Fecha/Hora: ${nuevoAcceso.getfecha_hora}`);

console.log("\n=== SIMULACIÓN DE SALIDA ===");

nuevoAcceso.settiempo_estadia = 90;
nuevoAcceso.setmovimiento = "salida";
console.log(`Salida registrada:`);
console.log(`- Movimiento: ${nuevoAcceso.getmovimiento}`);
console.log(`- Tiempo de estadía: ${nuevoAcceso.gettiempo_estadia} minutos`);
console.log(`- Costo: $${nuevoAcceso.calcularCosto()}`);


const registrosAcceso = [acceso1, acceso2, acceso3, acceso4, nuevoAcceso];

console.log("\n=== ESTADÍSTICAS DE ACCESO ===");
console.log(`Total de registros: ${registrosAcceso.length}`);
console.log(`Entradas registradas: ${registrosAcceso.filter(a => a.getmovimiento === "entrada").length}`);
console.log(`Salidas registradas: ${registrosAcceso.filter(a => a.getmovimiento === "salida").length}`);

console.log("\n=== REGISTROS POR VEHÍCULO ===");
console.log(`Registros del vehículo 1: ${registrosAcceso.filter(r => r.getVEHICULO_id === 1).length}`);
console.log(`Registros del vehículo 2: ${registrosAcceso.filter(r => r.getVEHICULO_id === 2).length}`);
console.log(`Registros del vehículo 3: ${registrosAcceso.filter(r => r.getVEHICULO_id === 3).length}`);