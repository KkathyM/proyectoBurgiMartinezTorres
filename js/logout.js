let logout = document.querySelector("#botonlogout")
let login = document.querySelector(".login");
let register = document.querySelector(".register");
let bienvenida = document.querySelector(".bienvenida");
logout.addEventListener(`click`,function(evento){
    evento.preventDefault();
    localStorage.removeItem("emailUsuario");
    login.style.display = "block"
    register.style.display = "none"
    window.location.reload(); // sirve para que la pagina cambie

})