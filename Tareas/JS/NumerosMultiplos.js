function EventListener(){
    document.getElementById("BtnCalcular").addEventListener("click", CalcularNM());
}

function CalcularNM(){

    var numero1 = Number(document.getElementById("numero1").value);
    var numero2 = Number(document.getElementById("numero2").value);
    var imprimirmsg = document.getElementById("imprimirmsgmultiplo");
    imprimirmsg.innerText = "";
    
    if(numero1 % numero2 == 0){
        imprimirmsg.innerText = "El numero1 es multiplo del numero2";
    }else {
        imprimirmsg.innerText = "El numero1 no es multiplo del numero2";
    }
}