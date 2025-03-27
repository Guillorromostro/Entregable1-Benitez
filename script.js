const USD = 1300;
const EUR = 1500;
const YEN = 7;

const monedas = [
    { nombre: "DOLAR", valor: USD }, 
    { nombre: "EURO", valor: EUR }, 
    { nombre: "YEN", valor: YEN }
];

function convertir(pesos, moneda) {
    return pesos / moneda.valor;
}

function iniciarConversor() {
    let pesos = parseFloat(prompt("Ingrese la cantidad de pesos argentinos a convertir:"));
    
    if (isNaN(pesos) || pesos <= 0) {
        alert("Valor inválido, ingrese un número válido.");
        return;
    }

    let mensaje = "Elija la moneda a la que desea convertir: \n";
    for (let i = 0; i < monedas.length; i++) {
        mensaje += `${i + 1}. ${monedas[i].nombre}\n`;
    }

    let opcion = parseInt(prompt(mensaje));

    if (isNaN(opcion) || opcion < 1 || opcion > monedas.length) {
        alert("Opción inválida.");
        return;
    }

    let monedaSeleccionada = monedas[opcion - 1];
    let resultado = convertir(pesos, monedaSeleccionada);

    alert(`${pesos} pesos argentinos equivalen a ${resultado.toFixed(2)} ${monedaSeleccionada.nombre}`);
}