function EventListener(){
    document.getElementById("btnclacular").addEventListener("click", Calcularfrase());
}

function Calcularfrase(){
    //Declarar una variable para leer el id de la ul
    var salida1 = document.getElementById("imprimirfrase");

    //Declaramos una variable que inicialice con 0
    var x = 0;
    //Compare la x desde el numero "0" hasta el "10"
    while(x < 10){
        //creo el listado con la frase hola mundo
        var lista = document.createElement("li");  // <li></li>
        lista.setAttribute("class", "list-group-item"); //<li class="list-group-item"></li>
        lista.innerText = "Hola Mundo";
        salida1.appendChild(lista);  
        //Se encarga para contar de uno en uno hasta el numero 9
    x++;
    }
}