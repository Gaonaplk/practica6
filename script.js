document.addEventListener('DOMContentLoaded', function () {
    // Problema 1: Inputs para las 7 calificaciones
    const contenedor1 = document.getElementById('inputs-promedio');
    for (let i = 1; i <= 7; i++) {
        contenedor1.innerHTML += `
            <label for="calif${i}">Calificación ${i}:</label>
            <input type="number" id="calif${i}" min="0" max="10"><br>
        `;
    }

    // Problema 2: Inputs para los 10 números positivos
    const contenedor2 = document.getElementById('inputs-positivos');
    for (let i = 1; i <= 10; i++) {
        contenedor2.innerHTML += `
            <label for="numPos${i}">Número ${i}:</label>
            <input type="number" id="numPos${i}"><br>
        `;
    }

    // Problema 3: Inputs para los 20 números a clasificar
    const contenedor3 = document.getElementById('inputs-tipos');
    for (let i = 1; i <= 20; i++) {
        contenedor3.innerHTML += `
            <label for="numTipo${i}">Número ${i}:</label>
            <input type="number" id="numTipo${i}"><br>
        `;
    }

    // Problema 4: Inputs para registrar ventas
    const contenedor4 = document.getElementById('inputs-ventas');
    contenedor4.innerHTML = `
        <label for="clientes">Número de clientes:</label>
        <input type="number" id="clientes" min="1"><br>
    `;
});

// Función para calcular el promedio de las 7 calificaciones (Problema 1)
function calcularPromedio7() {
    let total = 0;
    for (let i = 1; i <= 7; i++) {
        let calificacion = parseFloat(document.getElementById(`calif${i}`).value);
        if (!isNaN(calificacion)) {
            total += calificacion;
        }
    }
    let promedio = total / 7;
    document.getElementById('resultado1').innerHTML = `El promedio es: ${promedio.toFixed(2)}`;
}

// Función para mostrar los números positivos (Problema 2)
function mostrarNumerosPositivos() {
    let positivos = [];
    for (let i = 1; i <= 10; i++) {
        let numero = parseFloat(document.getElementById(`numPos${i}`).value);
        if (!isNaN(numero) && numero > 0) {
            positivos.push(numero);
        }
    }
    document.getElementById('resultado2').innerHTML = `Números positivos: ${positivos.join(', ')}`;
}

// Función para contar positivos, negativos y neutros (Problema 3)
function contarTipos() {
    let positivos = 0, negativos = 0, neutros = 0;
    for (let i = 1; i <= 20; i++) {
        let numero = parseFloat(document.getElementById(`numTipo${i}`).value);
        if (!isNaN(numero)) {
            if (numero > 0) positivos++;
            else if (numero < 0) negativos++;
            else neutros++;
        }
    }
    document.getElementById('resultado3').innerHTML = `Positivos: ${positivos}, Negativos: ${negativos}, Neutros: ${neutros}`;
}

// Función para registrar las ventas de los clientes (Problema 4)
function registrarVentas() {
    let totalVentas = 0;
    let clientes = parseInt(document.getElementById('clientes').value);
    if (isNaN(clientes) || clientes < 1) {
        alert("Por favor, ingresa un número válido de clientes.");
        return;
    }
    for (let i = 1; i <= clientes; i++) {
        let monto = parseFloat(prompt(`Monto de la compra del cliente ${i}:`));
        if (!isNaN(monto) && monto > 0) {
            totalVentas += monto;
        } else {
            alert("Monto inválido. Intenta de nuevo.");
            i--; // Decrementa para pedir el monto nuevamente
        }
    }
    document.getElementById('resultado4').innerHTML = `Total de ventas: $${totalVentas.toFixed(2)}<br>Clientes atendidos: ${clientes}`;
}
