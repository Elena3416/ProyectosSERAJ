function EventListener(){
    document.getElementById("btncalcular").addEventListener("click", CalcularMultiplos());
}

function CalcularMultiplos(){

    var imprimirlista = document.getElementById("imprimirlista");
    imprimirlista.innerText = "";

    for(var i=50; i>=5; i--){

        if(i % 3 == 0){
            var list = document.createElement("li");
            list.setAttribute("class", "list-group-item mt-2");
            list.innerText = i;
            imprimirlista.appendChild(list);
        }
    }
}