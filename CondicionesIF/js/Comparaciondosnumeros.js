function EventListener(){
    document.getElementById("btncalcular").addEventListener("click", CalcularNúmeros());
    document.getElementById("btncalcular2").addEventListener("click", Calcular2Números());
}

function CalcularNúmeros(){

    var numero1 = Number(document.getElementById("numero1").value);
    var numero2 = Number(document.getElementById("numero2").value);
    var imprimirnumeromenor = document.getElementById("imprimirnummenor");
    imprimirnumeromenor.innerText = "";

    if(numero1 < numero2){
        imprimirnumeromenor.innerText = "El número" + " " + numero1 + " " + "es menor que el" + " " + numero2;
    }else if(numero1 === numero2){
        imprimirnumeromenor.innerText = "";
    }else{
        imprimirnumeromenor.innerText = "El número" + " " + numero2 + " " + "es menor que el" + " " + numero1;
    }
}

function Calcular2Números(){

    var numero3 = Number(document.getElementById("numero3").value);
    var numero4 = Number(document.getElementById("numero4").value);
    var imprimirnummenor = document.getElementById("imprimirnumeromenor");
    imprimirnummenor.innerText = "";

    if(numero3 < numero4){
        imprimirnummenor.innerText = "El número" + " " + numero3 + " " + "es menor que el" + " " + numero4;
    }else if(numero3 === numero4){
        imprimirnummenor.innerText = "El número" + " " + numero3 + " " + "es igual a" + " " + numero4;
    }
    else{
        imprimirnummenor.innerText = "El número" + " " + numero3 + " " + "es menor que el" + " " + numero4;
    }
}