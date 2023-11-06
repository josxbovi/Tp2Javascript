/*17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.*/

let texto = prompt("Ingrese un texto:");
let posicion = -1;

for (let i = 0; i < texto.length; i++) {
    if (texto.charAt(i) == "a" || texto.charAt(i) == "e" || texto.charAt(i) == "i" || texto.charAt(i) == "o" || texto.charAt(i) == "u") {
        posicion = i;
        break;
    }
}

if (posicion != -1) {
    alert("La primera vocal está en la posición " + posicion + ".");
} else {
    alert("No se encontraron vocales.");
}

