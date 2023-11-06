/*13- Realiza un script que pida un texto y lo muestre en mayúsculas.*/

let texto1 = prompt("Ingrese un texto:");
let textoMayusculas = "";

for (let i = 0; i < texto1.length; i++) {
    textoMayusculas += texto1.charAt(i).toUpperCase();
}

alert(textoMayusculas);

