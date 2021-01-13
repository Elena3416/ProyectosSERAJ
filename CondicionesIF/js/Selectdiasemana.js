function EventListener(){
    document.getElementById("semana").addEventListener("click", calcularsemana());
}

function calcularsemana(){

    var dia = document.getElementById("dias").value;
    var imprimirresultado = document.getElementById("imprimirdiassemana");

    if(dia == "1"){
        imprimirresultado.innerText = "El dia que seleccionaste es Lunes";
    }
    if(dia == "2"){
        imprimirresultado.innerText = "El dia que seleccionaste es Martes";
    }
    if(dia == "3"){
        imprimirresultado.innerText = "El dia que seleccionaste es Miercoles";
    }
    if(dia == "4"){
        imprimirresultado.innerText = "El dia que seleccionaste es Jueves";
    }
    if(dia == "5"){
        imprimirresultado.innerText = "El dia que seleccionaste es Viernes";
    }
    if(dia == "6"){
        imprimirresultado.innerText = "El dia que seleccionaste es Sabado";
    }
    if(dia == "7"){
        imprimirresultado.innerText = "El dia que seleccionaste es Domingo";
    }
}