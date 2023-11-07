document.getElementById("registerButton").addEventListener("click", registerUser);

function registerUser() {
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var contrasena = document.getElementById("contrasena").value;
  var mail = document.getElementById("mail").value;
  var dni = document.getElementById("dni").value;
  var errorElement = document.getElementById("error");
  var isMailValido = validarEmail(mail);
  var isDNIValido = validarDNI(dni);
  var isPasswordValido = validarPassword(contrasena);

  if(!isMailValido){
    errorElement.textContent = "Ingrese un email valido";
    return;
  }

  if(!isPasswordValido){
    errorElement.textContent = "Ingrese una contraseña entre 5 y 16 valores alfanumericos";
    return;
  }

  if(!isDNIValido){
    errorElement.textContent = "Ingrese un DNI valido";
    return;
  }

  if (nombre === "" || apellido === "" || contrasena === "" || mail === "" || dni === "") {
    errorElement.textContent = "Todos los campos son obligatorios";
    return; // Evita que se envíe el formulario si hay campos vacíos
  }

  const isUsuarioRegistrado = localStorage.getItem(mail);

  if (isUsuarioRegistrado) {
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
  setTimeout(() => { window.location.href = "./home.html"; }, 2000)
  alert("Registro exitoso. ¡Bienvenido, " + nombre + " " + apellido + "!");

}

function validarEmail(email) {
  // Expresión regular para verificar si el email tiene un formato válido
  var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
  return regex.test(email);
}

function validarDNI(dni) {
  // Expresión regular para verificar si el DNI contiene entre 6 y 8 dígitos numéricos
  var regex = /^\d{6,8}$/;

  return regex.test(dni);
}

function validarPassword(password) {
  // Expresión regular para verificar si la contraseña contiene entre 5 y 16 caracteres alfanuméricos
  var regex = /^[a-zA-Z0-9]{5,16}$/;

  return regex.test(password);
}