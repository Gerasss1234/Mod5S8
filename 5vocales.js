const frase = prompt("Por favor, ingresa una frase:");
const vocales = frase.match(/[aeiouAEIOU]/g);
document.write("Las vocales en la frase son: " + (vocales ? vocales.join(', ') : 'Ninguna'));
