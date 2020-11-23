function EventListener(){
    document.getElementById("btncalcular").addEventListener("click", CalcularNumeros());
}

function CalcularNumeros(){
    
    var imprimirlista = document.getElementById("imprimirlistado");
    imprimirlista.innerText = "";
    var y=15;

    while(y >= 5){

        var lista = document.createElement("li");
        lista.setAttribute("class" , "list-group-item mt-2");
        lista.innerText = y;
        imprimirlista.appendChild(lista);

        y--;
    }
}