function checkLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorElement = document.getElementById("error");

    const usuario = localStorage.getItem(username);
    const userJson = JSON.parse(usuario);

    // Comprueba el usuario y la contraseña predefinidos
    console.log(userJson);

    if (userJson) {
        if(userJson.contrasena == password){
            // Redirige a otra página si los datos son correctos
            localStorage.setItem("currentSession", usuario);
            window.location.href = "./home.html";
        }else{
            // Muestra un mensaje de error si los datos son incorrectos
            errorElement.textContent = "Usuario o contraseña incorrectos";
        }
    } else {
        // Muestra un mensaje de error si los datos son incorrectos
        errorElement.textContent = "Usuario o contraseña incorrectos";
    }
}