function EventListener(){
    document.getElementById("btnCalcular").addEventListener("click", CalcularNúmeros());
}

function CalcularNúmeros(){

    var imprimirnumeros = document.getElementById("imprimirnumeros");
    imprimirnumeros.innerText = "";
    var x = 0;

    while(x <= 100){

        var lista = document.createElement("li");
        lista.setAttribute("class" , "list-group-item mt-2");
        lista.innerText = x;
        imprimirnumeros.appendChild(lista);

        x+=2; // operador que ejecuta el ciclo
    }
} 
