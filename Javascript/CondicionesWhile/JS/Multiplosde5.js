function EventListener(){
    document.getElementById("btncalcular").addEventListener("click", CalcularMultiplo());
    document.getElementById("btncalcular2").addEventListener("click" , CalcularMultiplo2());
}

function CalcularMultiplo(){

    var imprimirlistado = document.getElementById("imprimirnumeros");
    imprimirlistado.innerText = "";
    var x=5;

    while(x <= 50){

        var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item mt-2");
        lista.innerText = x;
        imprimirlistado.appendChild(lista);

        x+=5;
    }
}

function CalcularMultiplo2(){

    var imprimirlista = document.getElementById("imprimirmultiplos");
    imprimirlista.innerText = "";
    var i=5;

    while(i <= 50){
        if(i % 5 == 0){
            var listas = document.createElement("li");
            listas.setAttribute("class", "list-group-item mt-2");
            listas.innerText = i;
            imprimirlista.appendChild(listas);
        }
        i++;
    }
}