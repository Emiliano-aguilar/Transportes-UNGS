// utils
function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
}

function logOut(){
    localStorage.removeItem("currentSession");
    document.getElementById("log-out").classList.remove("is-not-hidden");
    document.getElementById("log-out").classList.add("is-hidden");
    document.getElementById("log-in").classList.remove("is-hidden");
    document.getElementById("log-in").classList.add("is-not-hidden");
    window.location.reload();
}

const sesion = localStorage.getItem("currentSession");
console.log(sesion);
if(sesion != null){
    document.getElementById("log-in").classList.remove("is-not-hidden");
    document.getElementById("log-in").classList.add("is-hidden");
    document.getElementById("log-out").classList.remove("is-hidden");
    document.getElementById("log-out").classList.add("is-not-hidden");
}
console.log(sesion);