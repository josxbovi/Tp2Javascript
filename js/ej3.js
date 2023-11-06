/*Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las 
cadenas concatenadas con un guión*/

let cadena = "";
let continuar = true;

while (continuar) {
    let input = prompt("Ingrese una cadena de texto");
    if (input === null) {
        continuar = false;
    } else {
        cadena += input + "-";
    }
}

if (cadena.length > 0) {
    cadena = cadena.slice(0, -1);
    confirm(cadena);
}

