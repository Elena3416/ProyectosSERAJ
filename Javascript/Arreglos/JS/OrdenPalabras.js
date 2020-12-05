function EventLister(){
    document.getElementById("btncalcular").addEventListener("click", OrdenarPalabras());
}

function OrdenarPalabras(){

    var ArregloPalabras = ['Moto', 'soto', 'Abaco', 'abeja', 'Sapo', 'nieve', 'Zumba', 'barco'];

    var ImprimirArregloOriginal = document.getElementById("ArregloOriginal");
    var ImprimirArregloOrdenado = document.getElementById("ArregloOrdenado");

    ImprimirArregloOriginal.innerText = "El arreglo original es:" + " " + ArregloPalabras;
    ImprimirArregloOrdenado.innerText = "El arreglo ordenado es:" + " " + ArregloPalabras.sort();

    var ArregloPalabras2 = ['bicicleta', 'silla', 'cama', 'computadora', 'celular', 'viento', 'salmon', 'pared'];

    var ImprimirArregloOriginal2 = document.getElementById("ArregloOriginal2");
    var ImprimirArregloOrdenado2 = document.getElementById("ArregloOrdenado2");

    ImprimirArregloOriginal2.innerText = "El arreglo original es:" + " " + ArregloPalabras2;
    ImprimirArregloOrdenado2.innerText = "El arreglo ordenado es:" + "  " + ArregloPalabras2.sort();
}
