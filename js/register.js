let formulario =document.querySelector ("#formularioRegistro");
let mensaje = document.querySelector (".username");
let campoEmail = document.querySelector ("#mail");
let campoContraseña = document.querySelector ("#contraseñaRegistro");
let campoRepetir = document.querySelector ("#repetirContraseña");
let campoCheckbox = document.querySelector ("#condiciones");

formulario.addEventListener ("submit", function (event){
    event.preventDefault();

    let email = campoEmail.value;
    let contraseña = campoContraseña.value;
    let repetirContraseña = campoRepetir.value;
    let checkbox = campoCheckbox.checked;

    if (email === ""){
        mensaje.innerHTML = "Por favor, ingrese una contraseña.";
    } else if (contraseña === ""){
        mensaje.innerHTML = "Por favor, ingrese una contraseña.";
    } else if (contraseña.length < 6){
        mensaje.innerHTML = "La contraseña es muy corta.";
    } else if (contraseña !== repetirContraseña){
        mensaje.innerHTML = "Las contraseñas no coinciden.";
    } else if (!checkbox){
        mensaje.innerHTML = "Debe aceptar los términos y condiciones.";
    } else {  //si todo está bien
        this.submit();
    }
});
