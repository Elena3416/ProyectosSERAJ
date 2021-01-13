function EventListener(){
    document.getElementById("btnordenar").addEventListener("click", Ordenarnumeros());
}

function Ordenarnumeros(){

    var ArregloNumero = [1, 4, 2, 9, 11, 44, 111, 7, 4];
    var imprimirmenormayor = document.getElementById("imprimirmenoramayor");
    var imprimirmayormenor = document.getElementById("imprimirmayormenor");

    //Ordenar alfabeticamente los numeros;
    ArregloNumero.sort();
    //Creo una funcion en el metodo sort para poder ordenar los numeros numericamente de menor a mayor
    imprimirmenormayor.innerText = "Los números ordenados de menor a mayor son:" + " " + ArregloNumero.sort(MenorAMayor);  //1,2,4,4,7,9,11,111
    //Creo una funcion en el metodo sort para poder ordenar los numeros numericamente de mayor a menor 
    imprimirmayormenor.innerText = "Los números ordenados de mayor a menor son:" + " "  + ArregloNumero.sort(MayorAMenor);

}
//Funcion qur me permite ordenar de menor a mayor el arreglo
function MenorAMayor(elem1, elem2){
    //termina la funcion y regresa el valor
    return elem1 - elem2;
    //1-4, 1-2, 1-9, 
    //4-2, 2-9,2-11
    //4-9, 4-11.
}

function MayorAMenor(elem1,elem2){
    return elem2 - elem1;  //else if(elem2 > elem1);
}