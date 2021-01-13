function ArreglosJavascript(){
    //Primer forma de declarar un arreglo
    //Declaro una variable con la palabra reservada new array con un cuadro de 7 posiciones
    var DiasSemana = new Array(7);

    //Llenar la informacion en el arreglo con los indices que comienza con 0
    DiasSemana[0] = "Lunes";
    DiasSemana[1] = "Martes";
    DiasSemana[2] = "Miercoles";
    DiasSemana[3] = "Jueves";
    DiasSemana[4] = "Viernes";
    DiasSemana[5] = "Sabado";
    DiasSemana[6] = "Domingo";

    //Imprimir el arreglo completo
    console.log(DiasSemana);
    //Imprimir un dia de la semana con su indice
    console.log(DiasSemana[4]);
    //imprimir todos los dias de la semana con su indice
    console.log(DiasSemana[0], DiasSemana[1], DiasSemana[2], DiasSemana[3], DiasSemana[4], 
        DiasSemana[5], DiasSemana[6]);

    //Segunda forma de declarar un arreglo
      var Semanas = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

      //imprimir el arreglo completo
      console.log(Semanas);  
      //Imprimir un dia de la semana con su indice
      console.log(Semanas[4]);
      //imprimir todos los dias de la semana con su indice
      console.log(Semanas[0], Semanas[1], Semanas[2], Semanas[3], Semanas[4], Semanas[5], Semanas[6]);
}
