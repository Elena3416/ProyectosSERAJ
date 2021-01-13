var DeMenorAMayor = [];
var DeMayorAMenor = [];

function EventListener(){
    document.getElementById("btncalcular").addEventListener("click", EjerciciosdeArreglos);
}

function EjerciciosdeArreglos(){

var Arreglo = [33, 2, 36, 55, 4, 1];

var ArregloOriginal = document.getElementById("imprimirarregloOriginal");
var ArregloMenoraMayor = document.getElementById("imprimirarregloMenor");
var ArregloMayoraMenor = document.getElementById("imprimirarregloMayor");

ArregloOriginal.innerText = "El arreglo original es:"  + " " + Arreglo;

ArregloMenoraMayor.innerText = "El arreglo de menor a mayor es:"  + " " + Arreglo.sort(DeMenoraMayor);

ArregloMayoraMenor.innerText = "El arreglo de mayor a menor es:" + " " + Arreglo.sort(DeMayoraMenor);

}

function DeMenoraMayor(elem1, elem2){
    //Se utiliza para finalizar la funcion y devuelve un elemento 
    return DeMenorAMayor =  elem1 - elem2;
    //1 -4 , 1-2, 1-9, 1-11, 1-44, 1-111, 1-7, 1-4
    // 4-2, 4-9  
}

function DeMayoraMenor(elem1, elem2){
    //Se utiliza para finalizar la funcion y devuelve un elemento 
    return DeMayoraMenor =  elem2 - elem1;
}