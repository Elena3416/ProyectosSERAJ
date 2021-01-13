function EventListener(){
    document.getElementById("btncalcular").addEventListener("click", Calcularanio());
}

function Calcularanio(){

    var anio = Number(document.getElementById("anio").value);
    var imprimiranio = document.getElementById("imprimiranio");

    if(anio % 4 == 0 && anio % 100 != 0 || anio % 400 == 0){
        imprimiranio.innerText = "El año es bisiesto";
    }else{
        imprimiranio.innerText = "El año no es bisiesto";
    }
}