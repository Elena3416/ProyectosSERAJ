function EventListener(){
    document.getElementById("refcal").addEventListener("click", CalcularCals())
}

function CalcularCals(){
    var selectcals = String(document.getElementById("Calificaciones").value);
    var imprimirrefs = document.getElementById("Imprimirrefcorres");

    if(selectcals == "10"){
        imprimirrefs.innerText = "La calificación 10 corresponde a la letra A";
    }
    else if(selectcals == "9"){
        imprimirrefs.innerText = "La calificación 9 corresponde a la letra B";
    }
    else if(selectcals == "8"){
        imprimirrefs.innerText = "La calificación 8 corresponde a la letra C";
    }
    else if(selectcals == "7"){
        imprimirrefs.innerText = "La calificación 7 corresponde a la letra D";
    }
    else if(selectcals == "6"){
        imprimirrefs.innerText = "La calificación 6 corresponde a la letra D";
    }
    else if(selectcals == "5" ){
        imprimirrefs.innerText = "La calificación 5 corresponde a la letra F";
    }
    else if(selectcals == "4"){
        imprimirrefs.innerText = "La calificación 4 corresponde a la letra F";
    } 
    else if(selectcals == "3"){
        imprimirrefs.innerText = "La calificacion 3 corresponde a la letra F";
    }
    else if(selectcals == "2"){
        imprimirrefs.innerText = "La calificacion 2 corresponde a la letra F";
    }
    else if(selectcals == "1"){
        imprimirrefs.innerText = "La calificacion 1 corresponde a la letra F";
    }
    else if(selectcals == "0"){
        imprimirrefs.innerText = "La calificacion 0 corresponde a la letra F";
    }
}