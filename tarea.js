const prompt = require('prompt-sync')();

let matrizPersonas = [];
let seguir = true;

console.log("--- CARGA DE DATOS ---");

// 1. Entrada y 2. Procesamiento
while (seguir) {
    let nombre = prompt("Nombre (o 'finalizar'): ");
    
    if (nombre.toLowerCase() === 'finalizar' || nombre.toLowerCase() === 'terminado') {
        seguir = false;
    } else {
        let edad = parseInt(prompt("Edad: "));
        let nota = parseFloat(prompt("Nota: "));
        
        // Guardamos como una fila de matriz: [nombre, edad, nota]
        matrizPersonas.push([nombre, edad, nota]);
        console.log("Guardado.\n");
    }
}

// 3. Salida
if (matrizPersonas.length > 0) {
    // A. Listado tal cual se cargó
    console.log("\nLISTADO COMPLETO:");
    matrizPersonas.forEach(p => console.log(`${p[0]} - ${p[1]} años - Nota: ${p[2]}`));

    // B. Ordenado por nota (de mayor a menor)
    console.log("\nORDENADO POR NOTA (Mayor a menor):");
    let ordenada = [...matrizPersonas].sort((a, b) => b[2] - a[2]);
    ordenada.forEach(p => console.log(`${p[0]}: ${p[2]}`));

    // C. Promedio
    let suma = matrizPersonas.reduce((acc, p) => acc + p[2], 0);
    let promedio = suma / matrizPersonas.length;
    console.log(`\nPROMEDIO GENERAL: ${promedio.toFixed(2)}`);
} else {
    console.log("No hay datos para mostrar.");
}