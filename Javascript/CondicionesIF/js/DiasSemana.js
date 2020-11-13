//Es para poner mandar llamar al boton
function EventListener(){
    document.getElementById("calculardias").addEventListener("click", Calculardiassemana());
}
function Calculardiassemana(){
    //leer el valor del input
    var diasemana = Number(document.getElementById("dias").value);
    //imprimir el resultado
    var imprimirdiacorrespondiente = document.getElementById("imprimirdiacorrespondiente");

    if(diasemana == 1){
        imprimirdiacorrespondiente.innerText = "El dia seleccionado es Lunes";
    }
    if(diasemana == 2){
        imprimirdiacorrespondiente.innerText = "El dia seleccionado es Martes";
    }
    if(diasemana == 3){
        imprimirdiacorrespondiente.innerText = "El dia seleccionado es Miercoles";
    }
    if(diasemana == 4){
        imprimirdiacorrespondiente.innerText = "El dia seleccionado es Jueves";
    }
    if(diasemana == 5){
        imprimirdiacorrespondiente.innerText = "El dia seleccionado es Viernes";
    }
    if(diasemana == 6){
        imprimirdiacorrespondiente.innerText = "El dia seleccionado es Sabado";
    }
    if(diasemana == 7){
        imprimirdiacorrespondiente.innerText = "El dia seleccionado es Domingo";
    }
}

