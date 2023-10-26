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




const ciudadPartidaInput = document.getElementById("ciudad_partida");
const ciudadLlegadaInput = document.getElementById("ciudad_llegada");
const fechaIdaInput = document.getElementById("fecha_ida");
const fechaVueltaInput = document.getElementById("fecha_vuelta");
const pasajerosSelect = document.getElementById("pasajeros");
const enviarButton = document.getElementById("enviar");

const sugerenciasPartida = document.getElementById("sugerencias_partida");
const sugerenciasLlegada = document.getElementById("sugerencias_llegada");

ciudadPartidaInput.addEventListener("input", function() {
    const textoIngresado = ciudadPartidaInput.value.toLowerCase();
    const sugerenciasFiltradas = provincias.filter(provincia =>
        provincia.toLowerCase().includes(textoIngresado)
    );

    mostrarSugerencias(sugerenciasFiltradas, sugerenciasPartida, ciudadPartidaInput);
});

ciudadLlegadaInput.addEventListener("input", function() {
    const textoIngresado = ciudadLlegadaInput.value.toLowerCase();
    const sugerenciasFiltradas = provincias.filter(provincia =>
        provincia.toLowerCase().includes(textoIngresado)
    );

    mostrarSugerencias(sugerenciasFiltradas, sugerenciasLlegada, ciudadLlegadaInput);
});

enviarButton.addEventListener("click", function() {
    const fechaIda = new Date(fechaIdaInput.value);
    const fechaVuelta = new Date(fechaVueltaInput.value);

    if (fechaIda > fechaVuelta) {
        alert("La fecha de ida no puede ser posterior a la fecha de vuelta.");
        fechaIdaInput.value = "";
    } else {
        const ciudadPartida = ciudadPartidaInput.value;
        const ciudadLlegada = ciudadLlegadaInput.value;
        const numPasajeros = pasajerosSelect.value;
        alert(`Ciudad de Partida: ${ciudadPartida}\nCiudad de Llegada: ${ciudadLlegada}\nFecha de Ida: ${fechaIdaInput.value}\nFecha de Vuelta: ${fechaVueltaInput.value}\nNúmero de Pasajeros: ${numPasajeros}`);
    }
});

function mostrarSugerencias(sugerenciasFiltradas, sugerenciasElement, inputElement) {
    sugerenciasElement.innerHTML = "";
    sugerenciasFiltradas.forEach(sugerencia => {
        const div = document.createElement("div");
        div.textContent = sugerencia;
        div.addEventListener("click", function() {
            inputElement.value = sugerencia;
            sugerenciasElement.innerHTML = "";
        });
        sugerenciasElement.appendChild(div);
    });
}
