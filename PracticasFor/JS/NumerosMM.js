//Se requiere un algoritmo para determinar, de N cantidades, cuantas son menores o iguales a 0 y cuantas mayores a 0 

function NumerosMayoresMenores(){

    //con esta instruccion vamos a saber cuantos numeros vamos a contar
    //prompt es un cuadro de texto que nos permite ingresar la informacion
    var Nnumeros = prompt("¿Cuántos números en total vas a ingresar?"); //10
    var contador = 0, contadorneg=0;
    var contador2 = 1, contadorneg2=1; 

    //for(var x=0; x<4; x++) 
    //for(inicializar una variable; realizar la compracion con la variable; contar en 1 en 1 la variable);
    for(var x=0; x<Nnumeros; x++){
        var numero = prompt("Ingresa un número");
        //Se tiene el if dentro del for para hacer la comparacion de los numeros
        if(numero >= 0){
            //se utiliza para contar los numeros positivos 
            contador = contador + contador2;
        }else{
            //Se utiliza para contar los numeros negativos
            contadorneg = contadorneg + contadorneg2;
        }  
    }
    alert("Los numeros mayores o iguales a cero son:" + " " + contador + " " + "Los menores a cero son contador" + " " +contadorneg);
}

//1 3 5 -1 -2 4 5 6 -6 0   //Serie numeros de 10 

