let nombreAmigos = [];

function agregarAmigos() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    let resultado = document.getElementById("resultado");

    if (nombre === "") {
        resultado.textContent = "⚠️ Por favor, ingresa un nombre válido.";
        resultado.style.color = "red";
        return;
    }

    resultado.textContent = "";
    nombreAmigos.push(nombre);
    limpiarCaja();
    mostrarEnPantalla();
}

function limpiarCaja() {
    let valorCaja = document.querySelector("#amigo");
    valorCaja.value = "";
}

function amigoAlAzar() {
    let resultado = document.getElementById("resultado");

    if (nombreAmigos.length === 0) {
        resultado.textContent = "¡Aún no has agregado ningún amigo!";
        resultado.style.color = "red";
        return;
    }

    let indice = Math.floor(Math.random() * nombreAmigos.length);
    let amigoSeleccionado = nombreAmigos[indice];

    resultado.textContent = `El amigo elegido es: ${amigoSeleccionado}`;
    resultado.style.color = "black";
}

function mostrarEnPantalla(){
    let lista = document.getElementById("listaAmigos");

    let li = document.createElement("li");
    li.textContent = nombreAmigos[nombreAmigos.length - 1];

    lista.appendChild(li);
}
