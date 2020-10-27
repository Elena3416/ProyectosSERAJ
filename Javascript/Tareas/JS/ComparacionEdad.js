function evenListener(){
    document.getElementById("CalcularEdad").addEventListener("click", CalcularDifEdad());
}

function CalcularDifEdad(){

    var Edad1 = Number(document.getElementById("Edad1").value);
    var Edad2 = Number(document.getElementById("Edad2").value);
    var EdadMayor = document.getElementById("EdadMayor");
    var DiferenciaEdad = document.getElementById("DiferenciaEdad");
    var diferenciaEdad = 0;

    if(Edad1 > Edad2){
        diferenciaEdad =  Edad1 - Edad2;
        EdadMayor.innerText = "Hermano 1 es mayor que el Hermano 2";
    }
    else{
        diferenciaEdad =  Edad2 - Edad1;
        EdadMayor.innerText = "Hermano 2 es mayor que el Hermano1";
    }
    DiferenciaEdad.innerText = "La diferencia de edad es de:" + " " + diferenciaEdad; 
}