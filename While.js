let numero = Number(prompt("Ingrese un número:"));
let contenedor = document.getElementById("resultado");

while (numero <= 5) {
  contenedor.innerHTML += numero + "<br>";
  numero++;
}