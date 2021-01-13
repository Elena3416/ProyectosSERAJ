function ArreglosyMetodos(){

    var Nombres = ['Manuela Eufemia', 'Benigna Imelda', 'Isaías Paquito', 'Ximena Adán','Nicolás Emiliana'];
        
    console.log(Nombres);
    console.log(Nombres.push("Laura Rubalcava"));
    console.log(Nombres.slice());
    console.log(Nombres.push("Luis de Santos"));
    console.log(Nombres.slice());
    console.log(Nombres.unshift("Maria Velasco"));
    console.log(Nombres.slice());
    console.log(Nombres.unshift("Elias Esteban"));
    console.log(Nombres.slice());


    var weekdays = ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'];
        
    console.log(weekdays);
    console.log(weekdays.push("Miercoles"));
    console.log(weekdays.slice());
    console.log(weekdays.push("Lunes"));
    console.log(weekdays.slice());
    console.log(weekdays.unshift("Jueves"));
    console.log(weekdays.slice());
    console.log(weekdays.unshift("Domingo"));
    console.log(weekdays.slice());


    var madrid = ['Madrid', 40.4893538, -3.6827461];

    console.log(madrid);
    console.log(madrid.push("Paella"));
    console.log(madrid.slice());
    console.log(madrid.push(false));
    console.log(madrid.slice());
    console.log(madrid.unshift("España"));
    console.log(madrid.slice());
    console.log(madrid.unshift(true));  
    console.log(madrid.slice());  

    var fruits = ['pera','manzana','naranja','plátano'];

    console.log(fruits);
    console.log(fruits.push("mango"));
    console.log(fruits.slice());
    console.log(fruits.push("fresa"));
    console.log(fruits.slice()); 
    console.log(fruits.unshift("papaya"));
    console.log(fruits.slice());
    console.log(fruits.unshift("guayaba"));   
    console.log(fruits.slice());

    var ArregloVacio = [];

    console.log(ArregloVacio);
    console.log(ArregloVacio.push(3));
    console.log(ArregloVacio.slice());
    console.log(ArregloVacio.unshift("Hearts"));
    console.log(ArregloVacio.slice());
    console.log(ArregloVacio.push("Yellow"));
    console.log(ArregloVacio.slice());
    console.log(ArregloVacio.unshift(5));
    console.log(ArregloVacio.slice());
    console.log(ArregloVacio.push(10));
    console.log(ArregloVacio.slice());
    console.log(ArregloVacio.unshift("Blue"));
    console.log(ArregloVacio.slice());
    console.log(ArregloVacio.push(true));
    console.log(ArregloVacio.slice());
    console.log(ArregloVacio.unshift(9));
    console.log(ArregloVacio.slice());
    console.log(ArregloVacio.push(false));
    console.log(ArregloVacio.slice());
    console.log(ArregloVacio.unshift("love"));
    console.log(ArregloVacio.slice());

}