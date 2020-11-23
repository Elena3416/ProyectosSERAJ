function EventListener(){
    document.getElementById("btncalcular").addEventListener("click", Calcular30numeros());
}

function Calcular30numeros(){

    var imprimirpromedio = document.getElementById("ImprimirPromedio");
    var imprimirsuma = document.getElementById("ImprimirSuma");
    imprimirpromedio.innerText = "";
    imprimirsuma.innerText = "";

    var x=1; contador1=0; contador2=0; acumulador=0; promedio=0; suma=0;

    while(x <= 30){
        var numero = Number(prompt("Ingresa un número"));

        if(numero > 0 && numero % 2 == 0){
            contador1++;
            acumulador+=numero;
            promedio = acumulador / contador1; 
        }else 
        {
            contador2++;
            suma+=numero; 
        }
        x++;    
    }
        imprimirpromedio.innerText = "El promedio de los números pares es:" + " " + promedio;
        imprimirsuma.innerText = "La suma de los números impares es:" + " " +  suma;
}