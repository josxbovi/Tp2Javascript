let sum = 0;
let input;

while (true) {
    input = prompt("Ingrese un número:");

    if (input === null) {
        break;
    }

    input = Number(input);

    if (isNaN(input)) {
        alert("Debe ingresar un número válido.");
        continue;
    }

    sum += input;
}

alert(`La suma total de los números ingresados es: ${sum}`);
