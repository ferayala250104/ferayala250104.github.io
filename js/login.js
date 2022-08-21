function redireccionar(){

    let pswValid =  document.getElementById("psw").value
    let emailValid = document.getElementById("email").value

    if (emailValid.length < 1){
        alert("Debe ingresar un email.");
    } else if (pswValid.length < 1) {
        alert("Debe ingresar una contraseña.");
    } else {
        window.location.href= "portada-inicio.html";
    }
 }
