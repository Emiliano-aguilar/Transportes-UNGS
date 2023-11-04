// Array de provincias de Argentina (puedes reemplazarlo con tus propios datos)
const provincias = [
    "Buenos Aires",
    "Catamarca",
    "Chaco",
    "Chubut",
    "Córdoba",
    "Corrientes",
    "Entre Ríos",
    "Formosa",
    "Jujuy",
    "La Pampa",
    "La Rioja",
    "Mendoza",
    "Misiones",
    "Neuquén",
    "Río Negro",
    "Salta",
    "San Juan",
    "San Luis",
    "Santa Cruz",
    "Santa Fe",
    "Santiago del Estero",
    "Tierra del Fuego",
    "Tucumán"
];
//variables capturadas del HTML
const ciudadPartidaInput = document.getElementById("ciudad_partida");
const ciudadLlegadaInput = document.getElementById("ciudad_llegada");
const fechaIdaInput = document.getElementById("fecha_ida");
const fechaVueltaInput = document.getElementById("fecha_vuelta");
const pasajerosSelect = document.getElementById("pasajeros");
const enviarButton = document.getElementById("enviar");

const sugerenciasPartida = document.getElementById("sugerencias_partida");
const sugerenciasLlegada = document.getElementById("sugerencias_llegada");
const pasajesDisponibles = document.getElementById("pasajes_disponibles");

//mostrar autocompletado para cuidadPartida
ciudadPartidaInput.addEventListener("input", function () {
    const textoIngresado = ciudadPartidaInput.value.toLowerCase();
    const sugerenciasFiltradas = provincias.filter(provincia =>
        provincia.toLowerCase().includes(textoIngresado)
    );

    mostrarSugerencias(sugerenciasFiltradas, sugerenciasPartida, ciudadPartidaInput);
});
//mostrar autocompletado para cuidadIda
ciudadLlegadaInput.addEventListener("input", function () {
    const textoIngresado = ciudadLlegadaInput.value.toLowerCase();
    const sugerenciasFiltradas = provincias.filter(provincia =>
        provincia.toLowerCase().includes(textoIngresado)
    );

    mostrarSugerencias(sugerenciasFiltradas, sugerenciasLlegada, ciudadLlegadaInput);
});
// enviar y genera el pasaje que deseamos
enviarButton.addEventListener("click", function () {
    const fechaIda = new Date(fechaIdaInput.value);
    const fechaVuelta = new Date(fechaVueltaInput.value);
    const fechaOperativa = new Date(); // Obtener la fecha operativa actual


    // chequea que la fecha de ida sea mayor a la fecha de vuelta
    if (fechaIda > fechaVuelta) {
        alert("La fecha de ida no puede ser posterior a la fecha de vuelta.");
        fechaIdaInput.value = "";
    } else if (
        ciudadPartidaInput.value === "" ||
        ciudadLlegadaInput.value === "" ||
        fechaIdaInput.value === "" ||
        fechaVueltaInput.value === ""
    ) {
        alert("Por favor, completa todos los campos obligatorios.");
        //chequea que la fecha de ida sea mayor a la fecha del dia
    } else if (fechaIda < fechaOperativa) {
        alert("La fecha de ida no puede ser anterior a la fecha operativa.");
        fechaIdaInput.value = "";
    } else {
        // Resto del código para crear la lista
    }
});

function mostrarSugerencias(sugerenciasFiltradas, sugerenciasElement, inputElement) {
    sugerenciasElement.innerHTML = "";
    sugerenciasFiltradas.forEach(sugerencia => {
        const div = document.createElement("div");
        div.textContent = sugerencia;
        div.addEventListener("click", function () {
            inputElement.value = sugerencia;
            sugerenciasElement.innerHTML = "";
        });
        sugerenciasElement.appendChild(div);
    });
}

function precioAleatorio() {
    var min = 12000;
    var max = 35000;
    // Genera un número aleatorio entre min (inclusive) y max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function generarHorarioAleatorio() {
    const hora = agregar0(Math.floor(Math.random() * 24), 2); // Genera una hora aleatoria entre 0 y 23
    const minuto = agregar0(Math.floor(Math.random() * 60), 2); // Genera un minuto aleatorio entre 0 y 59
    return `${hora}:${minuto}`;
}

function agregar0(num, size) {
    // Función para agregar ceros a la izquierda para asegurar que tenga dos dígitos
    let numStr = num.toString();
    while (numStr.length < size) numStr = '0' + numStr;
    return numStr;
}

document.addEventListener('DOMContentLoaded', function () {

    const enviarButton = document.getElementById('enviar');

    enviarButton.addEventListener('click', function () {
        //valores capturados del HTML
        const ciudadPartida = document.getElementById('ciudad_partida').value;
        localStorage.setItem('ciudadPartida', ciudadPartida);
        const ciudadLlegada = document.getElementById('ciudad_llegada').value;
        localStorage.setItem('ciudadLlegada', ciudadLlegada);
        const fechaIda = document.getElementById('fecha_ida').value;
        localStorage.setItem('fechaIda', fechaIda);
        const fechaVuelta = document.getElementById('fecha_vuelta').value;
        localStorage.setItem('fechaVuelta', fechaVuelta);
        const pasajeros = document.getElementById('pasajeros').value;
        localStorage.setItem('pasajeros', pasajeros);



        // valores generados
        var precio = precioAleatorio();
        localStorage.setItem('precio', precio);
        var precioTotal = precio * pasajeros;
        localStorage.setItem('precioTotal', precioTotal);
        const horarioIda = generarHorarioAleatorio();
        localStorage.setItem('horarioIda', horarioIda);
        const horarioVuelta = generarHorarioAleatorio();
        localStorage.setItem('horarioVuelta', horarioIda);




        if (
            ciudadPartida === "" ||
            ciudadLlegada === "" ||
            fechaIda === "" ||
            fechaVuelta === ""
        ) {
            alert("Por favor, completa todos los campos obligatorios.");
        } else {

            pasajesDisponibles.innerHTML = "";
            const cardDiv = document.createElement('div');
            // Crear una única tarjeta con toda la información.
            const btnVerAsientos = document.createElement("button");
            btnVerAsientos.textContent = "Ver asientos"
            btnVerAsientos.setAttribute('class', 'btn btn-primary btnloco');
            btnVerAsientos.id ="ver_asientos";

            cardDiv.classList.add('card', 'mb-3'); // Agregar clases de Bootstrap para la tarjeta
            cardDiv.innerHTML = `
                <div class="card-body">
                    <div>
                        <h5 class="card-title">Detalles del Pasaje</h5>
                        <p><strong>Ciudad de Partida:</strong> ${ciudadPartida}</p>
                        <p><strong>Horario de Partida:</strong> ${horarioIda}</p>
                        <p><strong>Fecha de Ida:</strong> ${fechaIda}</p>
                        <p><strong>Ciudad de Llegada:</strong> ${ciudadLlegada}</p>
                        <p><strong>Horario de Vuelta:</strong> ${horarioVuelta}</p>
                        <p><strong>Fecha de Vuelta:</strong> ${fechaVuelta}</p>
                        <p><strong>Número de Pasajeros:</strong> ${pasajeros}</p>
                        <p><strong>Precio pasaje unitario:</strong> ${precio}</p>
                        <p><strong>Precio pasaje Total:</strong> ${precioTotal}</p>
                    </div>

                </div>`;
            pasajesDisponibles.append(cardDiv);
            pasajesDisponibles.append(btnVerAsientos);

            
            // Agregar un manejador de evento al botón
            btnVerAsientos.addEventListener("click", function () {
                // Especifica la URL a la que deseas redirigir
                var nuevaURL = "venta_pasajes.html";

                // Redirige a la nueva URL
                window.location.href = nuevaURL;
            });




        }
    });
});

