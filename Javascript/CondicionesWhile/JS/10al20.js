function EventListener(){
    document.getElementById("btncalcular").addEventListener("click", CalcularNumeros());
}

function CalcularNumeros(){
    
    var imprimirlista = document.getElementById("imprimirlistado");
    imprimirlista.innerText = "";
    var y=10;

    while(y <= 20){

        var lista = document.createElement("li");
        lista.setAttribute("class" , "list-group-item mt-2");
        lista.innerText = y;
        imprimirlista.appendChild(lista);

        y+=2;
    }
}