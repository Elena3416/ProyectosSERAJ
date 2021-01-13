function CalcularSumaString(){
    document.getElementById("btncalcular").addEventListener("click" , CalcularSumaString());
}

function CalcularSumaString(){

    var booleano1 = true;
    var booleano2 = false;
    var numero1 = 20; numero2 = 30;

    var imprimirsumastring = document.getElementById("imprimirresultados");

    var listado = document.createElement("li");
    listado.setAttribute("class", "list-group-item mt-2");
    listado.innerText = "La suma de booleano y el número1 es" + " " + (booleano1 + numero1);
    imprimirsumastring.appendChild(listado);

    var listado2 = document.createElement("li");
    listado2.setAttribute("class", "list-group-item mt-2");
    listado2.innerText = "La suma de booleano y el número2 es" + " " + (booleano2 + numero2);
    imprimirsumastring.appendChild(listado2);

    var listado3 = document.createElement("li");
    listado3.setAttribute("class", "list-group-item mt-2");
    listado3.innerText = "La conversión del número booleano1 en String" + " " +  (booleano1.toString());
    imprimirsumastring.appendChild(listado3);

    var listado4 = document.createElement("li");
    listado4.setAttribute("class", "list-group-item mt-2");
    listado4.innerText = "La conversión del número booleano2 en String" + " " + (booleano2.toString());
    imprimirsumastring.appendChild(listado4);
}