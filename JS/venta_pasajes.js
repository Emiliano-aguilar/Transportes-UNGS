const botonVolver = document.getElementById('volver_busqueda')
botonVolver.addEventListener("click", function () {
    // Especifica la URL a la que deseas redirigir
    var nuevaURL = "busqueda_pasajes.html";

    // Redirige a la nueva URL
    window.location.href = nuevaURL;
});

document.addEventListener("DOMContentLoaded", function () {

    const ResumenPasaje = document.getElementById("resumen_reserva");
        //cantidad de asientos que puede seleccionar  
        const asientosSelecionables = localStorage.getItem('pasajeros');
        const ciudadPartida = localStorage.getItem('ciudadPartida');
        const ciudadLlegada = localStorage.getItem('ciudadLlegada');
        const fechaIda = localStorage.getItem('fechaIda');
        const fechaVuelta = localStorage.getItem('fechaVuelta');
        const precio = localStorage.getItem('precio');
        const precioTotal = localStorage.getItem('precioTotal');
        const horarioIda = localStorage.getItem('horarioIda');
        const horarioVuelta = localStorage.getItem('horarioVuelta');

    ResumenPasaje.innerHTML = "";
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card', 'mb-3'); // Agregar clases de Bootstrap para la tarjeta
    cardDiv.innerHTML = `
        <div class="card-body">
            <h1> Resumen de tu Reserva</h1>
            <div>
                <h5 class="card-title">Detalles del Pasaje</h5>
                <p><strong>Ciudad de Partida:</strong> ${ciudadPartida}</p>
                <p><strong>Horario de Partida:</strong> ${horarioIda}</p>
                <p><strong>Fecha de Ida:</strong> ${fechaIda}</p>
                <p><strong>Ciudad de Llegada:</strong> ${ciudadLlegada}</p>
                <p><strong>Horario de Vuelta:</strong> ${horarioVuelta}</p>
                <p><strong>Fecha de Vuelta:</strong> ${fechaVuelta}</p>
                <p><strong>Número de Pasajeros:</strong> ${asientosSelecionables}</p>
                <p><strong>Precio pasaje unitario:</strong> ${precio}</p>
                <p><strong>Precio pasaje Total:</strong> ${precioTotal}</p>
            </div>

        </div>`;
        ResumenPasaje.append(cardDiv);

    //////////////////////////////////////////
    const totalAsientos = 30; // Total de asientos
    // cantidad de asientos bloqueados, es random
    const asientosBloqueados = Math.floor(Math.random() * 25) + 1; 

    // Función para crear la tabla de asientos
    function crearTablaAsientos() {
        const seatingTable = document.getElementById("seatingTable");
        const confirmButtonContainer = document.getElementById("confirmButtonContainer");

        // Limpia la tabla de asientos antes de crearla nuevamente
        seatingTable.innerHTML = '';
        confirmButtonContainer.innerHTML = '';

        const blockedSeats = getAsientosBloqueados(totalAsientos, asientosBloqueados);
        let seatNumber = 1;

        for (let i = 1; i <= 5; i++) {
            const row = document.createElement("tr");
            for (let j = 1; j <= 6; j++) {
                const seat = document.createElement("td");
                seat.textContent = seatNumber;
                if (blockedSeats.includes(seatNumber)) {
                    seat.classList.add("blocked");
                } else {
                    seat.dataset.status = "available";
                    seat.addEventListener("click", selecionarAsientos);
                }
                row.appendChild(seat);
                seatNumber++;
            }
            seatingTable.appendChild(row);
        }

        // Agregar el botón de "Confirmar Asientos"
        const ConfirmarAsientos = document.createElement("button");
        ConfirmarAsientos.id = "confirmSeats";
        ConfirmarAsientos.textContent = "Confirmar Asientos";
        ConfirmarAsientos.setAttribute('class', 'btn btnloco')
        ConfirmarAsientos.addEventListener("click", confirmarAsientos);

        // Agregar el botón de confirmación al contenedor
        confirmButtonContainer.appendChild(ConfirmarAsientos);
    }

    // Función para obtener asientos bloqueados de manera aleatoria
    function getAsientosBloqueados(totalSeats, maxBlockedSeats) {
        const blockedSeats = new Set();
        while (blockedSeats.size < maxBlockedSeats) {
            const randomSeat = Math.floor(Math.random() * totalSeats) + 1;
            blockedSeats.add(randomSeat);
        }
        return Array.from(blockedSeats);
    }

    // Función para seleccionar/deseleccionar asientos
    function selecionarAsientos(event) {
        const seat = event.target;
        if (seat.dataset.status === "available" && contadorAsientosSelecionados() < asientosSelecionables) {
            seat.style.backgroundColor = "#00ff00";
            seat.dataset.status = "selected";
        } else if (seat.dataset.status === "selected") {
            seat.style.backgroundColor = "";
            seat.dataset.status = "available";
        }
    }

    // Función para contar la cantidad de asientos seleccionados
    function contadorAsientosSelecionados() {
        const selectedSeats = document.querySelectorAll("td[data-status='selected']");
        return selectedSeats.length;
    }

    // Función para confirmar los asientos seleccionados
    function confirmarAsientos() {
        const selectedSeats = document.querySelectorAll("td[data-status='selected']");
        if (selectedSeats.length === asientosSelecionables) {
            const seatNumbers = [...selectedSeats].map(seat => seat.textContent);
            alert("Has seleccionado los asientos: " + seatNumbers.join(", "));
        } else {
            Swal.fire({
        
                // Image: './Images/fondo.jpg',
                title: 'PERFECTO! Se genero tu reserva ',
                    
                  text: `
                  Datos de su Reserva: 
                  Ciudad Origen: ${ciudadPartida} \n
                  Fecha y hora Ida: ${fechaIda} a las ${horarioIda}\n
                  Ciudad Destino: ${ciudadLlegada} \n
                  Fecha y hora Vuelta: ${fechaVuelta} a las ${horarioVuelta}\n
                  para: ${asientosSelecionables} personas \n
                  `
                });
        }
    }

    // Llamar a la función createSeating automáticamente cuando se carga la página
    crearTablaAsientos();
});
