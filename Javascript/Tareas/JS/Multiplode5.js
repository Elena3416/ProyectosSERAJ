function EventListener(){
    document.getElementById("btncalcular").addEventListener("click",CalcularMultiplos());
    document.getElementById("btncalcularnumeros").addEventListener("click", CalcularNumeros());
}

function CalcularMultiplos(){
    var imprimirnumeros = document.getElementById("imprimirNumeros");
    imprimirnumeros.innerText = "";

    for(var x=5;x<=50;x+=5){
        var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item mt-2");
        lista.innerText = x;
        imprimirnumeros.appendChild(lista);
    }
}

function CalcularNumeros(){
    var imprimirmultiplos = document.getElementById("imprimirmultiplos");
    imprimirmultiplos.innerText = "";

    for(var x=5; x<=50; x++){
        if(x % 5 == 0){
            var listas = document.createElement("li");
            listas.setAttribute("class", "list-group-item mt-2");
            listas.innerText = x;
            imprimirmultiplos.appendChild(listas);
        }
    }
}

//5,6,7,8,9,10,.....,50    5  //El numero multiplo es que un numero se puede divivir entre si mismo
//Multiplo de 3 50 y 5