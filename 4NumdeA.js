const frase = prompt("Por favor, ingresa una frase:");
const letraA = "a";
const contarA = frase.split(letraA).length - 1;

document.write("La letra 'a' aparece " + contarA + " veces en la frase.");
