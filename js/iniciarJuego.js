var palabrasOcultas = ["LIMON","MANDARINA","NARANJA","POMELO","MELON","SANDIA","AGUACATE","CHIRIMOYA","KIWI","MANGO","PAPAYA","PIÑA","PLATANO","CEREZA","CIRUELA","MANZANA","NISPERO","PERA","ALMENDRA","AVELLANA","CACAHUATE","MANDARINA","MARACUYA","GUAYABA","FRAMBUESA","MEMBRILLO","ARANDANO"];

// Escojemos una palabra de forma aleatorea de la lista de palabrasOcultas.
function escojerPalabraOcultar() {
    var palabra = palabrasOcultas[Math.floor(Math.random()*palabrasOcultas.length)];
        // console.log(palabra);
        return palabra;
}

var palabraOculta = escojerPalabraOcultar();


//////////////////////////////////////////////////////////////
// Creamos los span para las letras a adivinar (correctamente).

var letraCorrecta = document.querySelector(".letras-correctas");
for (var i = 0; i < palabraOculta.length; i++) {
    var spanLetraCorrecta = document.createElement("span");
    spanLetraCorrecta.setAttribute("class", "item-letra");
    letraCorrecta.appendChild(spanLetraCorrecta);
}

// Creamos los span para las letras a adivinar (Incorrectamente).

var letraIncorrecta = document.querySelector(".letras-incorrectas");
for (var i = 0; i < 7; i++) {
    var spanLetraIncorrecta = document.createElement("span");
    spanLetraIncorrecta.setAttribute("class", "item-error");
    letraIncorrecta.appendChild(spanLetraIncorrecta);
}


//////////////////////////////////////////////////////////////
// Función Mensaje

function mensaje(texto, palabra, color){
    let mensajeOculto = document.querySelector(".contenedor-mensaje");
    let parrafo_1 = document.querySelector(".parrafo-1");
    let parrafo_2 = document.querySelector(".parrafo-2");
    let boton_Ocultar = document.querySelector(".boton-ocultar");
    mensajeOculto.style.display = "flex";
    mensajeOculto.style.position = "absolute";
    mensajeOculto.style.color = color;
    parrafo_1.textContent = texto;
    parrafo_2.textContent = "La palabra Oculta era: " + palabra;
    boton_Ocultar.focus();

}


//////////////////////////////////////////////////////////////
// Llamamos a las funciones para difujar al ahorcado
function dibujarAhorcado (paso) {
    switch (paso) {
        case 1: dibujarLinea1();
                break;
        case 2: dibujarCirculo();
                break;
        case 3: dibujarLinea2();
                break;
        case 4: dibujarLinea3();
                break;
        case 5: dibujarLinea4();
                break;
        case 6: dibujarLinea5();
                break;
        case 7: dibujarLinea6();
                break;
    }
}


//////////////////////////////////////////////////////////////
// Capturamos las letras ingresadas por el jugador

var letrasCorrectas = document.querySelectorAll(".item-letra");
var letrasIncorrectas = document.querySelectorAll(".item-error");

console.log(letrasCorrectas);
console.log(letrasIncorrectas);

var abcdario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
var aciertos = "";
var desaciertos = "";
var contAciertos = 0;
var contDesaciertos = 0;

const controller = new AbortController(); // Agrega un detector de eventos abortable a la tabla
document.addEventListener("keydown", function (e) {

    let tecla = e.key.toUpperCase();

    // Comprobamos que sea una letra del abecedario
    if (abcdario.indexOf(tecla) != -1) {
        // Comprobamos si la letra ingresada pertenece a la palabra oculta.
        if (palabraOculta.indexOf(tecla) != -1 && !aciertos.includes(tecla)) {
            // Agregamos la letra en la posicion que le corresponde.
            for (var i = 0; i < palabraOculta.length; i++) {
                if (tecla == palabraOculta[i]) {
                    letrasCorrectas[i].textContent = tecla;
                    contAciertos++;
                } 
            }
            aciertos += tecla;
        }
        else {
            if (!desaciertos.includes(tecla) && !aciertos.includes(tecla)) {
                letrasIncorrectas[contDesaciertos].textContent = tecla;
                desaciertos += tecla;
                contDesaciertos++;
                dibujarAhorcado(contDesaciertos);
            }
        }
    }

    if (contAciertos >= palabraOculta.length) {
        controller.abort();
        setTimeout(mensaje, 500, "GANASTE, felicidades...", palabraOculta, "green");
    }
    else if (contDesaciertos == 7) {
        controller.abort();
        setTimeout(mensaje, 500,"FIN del juego...", palabraOculta, "red");
    }

}, { signal: controller.signal });


//////////////////////////////////////////////////////////////
// Ocultamos el mensaje
var ocultarMensaje = document.querySelector(".contenedor-mensaje");
var botonOcultar = document.querySelector(".boton-ocultar");
botonOcultar.addEventListener("click", () => {
    ocultarMensaje.style.display = "none";
});

