function GuardarCorreo(){

    var guardarcorreo = String(document.getElementById("correo").value);

    if(guardarcorreo != ""){

        localStorage.setItem("CorreoElectronico", guardarcorreo);

        alert("El correo se envio correctamente");
    }else{
        alert("No se envio ningun correo");
    }


}

function ImprimirCorreo(){

    var imprimircorreo = document.getElementById("ObtenerUsuarioCorreo");

    imprimircorreo.innerText = "El correo electrónico es:" + " " + localStorage.getItem("CorreoElectronico");

}