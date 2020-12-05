var Laptop = {
    TamañoPantalla: "15 pulgadas",
    Mouse: "Azul",
    Teclado: "Teclado Numerico",
    Color:	"Gris",	
    Precio: 9999
};

var Celular = {
    TamañoPantalla: "5 pulgadas",
    Color: "Verde",
	Peso: "15gr",
	Precio: 4599
};
    
var Television = {
	Precio: 30950,
	TamañoPantalla: "15 pulgadas",
	Peso: "50 gramos",
    Altura: "50cm",
    Ancho:	"100cm"
}
 
var SmartWatch = {
    Ancho: "20cm",
    Altura: "10cm",
    TamañoPantalla: "10 pulgadas",
    Peso: "10 gr"
}

var AparatosElectrónicos = {
	Marca1: "Samsung",
	Marca2: "Sony",
	Marca3: "LG",
	Marca4: "HP",	
	Marca5: "Lenovo",
}
//Marcas Samsung
function MarcaSamsung(){

    var imprimirMarcasSamsung = document.getElementById("Samsung");

    var LaptopSamsung = {
        TamañoPantalla: Laptop.TamañoPantalla,
        Mouse: Laptop.Mouse,
        Teclado: Laptop.Teclado,
        Color: Laptop.Color,
        Precio: Laptop.Precio,
        Marca: AparatosElectrónicos.Marca1
    };

    var listado = document.createElement("li");
    listado.setAttribute("class", "list-group-item mt-2");
    listado.innerText = "Las características de la Laptop son:" +  " " + JSON.stringify(LaptopSamsung);
    imprimirMarcasSamsung.appendChild(listado);

    var CelularSamsung = {
        TamañoPantalla: Celular.TamañoPantalla,
        Color: Celular.Color,
        Peso: Celular.Peso,
        Precio: Celular.Precio,
        Marca: AparatosElectrónicos.Marca1
    };

    var listado = document.createElement("li");
    listado.setAttribute("class", "list-group-item mt-2");
    listado.innerText = "Las características del Celular son:" +  " " + JSON.stringify(CelularSamsung);
    imprimirMarcasSamsung.appendChild(listado);

    var TelevisionSamsung = {
        Precio: Television.Precio,
        TamañoPantalla: Television.TamañoPantalla,
        Precio: Television.Precio,
        Altura: Television.Altura,
        Ancho: Television.Ancho,
        Marca: AparatosElectrónicos.Marca1
    };

    var listado = document.createElement("li");
    listado.setAttribute("class", "list-group-item mt-2");
    listado.innerText = "Las características de la Televisión son:" +  " " + JSON.stringify(TelevisionSamsung);
    imprimirMarcasSamsung.appendChild(listado);

    var SmartWatchSamsung = {
        Ancho: SmartWatch.Ancho,
        Altura: SmartWatch.Altura,
        TamañoPantalla: SmartWatch.TamañoPantalla,
        Peso: SmartWatch.Peso,
        Marca: AparatosElectrónicos.Marca1
    };

    var listado = document.createElement("li")  ;
    listado.setAttribute("class", "list-group-item mt-2");
    listado.innerText = "Las características del SmartWatch son:" +  " " + JSON.stringify(SmartWatchSamsung);
    imprimirMarcasSamsung.appendChild(listado);
}
//Marcas Sony
function MarcaSony(){

    var imprimirAparatosSony = document.getElementById("Sony");

    var LaptopSony = {
        TamañoPantalla: Laptop.TamañoPantalla,
        Mouse: Laptop.Mouse,
        Teclado: Laptop.Teclado,
        Color: Laptop.Color,
        Precio: Laptop.Precio,
        Marca: AparatosElectrónicos.Marca2
    };

    var lista = document.createElement("li");
    lista.setAttribute("class", "list-group-item mt-2");
    lista.innerText = "Las características de la Laptop son:" +  " " + JSON.stringify(LaptopSony);
    imprimirAparatosSony.appendChild(lista);

    var CelularSony = {
        TamañoPantalla: Celular.TamañoPantalla,
        Color: Celular.Color,
        Peso: Celular.Peso,
        Precio: Celular.Precio,
        Marca: AparatosElectrónicos.Marca2
    };

    var lista = document.createElement("li");
    lista.setAttribute("class", "list-group-item mt-2");
    lista.innerText = "Las características del Celular son:" +  " " + JSON.stringify(CelularSony);
    imprimirAparatosSony.appendChild(lista);

    var TelevisionSony = {
        Precio: Television.Precio,
        TamañoPantalla: Television.TamañoPantalla,
        Precio: Television.Precio,
        Altura: Television.Altura,
        Ancho: Television.Ancho,
        Marca: AparatosElectrónicos.Marca2
    };

    var lista = document.createElement("li");
    lista.setAttribute("class", "list-group-item mt-2");
    lista.innerText = "Las características de la Televisión son:" +  " " + JSON.stringify(TelevisionSony);
    imprimirAparatosSony.appendChild(lista);

    var SmartWatchSony = {
        Ancho: SmartWatch.Ancho,
        Altura: SmartWatch.Altura,
        TamañoPantalla: SmartWatch.TamañoPantalla,
        Peso: SmartWatch.Peso,
        Marca: AparatosElectrónicos.Marca2
    };

    var lista = document.createElement("li")  ;
    lista.setAttribute("class", "list-group-item mt-2");
    lista.innerText = "Las características del SmartWatch son:" +  " " + JSON.stringify(SmartWatchSony);
    imprimirAparatosSony.appendChild(lista);
}
//Marcas LG
function MarcaLG(){

    var imprimirMarcasSamsung = document.getElementById("LG");

    var LaptopLG = {
        TamañoPantalla: Laptop.TamañoPantalla,
        Mouse: Laptop.Mouse,
        Teclado: Laptop.Teclado,
        Color: Laptop.Color,
        Precio: Laptop.Precio,
        Marca: AparatosElectrónicos.Marca3
    };

    var listas = document.createElement("li");
    listas.setAttribute("class", "list-group-item mt-2");
    listas.innerText = "Las características de la Laptop son:" +  " " + JSON.stringify(LaptopLG);
    imprimirMarcasSamsung.appendChild(listas);

    var CelularLG = {
        TamañoPantalla: Celular.TamañoPantalla,
        Color: Celular.Color,
        Peso: Celular.Peso,
        Precio: Celular.Precio,
        Marca: AparatosElectrónicos.Marca3
    };

    var listas = document.createElement("li");
    listas.setAttribute("class", "list-group-item mt-2");
    listas.innerText = "Las características del Celular son:" +  " " + JSON.stringify(CelularLG);
    imprimirMarcasSamsung.appendChild(listas);

    var TelevisionLG = {
        Precio: Television.Precio,
        TamañoPantalla: Television.TamañoPantalla,
        Precio: Television.Precio,
        Altura: Television.Altura,
        Ancho: Television.Ancho,
        Marca: AparatosElectrónicos.Marca3
    };

    var listas = document.createElement("li");
    listas.setAttribute("class", "list-group-item mt-2");
    listas.innerText = "Las características de la Televisión son:" +  " " + JSON.stringify(TelevisionLG);
    imprimirMarcasSamsung.appendChild(listas);

    var SmartWatchLG = {
        Ancho: SmartWatch.Ancho,
        Altura: SmartWatch.Altura,
        TamañoPantalla: SmartWatch.TamañoPantalla,
        Peso: SmartWatch.Peso,
        Marca: AparatosElectrónicos.Marca3
    };

    var listas = document.createElement("li")  ;
    listas.setAttribute("class", "list-group-item mt-2");
    listas.innerText = "Las características del Smartwatch son:" +  " " + JSON.stringify(SmartWatchLG);
    imprimirMarcasSamsung.appendChild(listas);
}

//Marcas HP
function MarcaHP(){
    var imprimirMarcasHP = document.getElementById("HP");

    var LaptopHP = {
        TamañoPantalla: Laptop.TamañoPantalla,
        Mouse: Laptop.Mouse,
        Teclado: Laptop.Teclado,
        Color: Laptop.Color,
        Precio: Laptop.Precio,
        Marca: AparatosElectrónicos.Marca4
    };

    var list = document.createElement("li")  ;
    list.setAttribute("class", "list-group-item mt-2");
    list.innerText = "Las características de la Laptop son:" +  " " + JSON.stringify(LaptopHP);
    imprimirMarcasHP.appendChild(list);
}

//Marcas Lenovo
function MarcaLenovo(){

    var imprimirMarcasLenovo = document.getElementById("Lenovo");

    var LaptopLenovo = {
        TamañoPantalla: Laptop.TamañoPantalla,
        Mouse: Laptop.Mouse,
        Teclado: Laptop.Teclado,
        Color: Laptop.Color,
        Precio: Laptop.Precio,
        Marca: AparatosElectrónicos.Marca4
    };  

    var lists = document.createElement("li")  ;
    lists.setAttribute("class", "list-group-item mt-2");
    lists.innerText = "Las características de la Laptop son:" +  " " + JSON.stringify(LaptopLenovo);
    imprimirMarcasLenovo.appendChild(lists);
}