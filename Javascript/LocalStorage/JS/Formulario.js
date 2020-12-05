function GuardarInformación(){

    var NomUsuario = String(document.getElementById("usuario").value);
    var Email = String(document.getElementById("email").value);
    var Password1 = String(document.getElementById("password").value);
    var Password2 = String(document.getElementById("password2").value);

    //Comparando cada uno de los inputs que no se ingrese un campo vacio
    if(NomUsuario != "" && Email != "" && Password1 != "" && Password2 != ""){
        //Guardando la información en el localStorage
            localStorage.setItem("NomUsuario", NomUsuario);
            localStorage.setItem("Email", Email);

            if(Password1 == Password2){
                localStorage.setItem("Password1", Password1);
                localStorage.setItem("Password2", Password2);

              alert("La información se guardo correctamente");  
            }else{
                alert("Las contraseñas no coinciden");
            }
        } else{
            alert("Revisa la informacion, que este completa");
        }
    }

function ObtenerInformación(){

    var imprimiNombre = document.getElementById("NomUsuario");
    var imprimirEmail = document.getElementById("Email");
    var imprimirpass = document.getElementById("Password");

    imprimiNombre.innerText = "El nombre del usuario es:" + " " +  localStorage.getItem("NomUsuario");
    imprimirEmail.innerText = "El correo del usuario es:" + " " + localStorage.getItem("Email");
    imprimirpass.innerText = "La contraseña del usuario es:" + " "+ localStorage.getItem("Password1");
}