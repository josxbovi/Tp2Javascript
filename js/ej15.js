/*15- Realiza un script que cuente el número de vocales que tiene un texto.*/

let texto4 = prompt("Ingrese un texto:");
let contador = 0;

for (let i = 0; i < texto4.length; i++) {
    if (texto4.charAt(i) == "a" || texto4.charAt(i) == "e" || texto4.charAt(i) == "i" || texto4.charAt(i) == "o" || texto4.charAt(i) == "u") {
        contador++;
    }
}

alert("El texto ingresado tiene " + contador + " vocales.");

