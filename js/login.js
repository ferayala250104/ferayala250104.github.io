flet userItem = document.getElementById("user-item");
let ingresarID = document.getElementById("ingresar");
console.log(typeof userItem)
console.log(typeof getUserID)

//Redirigir pantalla del login a la portada de inicio.

ingresarID.addEventListener("click", function(){

    let psw =  document.getElementById("psw").value;
    let email = document.getElementById("email").value;

    if (email.length < 1){
        alert("Debe ingresar un email.");
    } else if (psw.length < 1) {
        alert("Debe ingresar una contraseña.");
    } else {
        //Guardar el usuario en el almacenamiento local.
        localStorage.setItem("userID", email);
        window.location = "portada-inicio.html"
    }
    
});
