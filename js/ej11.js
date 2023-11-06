/*11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math()
*/

let nombre1 = prompt("Ingrese el nombre de la primera persona:");
let edad1 = parseInt(prompt("Ingrese la edad de la primera persona:"));
let nombre2 = prompt("Ingrese el nombre de la segunda persona:");
let edad2 = parseInt(prompt("Ingrese la edad de la segunda persona:"));
let nombre3 = prompt("Ingrese el nombre de la tercera persona:");
let edad3 = parseInt(prompt("Ingrese la edad de la tercera persona:"));

let mayor = nombre1;
let edadMayor = edad1;

if (edad2 > edadMayor) {
    mayor = nombre2;
    edadMayor = edad2;
}
if (edad3 > edadMayor) {
    mayor = nombre3;
    edadMayor = edad3;
}

alert(`La persona de mayor edad es ${mayor} con ${edadMayor} años.`);