//function es la palabra que nos indica que vamos a crear un funcion
function EjercicioVariables(){

    // //Se crea un variable de tipo false
    // var mayorde25 = false;
    // //Se crea un variable inexistente con mayor a 25
    // mayorde25 = otravariable;
    // //La alerta de imprimir resultado
    // alert("Mostrar un mensaje que no se ejecuta");

    //Se declara una variable booleana porque estoy inicializandola con true
    // var foco = false;

    // if(foco == false){
    //     alert("El foco esta encendido");
    // }else{
    //     alert("El foco esta apagado");
    // }

    //  if(!foco == true){
    //     alert("El foco esta encendido");
    //  }   else{
    //     alert("El foco esta apagado"); 
    //  }


     var a=1, b=2, c=3;
     var casado = true; //1
     var mayorde25 = false; //0
     var texto1 = "En un lugar de la mancha"; 

     //Si mando llamar la variable casado imprime true
     console.log("La variable casado vale" + " " + casado);
     console.log("La varable de mayor de 25 vale" + " " + mayorde25);
     //El booleano true se convierte en 1 para poder multiplicar 1*2;
     console.log("La multiplicacion del true es" + " "+ (casado * b));
     //El booleano false se convierte en 0 para poder multiplicar * 0
     console.log("La multiplicacion del false es" + " " + (mayorde25 * c));
    //La variable casado vale true porque no le hemos hecho un cambio
     console.log("La variable casado ahora vale" + " " + casado);
     console.log("La variable mayorde25 ahora vale" + " " + mayorde25);
     //Sumar las variables, a+b+c, el resultado es 6
     console.log("La suma de los numeros es:" + " " + (a + b + c ));
    //Multiplicar frases con numeros imprime un NaN, que significa que no es un numero
     console.log("Que obtenemos multiplicando texto con un numero" + " " + (texto1 * a));

    //toString - Cualquier tipo de variable lo escribe el resultado en un texto 
    //Un booleano con un string imprime un true como un texto
    console.log("Mostramos lo equivalente  de true en texto" + " " + casado.toString());

    //Imprime el texto
    console.log(texto1.toString());

    var arreglo = ["Quiero","Aprender"];
    //imprime la frase separada por coma
    console.log(arreglo.toString());

    //Imprimir el numero con si fuera texto y si yo sumara a.tostring + b,tostring, solo junta los numeros
    console.log(a.toString() + b.toString()); //12
    console.log(b.toString() + c.toString()); //23
    console.log(c.toString() + a.toString()); //31

    //Suma a + b 
    console.log(a + b);//3
}
