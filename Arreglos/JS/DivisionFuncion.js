function EventListener(){
    document.getElementById("btncalcular").addEventListener("click",  CalcularFuncion());
    document.getElementById("btncalcular2").addEventListener("click", CalcularParametros());
    document.getElementById("btncalcular3").addEventListener("click", CalcularReturn());
}

function CalcularFuncion(){
    
    var imprimirdivision = document.getElementById("imprimirdivision");
    var num1=10; num2=5;

    imprimirdivision.innerText = "La división de los números es:" + " " + (num1 / num2);
}

function CalcularParametros(Numero1, Numero2){

    var imprimirdivision2 = document.getElementById("imprimirdivparametro");
    Numero1 = 100; Numero2 = 10;

    imprimirdivision2.innerText = "La división de los números es:" + " " + (Numero1 / Numero2);
}

function CalcularReturn(){

    var imprimirdivision3 = document.getElementById("imprimirdivreturn");
    imprimirdivision3.innerText = "La división de los números es:" + "  " + MetodoReturn(200,40);
}

function MetodoReturn(a,b){
    return a/b;
}