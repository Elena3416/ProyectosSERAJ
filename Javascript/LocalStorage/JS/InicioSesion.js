function EventListener(){
    document.getElementById("ingresarusuario").addEventListener("click", GuardarUsuario());
}

function GuardarUsuario(){

    var usuario = String(document.getElementById("username").value);
    var password = String(document.getElementById("Password").value);
   
    var imprimirvalidacion = document.getElementById("imprimirInformacion");

    if(usuario != "" && password != ""){
        localStorage.setItem("Usuario", usuario); 
        localStorage.setItem("Password", password); 
    }else{
        imprimirvalidacion.innerText = "No se ha ingresado ninguna información";
    }
}

function ObtenerInformación(){

    var imprimirusario = document.getElementById("ObtenerUsuario");
    var ObtenerPassword = document.getElementById("ObtenerPassword");

    var seleccionar = document.getElementById("remember").checked;

    if(seleccionar){      
        imprimirusario.innerText = "El usuario es:" + " " + JSON.stringify(localStorage.getItem("Usuario"));
        ObtenerPassword.innerText = "El password es:" + " " + JSON.stringify(localStorage.getItem("Password"));
    }
}