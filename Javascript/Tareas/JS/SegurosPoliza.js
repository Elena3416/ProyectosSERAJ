function EventListener(){
    document.getElementById("SeleccionPoliza").addEventListener("click", CalcularPoliza());
}

function CalcularPoliza(){
    var TipoPoliza = String(document.getElementById("TipoPoliza").value);
    var CostoPoliza = String(document.getElementById("CostoPoliza").value);
    var PosiblesHabitos = String(document.getElementById("habitos").value);
    var imprimircostopoliza = document.getElementById("Imprimirpoliza");
    imprimircostopoliza.innerText = "";
    var cargo=0, totalpoliza =0;

    if(TipoPoliza == 'A' && CostoPoliza == '1' && PosiblesHabitos == "1"){
        cargo = 1200 * 0.10;
        totalpoliza = 1200 + cargo;
    }
    else if(TipoPoliza == 'A' && CostoPoliza == '1' && PosiblesHabitos == '2'){
        cargo = 1200 * 0.05;
        totalpoliza = 1200 + cargo;
    }
    else if(TipoPoliza == 'A' && CostoPoliza == '1' && PosiblesHabitos == '3'){
        cargo = 1200 * 0.05;
        totalpoliza = 1200 + cargo;
    }
    else if(TipoPoliza == 'A' && CostoPoliza == '1' && PosiblesHabitos == '4'){
        cargo = 1200 * 0.20;
        totalpoliza = 1200 + cargo;
    }
    else if(TipoPoliza == 'A' && CostoPoliza == '1' && PosiblesHabitos == '5'){
        cargo = 1200 * 0.10;
        totalpoliza = 1200 + cargo;
    }
    else if(TipoPoliza == 'B' && CostoPoliza == '2' && PosiblesHabitos == "1"){
        cargo = 950 * 0.10;
        totalpoliza = 950 + cargo;
    }
    else if(TipoPoliza == 'B' && CostoPoliza == '2' && PosiblesHabitos == '2'){
        cargo = 950 * 0.05;
        totalpoliza = 950 + cargo; 
    }
    else if(TipoPoliza == 'B' && CostoPoliza == '2' && PosiblesHabitos == '3'){
        cargo = 950 * 0.05;
        totalpoliza = 950 + cargo;
    }
    else if(TipoPoliza == 'B' && CostoPoliza == '2' && PosiblesHabitos == '4'){
        cargo = 950 * 0.20;
        totalpoliza = 950 + cargo;
    }
    else if(TipoPoliza == 'B' && CostoPoliza == '2' && PosiblesHabitos == '5'){
        cargo = 950 * 0.10;
        totalpoliza = 950 + cargo;
    }
    imprimircostopoliza.innerText = "La poliza te cuesta:" + totalpoliza;
}