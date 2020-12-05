function MetodosdeArreglos(){

    var ArregloNumeros = [1,4,5,7,8,9,5,4];
    var Arreglo2 = [2,5,6,7,0];
    var Arreglo3 = [1,2,3,4,5,11,33,22,28,6,55,44,111];
    var Arreglo4 = ["Manzana", "Pera", "Mesa", "pared", "ropero", "raton"];
    var Arreglo5 = ["Hola", "como", "estas"];
     
    //Agregar el numero al final del arreglo y ademas cuenta cuantos numeros son en total despues de que agregó
    //el ultimo numero 
    console.log(ArregloNumeros.push(5));  

    //Imprime todos los valores del arreglo
    console.log(ArregloNumeros.slice());

    //Agregar el numero al inicio del arreglo y ademas cuenta cuantos numeros son en total despues de que agregó
    //el ultimo numero
    console.log(Arreglo2.unshift(9));

    //Imprimir todos los valores del arreglo
    console.log(Arreglo2.slice());

    //imprime el arreglo original
    console.log(Arreglo3);

    //imprime los 
    console.log(Arreglo3.sort());
    //1,11,111,2,22,28,3,33,4,44,5,55,6

    console.log(Arreglo4);
    
    console.log(Arreglo4.sort());

    var ArregloNumeros = [1,4,5,7,8,9,5,4];

    console.log(ArregloNumeros);

    //Elimina el ultimo elemento del arreglo
    console.log(ArregloNumeros.pop());

    console.log(ArregloNumeros.slice());

    //Elimina el primer elemento del arreglo
    console.log(ArregloNumeros.shift());   

    //Imprimir el arreglo completo y visualizar que haya eliminado los valores
    console.log(ArregloNumeros.slice());

    //Acomodar los numeros del ultimo al primero
    console.log(ArregloNumeros.reverse());

    console.log(Arreglo5.join());
    console.log(Arreglo5.join(" ")); //Para que imprima la frase se agrega comillas y un espacio 
}
