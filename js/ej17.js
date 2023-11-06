/*17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.*/

let texto8 = prompt("Ingrese un texto:");
let posicion = -1;

for (let i = 0; i < texto8.length; i++) {
    if (texto8.charAt(i) == "a" || texto8.charAt(i) == "e" || texto8.charAt(i) == "i" || texto8.charAt(i) == "o" || texto8.charAt(i) == "u") {
        posicion = i;
        break;
    }
}

if (posicion != -1) {
    alert("La primera vocal está en la posición " + posicion+1 + ".");
} else {
    alert("No se encontraron vocales.");
}