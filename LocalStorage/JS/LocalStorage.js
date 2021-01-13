function LocalStorage(){
    //Utiliza la palabra reservada localstorage y para guardar la informacion es con setitem("key", "value");
    localStorage.setItem("Nombre", "Laura Rubalcava");
    localStorage.setItem("Numero", 30);
    localStorage.setItem("Booleano", true);
    localStorage.setItem("Arreglo", [1,2,3,4,5]);

    var Ropa = {
        calzado: "tenis",
        calzado2: "pantuflas",
        calzado3: "chanclas",
        jens: "Pantalon Mezclilla",
    };

    //JSON.stringfy es un formato de javascript para guardar el objeto en el localstorage
    localStorage.setItem("Objeto", JSON.stringify(Ropa));

    //Imprimo en consola la clave que yo tengo en el localstorage
    //GetItem se utiliza para obtener informacion del localstorage
    console.log(localStorage.getItem("Nombre"));

    //removeItem
    //Se utiliza para eliminar un dato del localstorage, utilizo la clave de la informacion que voy a eliminar
    localStorage.removeItem("booleano");

    //Clear() Se encarga de eliminar toda la informacion que esta en el localstorage
    localStorage.clear();

    var usuario = {
        nombre: "Laura",
        edad: 26,
        Nacionalidad: "Mexicana"
    }

    //Guardo el objeto en el localstorage y solo convierto la informacion con el json.stringify para guardalo
    localStorage.setItem("Usuarios", JSON.stringify(usuario));

    //Ya teniendo el objeto en el localstorage, convierto el objeto con el json.parse para imprimirlo en consola
    console.log(JSON.parse(localStorage.getItem("Usuarios")));

    //JSON.stringify funciona con el setItem y el JSON.parse funciona con el getItem


    var usuario = {
        nombre: "Patricia",
        edad: 30,
        nacionalidad:"USA"   
    }

    console.log(usuario.edad);

    localStorage.setItem("Nombres",  JSON.stringify(usuario));

    console.log(  JSON.parse( localStorage.getItem("Nombre")));


}    

 
    
    

