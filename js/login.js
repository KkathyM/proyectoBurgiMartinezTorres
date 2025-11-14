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
    if (emailusuario == "" || contraseñausuario == "") { 
        alert("Por favor ingrese la informacion correcta")
    }
    else if (contraseñausuario.length < 6) {
        alert("Por favor ingrese la contraseña necesaria")
    }
    else {
        this.submit();
}
})