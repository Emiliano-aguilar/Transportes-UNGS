document.addEventListener("DOMContentLoaded", function () {
    const seating = document.getElementById("seating");
    const confirmSeatsButton = document.getElementById("confirmSeats");
    const totalSeats = 30; // Total de asientos
    const maxBlockedSeats = 5; // Número de asientos bloqueados
    const maxSelectableSeats = 3; // Número máximo de asientos seleccionables

    // Función para crear la tabla de asientos
    function createSeating() {
        const blockedSeats = getRandomBlockedSeats(totalSeats, maxBlockedSeats);
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
                    seat.addEventListener("click", toggleSeat);
                }
                row.appendChild(seat);
                seatNumber++;
            }
            seating.appendChild(row);
        }
    }

    // Función para obtener asientos bloqueados de manera aleatoria
    function getRandomBlockedSeats(totalSeats, maxBlockedSeats) {
        const blockedSeats = new Set();
        while (blockedSeats.size < maxBlockedSeats) {
            const randomSeat = Math.floor(Math.random() * totalSeats) + 1;
            blockedSeats.add(randomSeat);
        }
        return Array.from(blockedSeats);
    }

    // Función para seleccionar/deseleccionar asientos
    function toggleSeat(event) {
        const seat = event.target;
        if (seat.dataset.status === "available" && countSelectedSeats() < maxSelectableSeats) {
            seat.style.backgroundColor = "#00ff00";
            seat.dataset.status = "selected";
        } else if (seat.dataset.status === "selected") {
            seat.style.backgroundColor = "";
            seat.dataset.status = "available";
        }
    }

    // Función para contar la cantidad de asientos seleccionados
    function countSelectedSeats() {
        const selectedSeats = document.querySelectorAll("td[data-status='selected']");
        return selectedSeats.length;
    }

    // Función para confirmar los asientos seleccionados
    function confirmSeats() {
        const selectedSeats = document.querySelectorAll("td[data-status='selected']");
        if (selectedSeats.length === maxSelectableSeats) {
            const seatNumbers = [...selectedSeats].map(seat => seat.textContent);
            alert("Has seleccionado los asientos: " + seatNumbers.join(", "));
        } else {
            alert(`Selecciona exactamente ${maxSelectableSeats} asientos.`);
        }
    }

    createSeating();
    confirmSeatsButton.addEventListener("click", confirmSeats);
});
