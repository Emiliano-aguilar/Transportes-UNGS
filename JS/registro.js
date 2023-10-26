document.getElementById("registerButton").addEventListener("click", registerUser);

function registerUser() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var contrasena = document.getElementById("contrasena").value;
    var mail = document.getElementById("mail").value;
    var dni = document.getElementById("dni").value;

    // Aquí puedes guardar los datos en una base de datos o realizar otras acciones necesarias.

    // Muestra una alerta de registro exitoso
    alert("Registro exitoso. ¡Bienvenido, " + nombre + " " + apellido + "!");
}