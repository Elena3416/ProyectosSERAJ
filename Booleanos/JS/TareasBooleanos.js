function EventListener(){
    document.getElementById("btncalcular").addEventListener("click", Calcularvalores());
}


function Calcularvalores(){

    var ValoresBooleanos = document.getElementById("imprimirvalores");

    //Valores true
    var valor1 = Boolean(100);

    var listado = document.createElement("li");
    listado.setAttribute("class", "list-group-item mt-2");
    listado.innerText = "El numero 100 en booleano es:"  + " " + valor1;
    ValoresBooleanos.appendChild(listado);    

    var valor2 = Boolean(3.14);
    
    var listado = document.createElement("li");
    listado.setAttribute("class", "list-group-item mt-2");
    listado.innerText = "El numero 3.14 en booleano es:"  + " " + valor2;
    ValoresBooleanos.appendChild(listado);  

    var valor3 = Boolean(-15);

    var listado = document.createElement("li");
    listado.setAttribute("class", "list-group-item mt-2");
    listado.innerText = "El numero -15 en booleano es:"  + " " + valor3;
    ValoresBooleanos.appendChild(listado);  

    var valor4 = Boolean("Hello");
    
    var listado = document.createElement("li");
    listado.setAttribute("class", "list-group-item mt-2");
    listado.innerText = "La palabra 'Hello' en booleano es:"  + " " + valor4;
    ValoresBooleanos.appendChild(listado);  

    var valor5 = Boolean("false");

    var listado = document.createElement("li");
    listado.setAttribute("class", "list-group-item mt-2");
    listado.innerText = "La palabra 'false' en booleano es:"  + " " + valor5;
    ValoresBooleanos.appendChild(listado);  

    var valor6 = Boolean( 7 + 1 + 3.14 );

    var listado = document.createElement("li");
    listado.setAttribute("class", "list-group-item mt-2");
    listado.innerText = "La suma de los números (7 + 1 + 3.14) en booleano es:"  + " " + valor6;
    ValoresBooleanos.appendChild(listado);  

    var valor7 = Boolean(5 < 6);

    var listado = document.createElement("li");
    listado.setAttribute("class", "list-group-item mt-2");
    listado.innerText = "La comparación de los números (5<6) en booleano es:"  + " " + valor7;
    ValoresBooleanos.appendChild(listado);  

    //Valores false
    var valor8 = Boolean(0);

    var listado = document.createElement("li");
    listado.setAttribute("class", "list-group-item mt-2");
    listado.innerText = "El número 0 en booleano es:"  + " " + valor8;
    ValoresBooleanos.appendChild(listado);  

    var valor9 = Boolean(-0);

    var listado = document.createElement("li");
    listado.setAttribute("class", "list-group-item mt-2");
    listado.innerText = "El número -0 en booleano es:"  + " " + valor9;
    ValoresBooleanos.appendChild(listado);  

    var valor10 = Boolean("");

    var listado = document.createElement("li");
    listado.setAttribute("class", "list-group-item mt-2");
    listado.innerText = "Las comillas vacias (' ') en booleano es:"  + " " + valor10;
    ValoresBooleanos.appendChild(listado);  

    var valor11 = Boolean(valor11);

    var listado = document.createElement("li");
    listado.setAttribute("class", "list-group-item mt-2");
    listado.innerText = "El valor sin dato (valor11) en booleano es:"  + " " + valor11;
    ValoresBooleanos.appendChild(listado);  

    var valor12 = Boolean(null);

    var listado = document.createElement("li");
    listado.setAttribute("class", "list-group-item mt-2");
    listado.innerText = "El número nulo (null) en booleano es:"  + " " + valor12;
    ValoresBooleanos.appendChild(listado);  

    var valor13 = Boolean(false);

    var listado = document.createElement("li");
    listado.setAttribute("class", "list-group-item mt-2");
    listado.innerText = "El booleano false es:"  + " " + valor13;
    ValoresBooleanos.appendChild(listado);  

    var valor14 = Boolean(10/"H");

    var listado = document.createElement("li");
    listado.setAttribute("class", "list-group-item mt-2");
    listado.innerText = "La division de un número con letra (10/H) en booleano es:"  + " " + valor14;
    ValoresBooleanos.appendChild(listado);  
}