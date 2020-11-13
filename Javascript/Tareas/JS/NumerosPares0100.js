function EventListener(){
    document.getElementById("BtnCalcular").addEventListener("click", CalcularNumerosPares());
}

function CalcularNumerosPares(){

    var imprimirnumerospares = document.getElementById("imprimirnumerospares");
    imprimirnumerospares.innerText = "";

    for(var i=0; i<=100;i+=2){

        const lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText = `${i}`;
        imprimirnumerospares.appendChild(lista);
    }
}