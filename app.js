// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombreAmigos = [];

function agregarAmigos(amigo) {

    nombreAmigos.push(amigo);
    
}

// Funcion que busca un amigo al azar seleccionandolo un número del indice en el arreglo Let nombreAmigos, también tirá un alert si no hay amigos agregados y sale de la funcion
function amigoAlAzar(){
    if (nombreAmigos === 0) {
        alert("¡Aún no has agregado ningún amigo!");
        return;
    }
    Math.floor(Math.random() * nombreAmigos.length);
    return nombreAmigos[indice];
}
