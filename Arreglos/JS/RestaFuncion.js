function EventListener(){
    document.getElementById("btncalcular").addEventListener("click", CalcularResta());
    document.getElementById("btncalcular2").addEventListener("click", CalcularRestaParametros());
    document.getElementById("btncalcular3").addEventListener("click", CalcularRestaReturn());
}

function CalcularResta(){
    
    var imprimirresta = document.getElementById("imprimirresta");
    var num1 = 31; num2 = 70;

    imprimirresta.innerText = "La resta de los números es:" + " " +  (num1 - num2);
}

function CalcularRestaParametros(numero1, numero2){

    var imprirmirresta1 = document.getElementById("imprimirresta2");
    numero1 = 80; numero2 = 23;

    imprirmirresta1.innerText = "La resta de los números es:" + "  " + (numero1 - numero2);
}

function CalcularRestaReturn(){

    imprimirresta2 = document.getElementById("imprimirresta3");
    imprimirresta2.innerText = "La resta de los números es:" + " " + Metodoreturn(70,20);
}

function Metodoreturn(a,b){
    return a-b;
}