let spiderman = {
    nombre: "Spiderman: No Way Home",
    año: 2021,
    director: "Jon Watts",
    genero: "Cine de superhéroes",
    imagen: "images/spiderman.png"
}

let encanto = {
    nombre: "Encanto",
    año: "2021",
    director: "Byron Howard",
    genero: "Animación",
    imagen: "images/encanto.png"
}

let bastardos = {
    nombre: "Bastardos sin gloria",
    año: 2009,
    director: "Quentin Tarantino",
    genero: "Bélico",
    imagen: "images/bastardos.png"
}

let toy = {
    nombre: "Toy Story 3",
    año: 2010,
    director: "Lee Unkrich",
    genero: "Animación",
    imagen: "images/toy.jpg"
}

let interstellar = {
    nombre: "Interstellar",
    año: 2014,
    director: "Christopher Nolan",
    genero: "Ciencia ficción",
    imagen: "images/interstellar.png"
}

function index() {
    window.open("index.html", "_self");
}

var peliculas = [spiderman, encanto, bastardos, toy, interstellar];

function cargarInfo (id) {
    
    slider = document.getElementById("container-slider");
    cards = document.getElementById("cards");
    list = document.getElementById("lista");

    list.style.display = "block";
    slider.style.display = "none";
    cards.style.display = "none";

    var num = id;
    const lista = document.getElementById("lista");
    const agregar = document.createElement("div");

    agregar.innerHTML = `
        <div class="Hola">
            <div class="con">
                <h5>Nombre: </h5>
                <p>${peliculas[id].nombre}</p>
            </div>
            <br>
            <div class="con">
                <h5>Año: </h5>
                <p>${peliculas[id].año}</p>
            </div>
            <br>
            <div class="con">
                <h5>Director: </h5>
                <p>${peliculas[id].director}</p>
            </div>
            <br>
            <div class="con">
                <h5>Género: </h5>
                <p>${peliculas[id].genero}</p>
            </div>
            <br>
            <button type="button" class="btn btn-primary" onclick="index()">Volver a inicio</button>
        </div>    
        `;
    
     lista.appendChild(agregar);   
}

function agregarUser(){
    var varNombre = document.getElementById("inputNombre").value;
    var varApellido = document.getElementById("inputApellido").value;
    var varTelefono = document.getElementById("inputTelefono").value;
    var varDireccion = document.getElementById("inputDireccion").value;
    var varObservaciones = document.getElementById("inputObservaciones").value;

    let user = {
        nombre: varNombre,
        apellido: varApellido,
        telefono: varTelefono,
        direccion: varDireccion,
        observaciones: varObservaciones
    }

    localStorage.setItem("nombre", JSON.stringify(user));

    alert("Usuario guardado correctamente");
}