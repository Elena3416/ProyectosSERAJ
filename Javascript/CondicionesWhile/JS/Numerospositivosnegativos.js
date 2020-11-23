function EventListener(){
    document.getElementById("btncalcular").addEventListener("click", Calcularposineg());
}

function Calcularposineg(){

    var Nnumeros = Number(prompt("¿Cuantos números en total vas a ingresar?"));
    var imprimirnumpos = document.getElementById("imprimirnumposi");
    var imprimirprompos = document.getElementById("imprimirpromposi");
    var imprimirpromtotal = document.getElementById("imprimirpromtotal");

    imprimirnumpos.innerText = "";
    imprimirprompos.innerText = "";
    imprimirpromtotal.innerText = "";

    var y=0; contador1=0; acumulador1=0; acumulador2=0; contador2=0; promediopos=0; promedioneg=0; 
    promtotal=0;

    while(y < Nnumeros){
        var numeros = Number(prompt("Ingresa un número"));

        if(numeros > 0){
            contador1++;
            acumulador1+=numeros;
            promediopos = acumulador1 / contador1;
        }else
        {
            contador2++;
            acumulador2+=numeros;
            promedioneg = acumulador2 / contador2;
        }
        promtotal = (promediopos + promedioneg ) / Nnumeros;
        y++;
    }
    imprimirnumpos.innerText = "El total de números positivos es:" + " " + contador1;
    imprimirprompos.innerText = "El promedio de números positivos es:" + " " + promediopos;
    imprimirpromtotal.innerText = "El promedio total de los números es:" + " " + promtotal; 
}