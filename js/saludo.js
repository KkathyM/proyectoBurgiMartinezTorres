let emailGuardado = localStorage.getItem("emailUsuario");
if (emailGuardado) {
    let bienvenida = document.querySelector(".bienvenida")
    bienvenida.style.color = "#E2AC37"
    bienvenida.innerHTML += `BIENVENIDO ${emailGuardado}`

    let login = document.querySelector(".login")
    login.style.display = "none"

    let register = document.querySelector(".register")
    register.style.display = "none"
    
    let lista_navegador = document.querySelector(".navlinks")
    lista_navegador.innerHTML += `<p  id="botonlogout" class ="bienvenida"> LOGOUT </p>`
}