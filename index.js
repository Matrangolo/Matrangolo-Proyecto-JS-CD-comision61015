// ==  Es igual
// === Es estrictamente igual
// != Es distinto
// !== Es estrictamente distinto
// <, <=, >, >= Menor, menor o igual, mayor, mayor o igual
// && Operador and (y)
// || Operador or (o)
// ! Operador not (no)

//CUIDADO CON `` Y ""


console.log("Ingreso"); //probamos la consola

function armarEquipo() {
    let continuar = true;

    while (continuar) {
        const equipo = []; // Creamos un vacio para agregar los datos del equipo.

        const nombreEquipo = prompt("Ingrese el nombre del equipo:"); // Usuario tiene que agregar nombre del equipo
        if (nombreEquipo === null || nombreEquipo === "") { // Verificar si ingresa un nombre o cancela
            alert("Por favor, ingrese un nombre para el equipo."); // Para alertar si no agrega nada. 
            continue;
        }

        equipo.push(nombreEquipo); // Para agregarr el nombre del equipo.

        for (let i = 1; i <= 5; i++) { // Me sirve para ingresar los 5 usuarios del equipo (este caso lo usamos para nombreJUgador y posicion)
            let nombreJugador;
            let posicion; //vamos a usar arquero, defensor, mediocampista y delantero

            while (!nombreJugador) { 
                nombreJugador = prompt(`Ingrese el nombre del jugador ${i}:`); // Le pedimos al usuario su nombre o el de otro jugador
                if (nombreJugador === null || nombreJugador === "") { // Verificar si ingresa un nombre o cancela (lo mismo que antes)
                    alert("Por favor, ingrese un nombre para el jugador."); // Para alertar si no agrega nada. (lo mismo que antes)
                }
            }

        do {
            posicion = prompt(`Ingrese la posición del jugador ${i} (Arquero, Defensor, Mediocampista, Delantero):`); // Le pedimos al usuario la posicion del jugador que acaba de agregar.
            if (posicion === null) { // Si el usuario cancela la entrada
                alert("CANCELADO, ingrese una posición."); // Muestra una alerta de cancelacion
                continue; // Continua con la proxima iteracion del bucle
            }
            // Verificar si la posición es válida
            if (
                posicion === "arquero" ||
                posicion === "defensor" ||
                posicion === "mediocampista" ||
                posicion === "delantero" ||
                posicion === "Arquero" ||
                posicion === "Defensor" ||
                posicion === "Mediocampista" ||
                posicion === "Delantero" ||
                posicion === "ARQUERO" ||
                posicion === "DEFENSOR" ||
                posicion === "MEDIOCAMPISTA" ||
                posicion === "DELANTERO" 
                ) {
                break; // Sale del bucle si la posición es válida.
            } else {
                alert("Por favor, ingrese una posición valida (Arquero, Defensor, Mediocampista, Delantero).");
            }
        } while (true);
        
        equipo.push({ nombre: nombreJugador, posicion }); // Agrega los datos del jugador (nombre y posicion).
    }

        let equipoInfo = `Equipo: ${equipo[0]}.  `; // Crea la cadena con el nombre del equipo.
        equipoInfo += "Jugadores: - ";
        for (let i = 1; i <= 5; i++) { 
            equipoInfo += ` ${equipo[i].nombre} : ${equipo[i].posicion}. `; 
            }// Agrega los nombres y posiciones de los jugadores a la cadena.
        alert(equipoInfo); // Muestra una alerta con la informacion del equipo y los jugadores. (Al final de todo)

        const respuesta = prompt("¿Desea armar otro equipo? (Sí/No)").toLowerCase(); // Para poder agregar otro equipo si el usuario lo desea
        if (respuesta !== "sí" && respuesta !== "si") { // Verifica la respuesta del usuario para ver si sigue armando otro equipo.
            continuar = false; // Si la respuesta no es si (no), finaliza el proceso.
        }
    }
}

//armarEquipo(); // Llama a la funcion para iniciar el proceso , pero como usamos una prueba de boton, ahora no la usamos




//!!!!!!PRUEBA!!!!!! BOTON PARA EMPEZAR EL SIMULADOR Y MOSTRAR LO QUE EL USUARIO PONE (si no funciona acordarse de eliminarlo)
document.addEventListener("DOMContentLoaded", function () {
    const botonDeComenzar = document.getElementById("botonDeComenzar");
    const equipoInfoDiv = document.getElementById("resultado");
    const infoDeEquipoText = document.getElementById("infoDeEquipo");

    botonDeComenzar.addEventListener("click", function() {
        const infoDeEquipo = armarEquipo();
    });
});

