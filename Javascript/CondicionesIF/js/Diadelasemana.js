function EventListener(){
    document.getElementById("btncalcular").addEventListener("click", btnCalcular());
}

function btnCalcular(){

    var diasemana = String(document.getElementById("dia").value);
    var imprimirfrase = document.getElementById("imprimirfrasedeldia");
    imprimirfrase.innerText = "";

    if(diasemana === "lunes"){
        imprimirfrase.innerText = "OMG!! Es Lunes";
    }else if(diasemana === "viernes"){
        imprimirfrase.innerText = "Ya por fin es Viernes";
    }else if(diasemana === "sabado" || diasemana === "domingo"){
        imprimirfrase.innerText = "Estos son dias para descansar";
    }else{
        imprimirfrase.innerText = "En estos dias haces cosas diferentes";
    }
}