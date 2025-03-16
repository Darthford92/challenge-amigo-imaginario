// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombreAmigos = [];

function agregarAmigos(amigo) {
    let input = document.getElementById("amigo");
    let nombre = input.value;
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    nombreAmigos.push(nombre);
    limpiarCaja();
    mostrarEnPantalla();
}

function limpiarCaja() {
    let valorCaja = document.querySelector("#amigo");
    valorCaja.value = "";
}

// Funcion que busca un amigo al azar seleccionandolo un número del indice en el arreglo Let nombreAmigos, también tirá un alert si no hay amigos agregados y sale de la funcion
function amigoAlAzar() {
    if (nombreAmigos.length === 0) {
        alert("¡Aún no has agregado ningún amigo!");
        return;
    }
    let indice = Math.floor(Math.random() * nombreAmigos.length);
    alert("El amigo elegido es: " + nombreAmigos[indice]);
}

function mostrarEnPantalla(){
    let lista = document.getElementById("listaAmigos");

    let li = document.createElement("li");
    li.textContent = nombreAmigos[nombreAmigos.length - 1];

    lista.appendChild(li);
}
