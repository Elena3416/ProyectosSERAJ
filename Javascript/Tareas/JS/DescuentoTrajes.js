function EventListener(){
    document.getElementById("DescTraje").addEventListener("click" , DescuentosTraje());
}

function DescuentosTraje(){

    var PrecioTraje = Number(document.getElementById("PrecioTraje").value);
    var ImprimirPrecioDescuento = document.getElementById("DescuentoTraje");
    var Descuento = 0, cantdescuento = 0;

    if(PrecioTraje > 3600){
        Descuento = PrecioTraje * 0.84;
        cantdescuento = PrecioTraje - Descuento;
        ImprimirPrecioDescuento.innerText = "El total del traje es de: $" + Descuento + " " +
        "con un descuento en $" + cantdescuento;
    }
     else{
        Descuento = PrecioTraje * 0.93;
        cantdescuento = PrecioTraje - Descuento;
        ImprimirPrecioDescuento.innerText = "El total del traje es de: $" + Descuento + " " + 
        "con un descuento en $" + cantdescuento;
    }
}