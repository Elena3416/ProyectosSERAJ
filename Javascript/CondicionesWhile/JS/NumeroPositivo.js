function EventListener(){
    document.getElementById("btncalcular").addEventListener("click", CalcularNumeros());
}

function CalcularNumeros(){

    var Nnumeros = Number(prompt("¿Cuántos números en total vas a ingresar?"));
    var imprimirnumerospos = document.getElementById("numpos");
    var imprimirnumerosneg = document.getElementById("numneg");
    var x = 0, contadorpos=0, contadorneg=0;

    while(x < Nnumeros){
        var Numero = Number(prompt("Ingresa un número"));

        if(Numero >= 0){
            contadorpos++;
        }else{
            contadorneg++;
        }
        x++;
    }
    imprimirnumerospos.innerText = "Los números positivos y mayores a 0 son:" + " " + contadorpos;
    imprimirnumerosneg.innerText = "Los números negativos son:" + " " + contadorneg;
}