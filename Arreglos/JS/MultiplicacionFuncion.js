function EventListener(){
    document.getElementById("btncalcular").addEventListener("click", CalcularMultiFuncion());
    document.getElementById("btncalcular2").addEventListener("click", CalcularMultiParametros());
    document.getElementById("btncalcular3").addEventListener("click", CalcularMultiReturn());
}

function CalcularMultiFuncion(){

    var imprimirmultiplicacion = document.getElementById("imprimirmultiplicacion");
    var num1=45; num2=67;

    imprimirmultiplicacion.innerText = "La multiplicación de los números es:" + " " + (num1 * num2);
}

function CalcularMultiParametros(numero1,numero2){

    var imprimirmultiplicacion2 = document.getElementById("imprimirmultiparametros");
    numero1 = 30; numero2=10;

    imprimirmultiplicacion2.innerText = "La multiplicación de los números es:" + " " + (numero1 * numero2);
}

function CalcularMultiReturn(){

    var imprimirmultiplicacion3 = document.getElementById("imprimirmultireturn");
    imprimirmultiplicacion3.innerText = "La multiplicación de los números es:" + " " + MetodoReturn(30,54);

}

function MetodoReturn(a,b){
    return a*b;
}