function EventListener(){
    document.getElementById("btncalcular").addEventListener("click", CalcularNumeros());
}

function CalcularNumeros(){

    var imprimirlistado1 = document.getElementById("imprimirpromedio");
    var imprimirlistados2 = document.getElementById("imprimirsuma");
    var contador1=0, contador2=0, acumulador=0, promedio=0, suma=0;

    imprimirlistado1.innerText = "";
    imprimirlistados2.innerText = "";

    for(var y=1; y<=30; y++){

        var numeros = Number(prompt("Ingresa un número"));

        if(numeros > 0 && numeros % 2 == 0){
            contador1++;
            acumulador+=numeros;
            promedio = acumulador/contador1;
        }else{
            contador2++;
            suma += numeros;
        }
      imprimirlistado1.innerText = "El promedio de los números pares es:" + " " + promedio;
      imprimirlistados2.innerText = "La suma de los números impares son:" + " " + suma;
    }
}
