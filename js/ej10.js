/*10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número 
consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
*/

let filas = parseInt(prompt("Ingrese la cantidad de filas:"));
let columnas = parseInt(prompt("Ingrese la cantidad de columnas:"));
let tabla = "";
let contador = filas * columnas;

for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
        tabla += contador;
        contador--;
    }
    tabla += "\n";
}

alert(tabla);
