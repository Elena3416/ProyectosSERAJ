function EventListener(){
    document.getElementById("CalcularCalificaciones").addEventListener("click", CalcularCals());
}

function CalcularCals(){

    var Califi1 = Number(document.getElementById("cal1").value);
    var Califi2 = Number(document.getElementById("cal2").value);
    var Califi3 = Number(document.getElementById("cal3").value);
    var Califi4 = Number(document.getElementById("cal4").value);

    var imprimirnummin = document.getElementById("NumeroMinimo");
    var imprimirpromedio = document.getElementById("Promedio");


    if(Califi1 < Califi2 && Califi1 < Califi3 && Califi1 < Califi4){
        var calificacionMinima = Math.min(Califi1, Califi2, Califi3, Califi4);
        var promedio = (Califi2 + Califi3 + Califi4) / 3;
        imprimirnummin.innerText = "La calificacion minima es:" + " " +  calificacionMinima;
        imprimirpromedio.innerText = "El promedio de las notas más altas son:" + " " + promedio;
    }
    if(Califi2 < Califi1 && Califi2 < Califi3 && Califi2 < Califi4){
        var calificacionMinima =  Math.min(Califi1, Califi2, Califi3, Califi4);
        var promedio = (Califi1 + Califi3 + Califi4) / 3;
        imprimirnummin.innerText = "La calificacion minima es:" + " " + calificacionMinima;
        imprimirpromedio.innerText = "El promedio de las notas más altas son:" + " " + promedio;
    }
    if(Califi3 < Califi1 && Califi3 < Califi2 && Califi3 < Califi4){
        var calificacionMinima =  Math.min(Califi1, Califi2, Califi3, Califi4);
        var promedio = (Califi1 + Califi2 + Califi4) / 3;
        imprimirnummin.innerText = "La calificacion minima es:" + " " + calificacionMinima;
        imprimirpromedio.innerText = "El promedio de las notas más altas son:" + " " + promedio;
    }
    if(Califi4 < Califi1 && Califi4 < Califi2 && Califi4 < Califi3){
        var calificacionMinima =  Math.min(Califi1, Califi2, Califi3, Califi4);
        var promedio = (Califi1 + Califi2 + Califi3) / 3;
        imprimirnummin.innerText = "La calificacion minima es:" + " " + calificacionMinima;
        imprimirpromedio.innerText = "El promedio de las notas más altas son:" + " " + promedio;
    }
}