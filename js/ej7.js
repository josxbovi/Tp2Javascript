/*7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
*/

let numero = parseInt(prompt("Introduce un número entre 1 y 50:"));
let piramide = "";
if (numero > 0 && numero <= 50) {
    for (let i = numero; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            piramide += i;
        }
        piramide += "\n";
    }
    alert(piramide);
} else {
    alert("El número introducido no es válido.");
}



