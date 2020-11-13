function EventListener(){
    document.getElementById("PresupuestoPrecio").addEventListener("click", CalcularSumaarticulos());
}

function CalcularSumaarticulos(){

    var presupuesto1 = Number(document.getElementById("Presupuesto").value); 
    var articulo1 = Number(document.getElementById("articulo1").value);
    var articulo2 = Number(document.getElementById("articulo2").value);
    var articulo3 = Number(document.getElementById("articulo3").value);
    var articulo4 = Number(document.getElementById("articulo4").value);
    var imprimirsumaprecio = document.getElementById("Imprimirsumapresupuesto");
    var imprimircomparacionpresu = document.getElementById("Comparacionpresupuesto"); 
    var sumaarticulos = 0;

    sumaarticulos = articulo1 + articulo2 + articulo3 + articulo4;
    
    if(sumaarticulos < presupuesto1){
        imprimirsumaprecio.innerText = "El precio de los articulos es de: $"+ sumaarticulos;
        imprimircomparacionpresu.innerText = "El precio esta dentro del presupuesto";
    }
    else{
        imprimirsumaprecio.innerText = "El precio de los articulos es de: $" + sumaarticulos;
        imprimircomparacionpresu.innerText = "El precio esta fuera del presupuesto";
    }
}