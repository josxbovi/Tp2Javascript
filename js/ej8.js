/*
8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
*/

let numero = parseInt(prompt("Introduce un número entre 1 y 50:"));
let piramide2 = "";
if (numero > 0 && numero <= 50) {
    for (let i = 1; i <= numero; i++) {
        for (let j = 1; j <= i; j++) {
            piramide2 += j;
        }
        piramide2 += "\n";
    }
    alert(piramide2);
} else {
    alert("El número introducido no es válido.");
}

