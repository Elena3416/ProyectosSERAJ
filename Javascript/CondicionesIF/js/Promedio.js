function EventListener(){
//Esta instruccion obtiene el id del html y esta atento cuando le doy click al boton con la funcion CalcularCals()
    document.getElementById("CalcularCalificaciones").addEventListener("click", CalcularCals());
}

function CalcularCals(){
    var Califi1 = Number(document.getElementById("cal1").value);
    var Califi2 = Number(document.getElementById("cal2").value);
    var Califi3 = Number(document.getElementById("cal3").value);
    var Califi4 = Number(document.getElementById("cal4").value);

    var valorminimo, promedio = 0;

    var imprimirvalormin = document.getElementById("NumeroMinimo");
    var imppromedioaltos = document.getElementById("Promedio");

    if(Califi1 < Califi2 && Califi1 < Califi3 && Califi1 < Califi4){
        valorminimo = Math.min(Califi1, Califi2, Califi3, Califi4);
        promedio = (Califi2 + Califi3 + Califi4) / 3;

    }
    if(Califi2 < Califi1 && Califi2 < Califi3 && Califi2 < Califi4){

        valorminimo = Math.min(Califi1, Califi2, Califi3, Califi4);
        promedio = (Califi1 + Califi3 + Califi4) / 3;

    }
    if(Califi3 < Califi1 && Califi3 < Califi2 && Califi3 < Califi4){

        valorminimo = Math.min(Califi1, Califi2, Califi3, Califi4);
        promedio = (Califi1 + Califi2 + Califi4) / 3;

    }
    if(Califi4 < Califi1 && Califi4 < Califi3 && Califi4 < Califi3){

        valorminimo = Math.min(Califi1, Califi2, Califi3, Califi4);
        promedio = (Califi1 + Califi2 + Califi3) / 3;
    }
    
    imprimirvalormin.innerText = "La calificación mínima es" + " " + valorminimo;
    imppromedioaltos.innerText = "El promedio de las notas mas altas son: " + " "+ promedio;
}