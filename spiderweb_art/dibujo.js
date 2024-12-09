var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");


function dibujarlinea(color, x_inicial, y_inicial, x_final, y_final)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick()
{
    var x = parseInt(texto.value);
    alert("No me toques ahí " + x);

    var lineas = x;
    var l = 0;
    var yi, xf, xi, xf2, yf2;
    var colord = "pink";
    var colorr = "blue";
    var espacio = ancho / lineas;
    
    for(l = 0; l < lineas; l++)
    {
        yi = xi = espacio * l;
        xf = espacio * (l + 1);
        xf2 = yf2 = 290 - (espacio * l);
        dibujarlinea(colord, 0, yi, xf, 300);
        dibujarlinea(colord, 300, yi, xf, 0);
        dibujarlinea(colord, 300, yi, xf2, 300);
        dibujarlinea(colord, xi, 0, 0, yf2);
        console.log("Linea " + l);
    }
    
    dibujarlinea(colorr, 1, 1, 1, 300);
    dibujarlinea(colorr, 1, 299, 299, 299);
    dibujarlinea(colorr, 299, 299, 299, 1);
    dibujarlinea(colorr, 300, 1, 1, 1);
}