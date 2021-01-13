//La funcion solo se utiliza para mandar llamar los botones
function EventListener(){
    //Mandar llamar al boton1
    document.getElementById("click").addEventListener("click", Darleclick());
    //Mandar llamar al boton2
    document.getElementById("click2").addEventListener("click", DarleClick2());
    document.getElementById("click3").addEventListener("click", darleclick3());
}
//La funcion primer boton
function Darleclick(){
    var salida = document.getElementById("salida1");

    //document.createelement se utiliza para crear una etiqueta desde javascript
    var button = document.createElement("button");

    //La instruccion set attribute llamamos a la clase para darle forma al boton
    button.setAttribute("class","btn btn-primary btn-lg btn-block mt-2"); // = class="btn btn-primary btn-lg btn-block"
    button.setAttribute("id", "boton"); // = id="boton"
    button.setAttribute("type", "button"); // = type = "button"
    button.setAttribute("onclick", "click2()"); // = onclick=("click2()")

    //Se utiliza para imprimir informacion en la etiqueta(boton);
    button.innerText = "Boton Impreso"; 

    //Se utiliza para imprimir el boton creado 
    salida.appendChild(button);
}

//La funcion del segundo boton
function DarleClick2(){

    var salida2 = document.getElementById("salida2");

    for(var x=0; x<5; x++){
       //se crea un button en javascript 
      var boton = document.createElement("button");
      //Se crean los atibutos del boton
      boton.setAttribute("class", "btn btn-primary btn-lg btn-block mt-2");
      boton.setAttribute("id", "click");
      boton.setAttribute("type", "button");
      boton.setAttribute("onclick", "click2()");
      //Se le agrega un texto al boton
      boton.innerText = "Varios Botones Impresos";
      //se imprime el boton en le jumbotron  
      salida2.appendChild(boton); 
    }
}

function darleclick3(){
    // var salida3 = document.getElementById("salida3");
    var listado = document.getElementById("listado");

    for(var x=0; x<5; x++){
        var lista = document.createElement("li"); //<li></li>
        lista.setAttribute("class", "list-group-item mt-2"); //<li class="list-group-item"></li>
        lista.innerText = x;
        listado.appendChild(lista);
    }
}