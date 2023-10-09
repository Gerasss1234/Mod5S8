const frase = prompt("Por favor, ingresa una frase:");
const letras = frase.toLowerCase().replace(/[^a-z]/g, ''); // Elimina caracteres no alfabéticos y convierte a minúsculas
const numeroVocales = letras.replace(/[^aeiou]/g, '').length;

document.write("En la frase hay " + numeroVocales + " vocal(es).");
