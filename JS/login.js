function checkLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorElement = document.getElementById("error");

    // Comprueba el usuario y la contraseña predefinidos
    if (username === "admin" && password === "admin") {
        // Redirige a otra página si los datos son correctos
        window.location.href = "./index.html";
    } else {
        // Muestra un mensaje de error si los datos son incorrectos
        errorElement.textContent = "Usuario o contraseña incorrectos";
    }
}