var Persona = {
	Nombre: "Laura",
	Apellido: "Rubalcava",
	Edad: 26,
	Genero: "Mujer",
	Nacionalidad: "Mexicana"
}

var Comida = {
	Mexicana: "Pozole",
	Europea: "Paella",
	Fancesa: "Ratatouille",
	Italiana: "Espagetti",
	Estadounidense: "Hamburgesa"
}

var Peliculas = {
	Terror: "Anabelle",
	Comedia: "Chicas malas", 
	Ficcion: "Avengers",
	Romantica: "Yo antes de ti"	
}

var Musica = {
	Rock: "Twenty One Pilots",
	Pop: "Dua Lipa",
	HipHop: "Eminem",
	Reggaeton: "J Balvin"
}


function GuardarPersona(){
    localStorage.setItem("InfoPersona", JSON.stringify(Persona));
}

function ObtenerPersona(){
    var ImpNombre = document.getElementById("ImpNombreCompleto");
    var ImpEdad = document.getElementById("ImpEdad");
    var ImpGenero = document.getElementById("ImpGenero");
    var ImpNacionalidad = document.getElementById("ImpNacionalidad");

    localStorage.getItem("InfoPersona");

    ImpNombre.innerText = "Mi nombre es:" + " " + Persona.Nombre + " " + Persona.Apellido;
    ImpEdad.innerText = "Mi edad es de:" + " " + Persona.Edad + " " +  "años";
    ImpGenero.innerText = "Mi Género es:" + " " + Persona.Genero;
    ImpNacionalidad.innerText = "Mi Nacionalidad es:" + " " + Persona.Nacionalidad;
}

function GuardarComida(){
    localStorage.setItem("ComidasFavoritas", JSON.stringify(Comida));
}

function ObtenerComida(){
    var ComidaMex = document.getElementById("ComMexicana");
    var ComidaEu = document.getElementById("ComEuropea");
    var ComidaFran = document.getElementById("ComFrancesa");
    var ComidaIta = document.getElementById("Comitaliana");
    var ComidaUSA = document.getElementById("ComEstadounidense");

    localStorage.getItem("ComidasFavoritas");

    ComidaMex.innerText = "La comida típica de México es:" + " " + Comida.Mexicana;
    ComidaEu.innerText = "La comida típica de Europa es:" + " " + Comida.Europea;
    ComidaFran.innerText = "La comida típica de Francia es:" + " " + Comida.Fancesa;
    ComidaIta.innerText = "La comida típica de Italia es:" + " " + Comida.Italiana;
    ComidaUSA.innerText = "La comida típica de USA es:" + " " + Comida.Estadounidense;
}

function GuardarPelicula(){
    localStorage.setItem("PeliculasFavoritas", JSON.stringify(Peliculas));
}

function ObtenerPelicula(){
    
    var PeliculaTerror = document.getElementById("PeliculasTerror");
    var PeliculaComedia = document.getElementById("PeliculasComedia");
    var PeliculaFiccion = document.getElementById("PeliculasFiccion");
    var PeliculaRomanticas = document.getElementById("PeliculasRomanticas");

    localStorage.getItem("PeliculasFavoritas");

    PeliculaTerror.innerText = "Mi pelicula favorita de terror es la de " + " " + Peliculas.Terror;
    PeliculaComedia.innerText = "Mi pelicula favorita de comedia es la de" + " " + Peliculas.Comedia;
    PeliculaFiccion.innerText = "Mi pelicula favorita de ficcion es la de" + " " + Peliculas.Ficcion;
    PeliculaRomanticas.innerText = "Mi pelicula favorita romantica es la de" + " " + Peliculas.Romantica;
}

function GuardarMusica(){
    localStorage.setItem("ArtistasdeGeneros", JSON.stringify(Musica));
}

function ObtenerMusica(){

    var Rock = document.getElementById("MusicaRock");
    var Pop = document.getElementById("MusicaPop");
    var HipHop = document.getElementById("MusicaHipHop");
    var Reggaeton = document.getElementById("MusicaReggaeton");

    localStorage.getItem("ArtistasdeGeneros");

    Rock.innerText = "Un artista de rock es:" + " " + Musica.Rock;
    Pop.innerText = "Una artista de pop es:" + " " + Musica.Pop;
    HipHop.innerText = "Un artista de hiphop es:" + " " + Musica.HipHop;
    Reggaeton.innerText = "Un artista de reggaeton es:" + " " + Musica.Reggaeton;
}