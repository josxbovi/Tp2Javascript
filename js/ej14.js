/*14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. 
Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.*/

let texto = prompt("Ingrese un texto:");
let textoConGuiones = "";

for (let i = 0; i < texto.length; i++) {
    textoConGuiones += texto.charAt(i) + "-";
}

alert(textoConGuiones);

