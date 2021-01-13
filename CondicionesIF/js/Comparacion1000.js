function EventListener(){
    document.getElementById("btncalcular").addEventListener("click", CalcularPremio());
}

function CalcularPremio(){

    var premio = Number(document.getElementById("Premio").value);
    var imprimirresultado = document.getElementById("imprimirresultado");
    imprimirresultado.innerText = "";

    if(premio == 1000){
        imprimirresultado.innerText = "Ganaste un premio";
    }else{
        imprimirresultado.innerText = "Suerte para la próxima";
    }
}