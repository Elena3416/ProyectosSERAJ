function EventListener(){
    document.getElementById("btnBoton").addEventListener("click", VerificarRadios());
    document.getElementById("btnCalcular").addEventListener("click", VerificarCheckboxes());
}

function VerificarRadios(){
    
    if(document.getElementById("radio1").checked){
        alert("Seleccionaste el primer radio button");
    } 
    if(document.getElementById("radio2").checked){
        alert("Seleccionaste el segundo radio button");
    }
    if(document.getElementById("radio3").checked){
        alert("Seleccionaste el tercer radio button");
    }
}

function VerificarCheckboxes(){
    var contcheckbox = 1;

    if(document.getElementById("checkbox1").checked){
        contcheckbox++;
    }
    if(document.getElementById("checkbox2".checked)){
        contcheckbox++;
    }
    if(document.getElementById("checkbox3").checked){
        contcheckbox++;
    }
    if(document.getElementById("checkbox4").checked){
        contcheckbox++;
    }
    if(document.getElementById("checkbox5").checked){
        contcheckbox++;
    }
    alert("Seleccionaste" + " " + contcheckbox + " "  + "equipos electrónicos");
}