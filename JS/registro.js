document.getElementById("registerButton").addEventListener("click", registerUser);

function registerUser() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var contrasena = document.getElementById("contrasena").value;
    var mail = document.getElementById("mail").value;
    var dni = document.getElementById("dni").value;
    var errorElement = document.getElementById("error");

    // Crear un objeto JSON con los valores
    const isUsuarioRegistrado = localStorage.getItem(mail);
    nombre.value = "";

    if(isUsuarioRegistrado){
        errorElement.textContent = "Ya existe un usuario inscripto con el email ingresado"
        var mail = document.getElementById("mail").value = "";
        var contrasena = document.getElementById("contrasena").value = "";
        return;
    }

    var usuarioJSON = {
        nombre: nombre,
        apellido: apellido,
        contrasena: contrasena,
        mail: mail,
        dni: dni
    };

    var usuarioJSONString = JSON.stringify(usuarioJSON);

    // Aquí puedes guardar los datos en una base de datos o realizar otras acciones necesarias.
    localStorage.setItem(mail, usuarioJSONString);
    // Muestra una alerta de registro exitoso
    alert("Registro exitoso. ¡Bienvenido, " + nombre + " " + apellido + "!");
    setTimeout(() => { window.location.href = "./home.html"; }, 2000)
}