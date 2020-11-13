function EventListener(){
    document.getElementById("btnCalcular").addEventListener("click", CalcularNPar());
}

function CalcularNPar(){

    var numero = Number(document.getElementById("Numero1").value);
    var imprimirnp = document.getElementById("Imprimirnp");

    if(numero % 2 == 0){
        imprimirnp.innerText = "El número es par";
    }else
    {
        imprimirnp.innerText = "El número es impar";
    }
}

2,4,6,8,10
1,3,5,7,9