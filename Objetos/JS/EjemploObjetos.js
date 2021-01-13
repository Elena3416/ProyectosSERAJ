function Objetos(){

    var coche1 = {
      puertas: 2,
      ruedas: 4,
      luces: 4,
      espejos: 2,
      color: "azul",
    };

    var coche2 = {
      puertas: 4,
      ruedas: 4,
      luces: 4,
      espejos: 2,
      color: "rojo"
    };  

    var coche3 = {
      puertas: 2,
      ruedas: 4,
      luces: 4,
      espejos: 2,
      color: "negro"
    }
    
    var coche4 = {
      puertas: 4,
      ruedas: 4,
      luces: 4,
      espejos: 2,
      color:"gris"
    };

    var fabricantes = {
      marca1:"Ford",
      modelo1: "Ford Focus",
      anio1: 2010,
      marca2: "Seat",
      modelo2: "Seat Ibiza",
      anio2:2020,
      marca3:"BMW",
      modelo3: "BMW Serie 3",
      anio3: 2015,
      marca4: "Peugeot",
      modelo4: "Peugeot 206",
      anio4: 2018
    };

    var Ford = {
      puertas: coche1.puertas,
      ruedas: coche1.ruedas,
      luces: coche1.luces,
      espejo: coche1.espejos,
      color: coche1.color,
      marca: fabricantes.marca1,
      modelo: fabricantes.modelo1,
      anio: fabricantes.anio1
    }

    //Imprimir el objeto completo
    console.log(Ford);
    //Imprimir el resultado de una propiedad
    console.log("Las puertas de la marca Ford son:" +  Ford.puertas);
    console.log("Los espejos de la marca Ford son:"  + Ford.espejo);

    var Seat = {
      puertas: coche2.puertas,
      ruedas: coche2.ruedas,
      luces: coche2.luces,
      espejo: coche2.espejos,
      color: coche2.color,
      marca: fabricantes.marca2,
      modelo: fabricantes.modelo2,
      anio: fabricantes.anio2
    };

    console.log(Seat);
    console.log("El color de la marca Seat es:"  + Seat.color);
    console.log("El año de la marca Seat es:"  + Seat.anio);

    var BMW = {
      puertas: coche3.puertas,
      ruedas: coche3.ruedas,
      luces:  coche3.luces,
      espejo: coche3.espejos,
      color:  coche3.color,
      marca: fabricantes.marca3,
      modelo: fabricantes.modelo3,
      anio: fabricantes.anio3
    }
        
    console.log(BMW);
    console.log("Las ruedas del BMW son:"  + BMW.ruedas);
    console.log("Las luces del BMW son:"  + BMW.luces);


    var Peugeot = {
      puertas: coche4.puertas,
      ruedas: coche4.ruedas,
      luces: coche4.luces,
      espejos: coche4.espejos,
      color: coche4.color,
      marca: fabricantes.marca4,
      modelo: fabricantes.modelo4,
      anio: fabricantes.anio4
    };

    console.log(Peugeot);
    console.log("El modelo es:" + Peugeot.modelo);
    console.log("La marca es:" +  Peugeot.marca);

}

