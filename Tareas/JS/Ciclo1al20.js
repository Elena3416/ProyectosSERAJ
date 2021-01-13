//utilizo la funcion para mandar llamar el boton
function EventListener(){
    //mando llamar el id del boton y su funcion
    document.getElementById("btncalcular").addEventListener("click", CalcularNumeros());    
}

//utilizo la funcion que tiene el boton
function CalcularNumeros(){

    //creo la variable para imprimir el listado
    var imprimirlistado = document.getElementById("imprimirlistado");

    //repetir 20 veces el codigo contando de uno en uno 
    for(var x=15; x>=5; x--){

        //Crear la etiqueta li
        var lista = document.createElement("li"); // <li></li> html
        //Darle una clase al li
        lista.setAttribute("class", "list-group-item"); //<li class="list-group-item"></li>
        //Imprimir la serie del 1 al 20
        lista.innerText = x; //<li class="list-group-item">1</li><li class="list-group-item">2</li><li class="list-group-item">3</li>.......
        //Mostrar el listado en la página web
        imprimirlistado.appendChild(lista);
    }
}

