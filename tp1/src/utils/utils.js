import fs from 'fs';
//const assert = require('assert');
//intente agregar const fs = require('fs'); y no m dejo



export function readFileAsString(rutaArchivo) {
    if (!fs.existsSync(rutaArchivo)){
        console.error(`El archivo ${rutaArchivo} no existe.`);
        return null;
    } 
    try {
        const contenido = fs.readFileSync(rutaArchivo, { encoding: 'utf-8' });
        return contenido;
    } catch (e) {
        console.error(`No se pudo leer el archivo: ${e.message}`);
        return null;
    }
}

export function saveTextOnFile(rutaArchivo, contenido, crear) {
    const archivoExiste = fs.existsSync(rutaArchivo);
    if (!archivoExiste && !crear) {
        throw new Error("Archivo inexistente y creación no permitida.");
        return false
    }
    fs.writeFileSync(rutaArchivo, contenido);
    return true;
}

export function convertStringToArray(texto, separador) {
    console.log(texto)
    const partes = texto.split(separador);
    const resultado = [];
    for (const parte of partes) {
        const numero = Number(parte.trim());
        if (!Number.isNaN(numero)) {
            resultado.push(numero);
        }
    }
    return resultado;
}

export function convertArrayToString(array, separador) {
    console.log(array)
    return array.join(separador);
}

export function mergeArrays(a, b) {
    console.log(a)
    console.log(b)
    const set = new Set();
    [...a, ...b].forEach(n => set.add(n));
    return Array.from(set).sort((x, y) => x - y);
}

export function mergeNArrays(arrays) {
    return [...new Set(arrays.flat())].sort((a, b) => a - b);
}