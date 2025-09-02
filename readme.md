# Sistema de Gestión de Parqueadero

Este proyecto implementa un sistema completo de gestión de parqueadero utilizando JavaScript ES6 con clases y módulos. El sistema maneja usuarios, vehículos, celdas de parqueo, accesos, incidencias y reportes.

## Estructura del Proyecto

### Clases del Sistema

#### 1. `Usuario.js`
**Responsabilidad**: Gestionar la información de los usuarios del sistema.

- Almacena datos personales (nombres, apellidos, documento, email, teléfono)
- Maneja perfiles de usuario y estados (activo/inactivo)
- Valida formatos de email y números celulares
- Permite cambio de contraseñas con validaciones

**Métodos principales**:
- `obtenerNombreCompleto()`: Concatena nombres y apellidos
- `validarEmail()`: Verifica formato válido de email
- `cambiarEstado()`: Alterna entre activo/inactivo
- `validarCelular()`: Verifica formato de número celular

#### 2. `PerfilUsuario.js`
**Responsabilidad**: Definir los roles y permisos de los usuarios.

- Define tipos de perfil (Administrador, Operador, Visitante)
- Establece jerarquías de acceso al sistema

**Atributos**:
- `id`: Identificador único del perfil
- `perfil`: Nombre del perfil de usuario

#### 3. `Vehiculo.js`
**Responsabilidad**: Gestionar la información de los vehículos registrados.

- Almacena datos del vehículo (placa, color, modelo, marca, tipo)
- Valida formatos de placas según tipo de vehículo
- Determina compatibilidad con tipos de celdas
- Maneja estados activo/inactivo

**Métodos principales**:
- `validarPlaca()`: Verifica formato de placa según tipo (carro/moto)
- `obtenerInfoCompleta()`: Retorna información completa del vehículo
- `puedeUsarCelda()`: Verifica compatibilidad con tipo de celda

#### 4. `Celda.js`
**Responsabilidad**: Representar espacios de parqueo individuales.

- Gestiona estados de ocupación (disponible/ocupado)
- Calcula tarifas según tipo de celda
- Controla asignación y liberación de espacios
- Maneja tipos especiales (discapacitados)

**Métodos principales**:
- `calcularTarifa()`: Calcula costo según tipo de celda
- `ocuparCelda()`: Asigna vehículo a la celda
- `liberarCelda()`: Libera espacio de parqueo

#### 5. `AccesoSalidas.js`
**Responsabilidad**: Registrar movimientos de entrada y salida de vehículos.

- Documenta entradas y salidas del parqueadero
- Calcula tiempos de estadía
- Determina costos por tiempo transcurrido
- Asocia movimientos con vehículos específicos

**Métodos principales**:
- `registrarEntrada()`: Marca entrada de vehículo
- `registrarSalida()`: Calcula tiempo y registra salida
- `calcularCosto()`: Determina costo por tiempo de estadía

#### 6. `HistorialParqueo.js`
**Responsabilidad**: Mantener histórico completo de parqueos.

- Registra historial completo de uso de celdas
- Calcula duraciones de parqueo
- Gestiona costos finales
- Identifica parqueos activos vs completados

**Métodos principales**:
- `calcularDuracion()`: Calcula tiempo transcurrido
- `registrarSalida()`: Completa registro y calcula costo
- `estaActivo()`: Verifica si el parqueo está en curso

#### 7. `Incidencia.js`
**Responsabilidad**: Gestionar problemas y situaciones especiales.

- Registra incidentes en el parqueadero
- Clasifica por gravedad (alta, media, baja)
- Maneja estados activo/inactivo
- Prioriza atención según gravedad

**Métodos principales**:
- `obtenerPrioridad()`: Asigna prioridad numérica según gravedad
- `cambiarEstado()`: Alterna estado activo/inactivo
- `obtenerDescripcionCompleta()`: Retorna información completa

#### 8. `ReporteIncidencia.js`
**Responsabilidad**: Gestionar reportes y seguimiento de incidencias.

- Documenta reportes de problemas
- Calcula tiempo transcurrido desde reporte
- Identifica reportes urgentes
- Maneja resolución de incidencias

**Métodos principales**:
- `obtenerTiempoTranscurrido()`: Calcula tiempo desde reporte
- `esUrgente()`: Identifica reportes que requieren atención inmediata
- `resolverIncidencia()`: Marca como resuelto con observaciones

#### 9. `PicoPlaca.js`
**Responsabilidad**: Implementar restricciones de circulación vehicular.

- Define reglas de pico y placa por dígito
- Verifica restricciones por día de la semana
- Valida horarios de aplicación
- Controla acceso según último dígito de placa

**Métodos principales**:
- `tieneRestriccionHoy()`: Verifica si placa tiene restricción
- `obtenerNombreDia()`: Convierte número de día a nombre
- `aplicaRestriccion()`: Verifica aplicación por horario

### Archivos de Control

Cada clase tiene su archivo de control correspondiente que demuestra su funcionalidad:

- `ControlUsuario.js`: Demuestra gestión de usuarios y perfiles
- `ControlVehiculo.js`: Muestra registro y validación de vehículos
- `ControlCelda.js`: Prueba ocupación y liberación de celdas
- `ControlAcceso.js`: Simula entradas y salidas
- `ControlHistorialParqueo.js`: Demuestra cálculos de tiempo y costo
- `ControlIncidencia.js`: Muestra gestión de incidentes
- `ControlReporte.js`: Demuestra seguimiento de reportes
- `ControlPicoPlaca.js`: Prueba restricciones vehiculares

## Características del Sistema

### Funcionalidades Principales

1. **Gestión de Usuarios**: Registro, autenticación y perfiles
2. **Control de Vehículos**: Validación de placas y tipos
3. **Administración de Celdas**: Ocupación, tarifas y disponibilidad
4. **Control de Accesos**: Entradas, salidas y cálculo de costos
5. **Manejo de Incidencias**: Reporte y seguimiento de problemas
6. **Restricciones Vehiculares**: Implementación de pico y placa
7. **Reportes y Estadísticas**: Análisis de uso y ingresos

### Tecnologías Utilizadas

- JavaScript ES6+ (Clases, Módulos, Arrow Functions)
- Módulos ES6 (import/export)
- Programación Orientada a Objetos

### Patrones de Diseño Implementados

- **Encapsulación**: Propiedades privadas y métodos públicos
- **Getters/Setters**: Control de acceso a propiedades
- **Composición**: Relaciones entre clases (Usuario-Vehículo, Celda-Vehículo)
- **Validación**: Métodos de verificación de datos

## Cómo Ejecutar el Proyecto

Los archivos de control se ejecutan directamente desde la consola integrada de Visual Studio Code:

```javascript
// En Visual Studio Code:
// 1. Abrir terminal integrada (Ctrl + `)
// 2. Ver resultados en la terminal



**Archivos ejecutables**:
- `ControlCelda.js` - Demuestra gestión de celdas
- `ControlUsuario.js` - Muestra manejo de usuarios  
- `ControlVehiculo.js` - Prueba validación de vehículos
- `ControlAcceso.js` - Simula entradas y salidas
- `ControlHistorialParqueo.js` - Calcula tiempos y costos
- `ControlIncidencia.js` - Gestiona incidentes
- `ControlReporte.js` - Maneja reportes
- `ControlPicoPlaca.js` - Verifica restricciones vehiculares


## Video de Exposición

**Enlace al video**:https://youtu.be/bqVq6xF34Wc



---

