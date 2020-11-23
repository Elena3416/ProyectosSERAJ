function EventListener(){
    document.getElementById("btncalcular").addEventListener("click", CalcularNumeros());
}

function CalcularNumeros(){

    var NNumeros = Number(prompt("¿Cuántos números vas a ingresar?"));
    var NumerosPositivos = document.getElementById("numerospositivos");
    var promediopositivos = document.getElementById("imprimirpromedioposi");
    var promedioTotal = document.getElementById("imprimirpromediototal");

    NumerosPositivos.innerText = "";
    promediopositivos.innerText = "";
    promedioTotal.innerText = "";

    var contador=0; acumulador=0; contador2=0; acumulador2=0; promedioposi=0, promedioneg=0; promediototal=0;

    for(var z=0; z<NNumeros; z++){

        var numeros = Number(prompt("Ingresa un número"));

        if(numeros > 0 ){
            contador++;
            acumulador+=numeros;
            promedioposi = acumulador / contador;
        }else{
            contador2++;
            acumulador2+=numeros;
            promedioneg = acumulador2 / contador2;
        }
        promediototal = (promedioposi + promedioneg) / NNumeros;
    }
    NumerosPositivos.innerText = "Los números mayores a cero son:" + " " + contador;
    promediopositivos.innerText = "El promedio de los numeros positivos son:" + " " + promedioposi;
    promedioTotal.innerText = "El promedio total es:" + " " + promediototal;
}

//1,-2,-3,4,5,6
