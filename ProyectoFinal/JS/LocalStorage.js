//Guardar Email (Index.html)
function GuardarEmail(){

    var email = String(document.getElementById("email").value);

    if(email != ""){
        localStorage.setItem("Correo", email);
        alert("El correo se guardo correctamente");
    }else{
        alert("Verifica tu correo para guardarlo");
    }
}

//Guardar información del Login  (InicioSesion.html)
function GuardarUsuario(){

    var username = String(document.getElementById("username").value);
    var password = String(document.getElementById("Password").value);

    if(username != "" && password != ""){
        localStorage.setItem("Usuario", username);
        localStorage.setItem("Password", password);
        alert("Inicio de sesión correcto");
    }else{
        alert("Revisa tu información para entrar a la página");
    }
}

//Recover Password (Revover Password.html)

function GuardarCorreo(){

    var guardarcorreo = String(document.getElementById("correo").value);

    if(guardarcorreo != ""){

        localStorage.setItem("CorreoElectronico", guardarcorreo);

        alert("El correo se envió correctamente");
    }else{
        alert("No se envio ningun correo");
    }
}