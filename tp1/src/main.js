import { readFileAsString, saveTextOnFile,convertStringToArray, convertArrayToString, mergeArrays, mergeNArrays} from './utils/utils.js';

const pathArchivoTxt = 'C:/Users/Fernando/Desktop/manu_actual/ORT/2do1cuatri/TP2/repository-javaScript/trabajos_practicos/tp1/src/resources/archivo.txt';
 

console.log('LLAMANDO A LA FUNCION readFileAsString');
console.log(readFileAsString(pathArchivoTxt));
console.log('-------------------');
console.log('LLAMANDO A LA FUNCION saveTextOnFile');  
console.log(saveTextOnFile(pathArchivoTxt, 'prueba!!', true));
console.log('-------------------');
console.log('LLAMANDO A LA FUNCION convertStringToArray');
console.log(convertStringToArray('1!2!3!4!5', '!'));
console.log('-------------------');
console.log('LLAMANDO A LA FUNCION convertArrayToString');
console.log(convertArrayToString([1, 2, 3, 4, 5], '!'));
console.log('-------------------');
console.log('LLAMANDO A LA FUNCION mergeArrays');
console.log(mergeArrays([1, 2, 3], [3, 4, 5]));
console.log('-------------------');
console.log('LLAMANDO A LA FUNCION mergeNArrays');
console.log(mergeNArrays([[1, 2, 3], [3, 4, 5], [5, 6, 7]]));
