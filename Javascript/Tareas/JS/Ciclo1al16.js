function EventListener(){
    document.getElementById("btncalcular").addEventListener("click", CalcularNumeros());
}

function CalcularNumeros(){

    var imprimirnumeros = document.getElementById("imprimirlistado");
    //se utiliza para limpiar el listado y solo lo imprime una sola vez
    imprimirnumeros.innerText = "";

    for(var x=1; x<=16; x+=3){
        var listado = document.createElement("li");
        listado.setAttribute("class", "list-group-item mt-2");
        listado.innerText = x;
        imprimirnumeros.appendChild(listado);
    }
}