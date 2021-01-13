function EventListener(){
    document.getElementById("ReferenciarCalificacion").addEventListener("click", CalcularCalificacion())
}

function CalcularCalificacion(){
    
    var Calificacion = Number(document.getElementById("Calificacion").value);
    var imprimirletracorrespondiente = document.getElementById("ReferenciandoCalificacion");
    imprimirletracorrespondiente.innerText = "";   

    if(Calificacion == 10){
        imprimirletracorrespondiente.innerText = "La calificación corresponde es la letra A";  
    }
    
    if(Calificacion == 9){
        imprimirletracorrespondiente.innerText = "La calificación corresponde es la letra B";  
    }
    
    if(Calificacion == 8){
        imprimirletracorrespondiente.innerText = "La calificación corresponde es la letra C";  
    }
    
    if(Calificacion == 7 || Calificacion == 6){
        imprimirletracorrespondiente.innerText = "La calificación corresponde es la letra D";  
    }

    if(Calificacion == 5 || Calificacion == 4 || Calificacion == 3 || Calificacion == 2 || Calificacion == 1
        || Calificacion == 0){
        imprimirletracorrespondiente.innerText = "La calificación corresponde es la letra F";  
    }
}