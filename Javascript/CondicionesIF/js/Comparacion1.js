//Quiere comparar si una persona es mayor de edad y si tiene la INE y si ya puede tomar o no.

function EventListener(){
    //Obtiene el id del boton que esta en el html y va a estar atento cuando le de click al boton
    document.getElementById("CalcularEdad").addEventListener("click", CalcularEdad());
}

function CalcularEdad()
{
    //Obtener el id del input, pero con el .value obtenemos lo que ingresamos en el input,ademas
    //el Number indica que tipo de variable es
    var edad = Number(document.getElementById("edad").value);
    //Se declara otra variable para leer el valor del input ine
    var ine = Number(document.getElementById("INE").value);
    //Se crea una variable para imprimir la informacion
    var imprimirInformacion = document.getElementById("ImprimirEdad");

    if(edad >= 18 && ine==1){
        //InnerText lo que hace es mandar llamar al html e imprimir el resultado
        imprimirInformacion.innerText = "La persona es mayor de edad, tiene su ine y puede tomar";
    }else if(edad >=18 && ine==0){
        imprimirInformacion.innerText = "La persona es mayor de edad, pero como no tiene su ine no puede tomar";
    }else if(edad<18 && ine==0){
        imprimirInformacion.innerText = "La persona es menor de edad, pero no puede tener ine";
    } 


 
}