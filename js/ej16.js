/*16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.*/

let texto6 = prompt("Ingrese un texto:");
let textoInvertido = "";

for (let i = texto6.length - 1; i >= 0; i--) {
    textoInvertido += texto6.charAt(i);
}

alert(textoInvertido);