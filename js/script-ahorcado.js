
// var iniciarJuego = document.querySelector(".boton-ahorcado");
// iniciarJuego.addEventListener("click", () => {
//     location.href = "ahorcado.html";
//     // inicializarCanvas();
// });


// Rcargamos la pagina para un nuevo juego
var nuevoJuego = document.querySelector(".boton-nuevoJuego");
nuevoJuego.addEventListener("click", () => {
    // inicializarCanvas();
    window.location.reload();
});

var terminar = document.querySelector(".boton-terminar");
terminar.addEventListener("click", () => {
    location.href = "index.html";
});


var canvas = document.querySelector(".canvas");
var W,H,r;              

function inicializarCanvas(){ 
  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext("2d");
        if (ctx) {
            // calcula la anchura y la altura del canvas
            var s = getComputedStyle(canvas);
            var w = s.width;
            var h = s.height;
            // extrae el valor numerico
            W = canvas.width = w.split("px")[0];
            H = canvas.height = h.split("px")[0];
            // determinamos el radio del circulo.
            r = Math.floor(H/8);
            
            iniciarOrca(ctx);
        }
    }
}

////////////////////////////////////////////////////
// Funciones para dibujar al Ahorcado
function iniciarOrca(ctx) {
    ctx.strokeStyle = "#2F1D04";
    ctx.fillStyle = "#6ab155";
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(10, H-10);
    ctx.lineTo(W-10, H-10);
    ctx.moveTo(W/6, H-10);
    ctx.lineTo(W/6, 10);
    ctx.lineTo(3*W/4, 10);
    ctx.stroke();
}

function dibujarLinea1(){
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#343634";
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(5*W/8, 10);
    ctx.lineTo(5*W/8, r+10);
    ctx.stroke();
}

function dibujarCirculo(){
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#343634";
    ctx.fillStyle = "#8D8D8D";
    ctx.beginPath();
    ctx.arc(5*W/8,r+10,r/2,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
}

function dibujarLinea2(){
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#343634";
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(5*W/8, 1.5*r+10);
    ctx.lineTo(5*W/8, 4.25*r+10);
    ctx.stroke();
}

function dibujarLinea3(){
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#343634";
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(5*W/8, 2*r+10);
    ctx.lineTo(4*W/8, 3.5*r+10);
    ctx.stroke();
}

function dibujarLinea4(){
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#343634";
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(5*W/8, 2*r+10);
    ctx.lineTo(3*W/4, 3.5*r+10);
    ctx.stroke();
}

function dibujarLinea5(){
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#343634";
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(5*W/8, 4.25*r+10);
    ctx.lineTo(4*W/8, 6.5*r+10);
    ctx.stroke();
}

function dibujarLinea6(){
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#343634";
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(5*W/8, 4.25*r+10);
    ctx.lineTo(3*W/4, 6.5*r+10);
    ctx.stroke();
}

/////////////////////////////////////////////////////

// Llammos a la funcion que difujara la orca.
inicializarCanvas();


