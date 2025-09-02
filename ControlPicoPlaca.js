import PicoPlaca from "./PicoPlaca.js";



const picoPlaca1 = new PicoPlaca(1, "carro", 1, 1); // Lunes, dígito 1
const picoPlaca2 = new PicoPlaca(2, "carro", 2, 1); // Lunes, dígito 2
const picoPlaca3 = new PicoPlaca(3, "carro", 3, 2); // Martes, dígito 3
const picoPlaca4 = new PicoPlaca(4, "carro", 4, 2); // Martes, dígito 4
const picoPlaca5 = new PicoPlaca(5, "carro", 5, 3); // Miércoles, dígito 5
const picoPlaca6 = new PicoPlaca(6, "carro", 6, 3); // Miércoles, dígito 6
const picoPlaca7 = new PicoPlaca(7, "carro", 7, 4); // Jueves, dígito 7
const picoPlaca8 = new PicoPlaca(8, "carro", 8, 4); // Jueves, dígito 8
const picoPlaca9 = new PicoPlaca(9, "carro", 9, 5); // Viernes, dígito 9
const picoPlaca10 = new PicoPlaca(10, "carro", 0, 5); // Viernes, dígito 0

console.log("=== CONFIGURACIÓN PICO Y PLACA CREADA ===");
console.log(picoPlaca1);
console.log(picoPlaca2);
console.log(picoPlaca3);

console.log("\n=== DÍAS DE RESTRICCIÓN ===");
console.log(`Regla ${picoPlaca1.getId}: ${picoPlaca1.obtenerNombreDia()} - Dígito ${picoPlaca1.getNumero}`);
console.log(`Regla ${picoPlaca3.getId}: ${picoPlaca3.obtenerNombreDia()} - Dígito ${picoPlaca3.getNumero}`);
console.log(`Regla ${picoPlaca5.getId}: ${picoPlaca5.obtenerNombreDia()} - Dígito ${picoPlaca5.getNumero}`);

console.log("\n=== VERIFICACIÓN DE RESTRICCIONES ===");
const placasEjemplo = ["ABC123", "XYZ456", "DEF789"];

placasEjemplo.forEach(placa => {
  const ultimoDigito = parseInt(placa.slice(-1));
  const tieneRestriccion = [picoPlaca1, picoPlaca2, picoPlaca3, picoPlaca4, picoPlaca5, 
                           picoPlaca6, picoPlaca7, picoPlaca8, picoPlaca9, picoPlaca10]
    .some(regla => regla.tieneRestriccionHoy(placa));
  
  console.log(`Placa ${placa} (dígito ${ultimoDigito}): ${tieneRestriccion ? 'CON restricción' : 'SIN restricción'}`);
});

console.log("\n=== VERIFICACIÓN DE HORARIOS ===");
console.log(`Restricción aplica a las 7 AM: ${picoPlaca1.aplicaRestriccion(7)}`);
console.log(`Restricción aplica a las 12 PM: ${picoPlaca1.aplicaRestriccion(12)}`);
console.log(`Restricción aplica a las 6 PM: ${picoPlaca1.aplicaRestriccion(18)}`);

// Array para gestionar todas las reglas
const reglasPicoPlaca = [picoPlaca1, picoPlaca2, picoPlaca3, picoPlaca4, picoPlaca5, 
                        picoPlaca6, picoPlaca7, picoPlaca8, picoPlaca9, picoPlaca10];

console.log("\n=== ESTADÍSTICAS PICO Y PLACA ===");
console.log(`Total de reglas: ${reglasPicoPlaca.length}`);
console.log(`Reglas activas: ${reglasPicoPlaca.filter(r => r.getActivo).length}`);
console.log(`Reglas para carros: ${reglasPicoPlaca.filter(r => r.getTipoVehiculo === "carro").length}`);

// Función para verificar si una placa tiene restricción
function verificarRestriccionPlaca(placa) {
  return reglasPicoPlaca.some(regla => regla.tieneRestriccionHoy(placa));
}

console.log("\n=== FUNCIÓN DE VERIFICACIÓN ===");
console.log(`ABC123 tiene restricción hoy: ${verificarRestriccionPlaca("ABC123")}`);
console.log(`XYZ456 tiene restricción hoy: ${verificarRestriccionPlaca("XYZ456")}`);