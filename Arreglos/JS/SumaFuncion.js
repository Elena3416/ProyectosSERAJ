function EventListener(){
    document.getElementById("btncalcular").addEventListener("click",  CalcularSuma());
    document.getElementById("btncalcular2").addEventListener("click", CalcularSumaParametros());
    document.getElementById("btncalcular3").addEventListener("click", CalcularSumaReturn());
}

function CalcularSuma(){

    var imprimirsuma = document.getElementById("imprimirsuma1");
    var num1 = 50; num2=97;

    imprimirsuma.innerText = "La suma de los números es:" + " " + (num1 + num2);
}

//Toda informacion que se pone en le parentesis de la funcion se llama parametro.
//Un parametro es cualquier valor para hacer una operacion
//Tengo declarar 2 parametros porque voy a sumar dos numeros
function CalcularSumaParametros(numero1, numero2){
    
    var imprimiroperacion = document.getElementById("imprimirsuma2");
    //Le doy valor a los parametros 
    numero1 = 30, numero2 = 20; 
    //imprimo la suma de los parametros
    imprimiroperacion.innerText = "La suma de los números es:" + " " + (numero1 + numero2);
}

//Funcion con return
function CalcularSumaReturn(){
    var imprimirsuma3 = document.getElementById("imprimirsuma3");
    //imprimo la suma con la funcion y sus valores
    imprimirsuma3.innerText = "La suma de los números es:" +  " " + FuncionReturn(40,50);
}

//Declaro otra funcion distinta para sumar los parametro y me devuelva el resultado
function FuncionReturn(num1,num2){
    return num1 + num2;
}
