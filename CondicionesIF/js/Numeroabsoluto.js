function EventListener(){
    document.getElementById("btncalcular").addEventListener("click", Calcularnumabsoluto());
}

function Calcularnumabsoluto(){

    var numero = Number(document.getElementById("numero1").value);
    var imprimirnumeroabs = document.getElementById("imprimirnumero");

    if(numero > 0){
        numero = numero * 1;
    }else{
        numero = numero * -1;
    }
    imprimirnumeroabs.innerText = "El número absoluto es:" + " " + numero;  
}