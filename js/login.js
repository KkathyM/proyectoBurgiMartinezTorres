let formulario = document.querySelector("#formulariologin"); 
let adicional = document.querySelector(".username")
let campoBuscar = document.querySelector("#usuario1"); 
let campoContraseña = document.querySelector("#contraseñalogin")
let contraseñausuario = campoContraseña.value
let emailusuario = campoBuscar.value
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); 
    let emailusuario = campoBuscar.value;
    let contraseñausuario = campoContraseña.value;
    if (emailusuario == "") { 
        adicional.innerHTML = "Por favor ingrese el mail correctamente"
        }
    else if (contraseñausuario == ""){
        adicional.innerHTML = "Por favor ingrese la contraseña correctamente"
    }
    else if (contraseñausuario.length < 6) {
        adicional.innerHTML = "La contraseña es muy corta"
    }
    else {
        this.submit();
        localStorage.setItem("emailUsuario", emailusuario.toUpperCase()); // ESTO SIRVE PARA QUE SE PONGA EN MAYUSCULA
        console.log(localStorage)
}
})