const num1 = parseFloat(prompt("Por favor, ingresa el primer número:"));
const num2 = parseFloat(prompt("Por favor, ingresa el segundo número:"));

if (num1 > num2) {
  document.write("El mayor número es: " + num1);
} else if (num2 > num1) {
  document.write("El mayor número es: " + num2);
} else {
  document.write("Los números son iguales.");
}
