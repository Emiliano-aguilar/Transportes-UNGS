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
        dni: dni,
        pasajes: [
            {
              "id": "1",
              "origen": "Buenos Aires",
              "destino": "Cordoba",
              "fecha": "2022-05-01",
              "asiento": "3"
            },
            {
              "id": "2",
              "origen": "Cordoba",
              "destino": "Mendoza",
              "fecha": "2022-06-15",
              "asiento": "1"
            },
            {
              "id": "3",
              "origen": "Mendoza",
              "destino": "Buenos Aires",
              "fecha": "2022-07-10",
              "asiento": "5"
            },
            {
              "id": "4",
              "origen": "Buenos Aires",
              "destino": "Salta",
              "fecha": "2022-08-20",
              "asiento": "2"
            },
            {
              "id": "5",
              "origen": "Salta",
              "destino": "Jujuy",
              "fecha": "2022-09-05",
              "asiento": "4"
            }
          ]
    };

    var usuarioJSONString = JSON.stringify(usuarioJSON);

    // Aquí puedes guardar los datos en una base de datos o realizar otras acciones necesarias.
    localStorage.setItem(mail, usuarioJSONString);
    // Muestra una alerta de registro exitoso
    setTimeout(() => { window.location.href = "./home.html"; }, 2000)
    alert("Registro exitoso. ¡Bienvenido, " + nombre + " " + apellido + "!");
    
}