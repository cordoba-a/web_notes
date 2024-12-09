var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

console.log(teclas);
document.addEventListener("keydown", moverlobo);
var vy = document.getElementById("villayayo");
var papel = vy.getContext("2d");

var lobox = aleatorio(0, 420);
var loboy = aleatorio(0, 420);

var fondo = {
    url: "tile.png",
    cargaOK: false
};

var vaca = {
    url: "vaca.png",
    cargaOK: false
};

var cerdo = {
    url: "cerdo.png",
    cargaOK: false
};

var pollo = {
    url: "pollo.png",
    cargaOK: false
};

var lobo = {
    url: "lobo.png",
    cargaOK: false
};

fondo.objeto = new Image();
fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener("load", cargarfondo);

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarvaca);

cerdo.objeto = new Image();
cerdo.objeto.src = cerdo.url;
cerdo.objeto.addEventListener("load", cargarcerdo);

pollo.objeto = new Image();
pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener("load", cargarpollo);

lobo.objeto = new Image();
lobo.objeto.src = lobo.url;
lobo.objeto.addEventListener("load", cargarlobo);

function cargarfondo ()
{
fondo.cargaOK = true;
dibujar();
}

function cargarvaca ()
{
vaca.cargaOK = true;
dibujar();
}

function cargarcerdo ()
{cerdo.cargaOK = true;
dibujar();
}

function cargarpollo ()
{pollo.cargaOK = true;
dibujar();
}

function cargarlobo ()
{lobo.cargaOK = true;
dibujar();
}

var cantidad = aleatorio(2, 6);
var cantidadlobo = 1;

function dibujar()
{
    if(fondo.cargaOK)
    {
        papel.drawImage(fondo.objeto, 0 ,0 );
    }
    if(vaca.cargaOK)
    {
        console.log(cantidad);
        for(var v=0; v < cantidad; v++ )
        {
            var x = aleatorio (0, 420); 
            var y = aleatorio (0, 420); 
            papel.drawImage(vaca.objeto, x ,y );
        }   
    }
    if(cerdo.cargaOK)
    {
        console.log(cantidad);
        for(var v=0; v < cantidad; v++ )
        {
            var x = aleatorio (0, 420);
            var y = aleatorio (0, 420);
            papel.drawImage(cerdo.objeto, x ,y );
        }
    }
    if(pollo.cargaOK)
    {
        console.log(cantidad);
        for(var v=0; v < cantidad; v++ )
        {
            var x = aleatorio (0, 420);
            var y = aleatorio (0, 420);
            papel.drawImage(pollo.objeto, x, y );
        }
    }
    if(lobo.cargaOK)
    {
        papel.drawImage(lobo.objeto, lobox, loboy );
    }
}

function moverlobo(evento)
    {
        var movimiento = 5;
        switch(evento.keyCode)
        {
            case teclas.UP:
                console.log("arriba");
                loboy = loboy - movimiento;
                dibujar();
                break;
            case teclas.DOWN:
                console.log("abajo");
                loboy = loboy + movimiento;
                dibujar();
                break; 
            case teclas.LEFT:
                console.log("izquierda");
                lobox = lobox - movimiento;
                dibujar();
                break;
            case teclas.RIGHT:
                console.log("derecha");
                lobox = lobox + movimiento;
                dibujar();
                break;
            default:
                console.log("otra tecla");
                break;
        }
    }

function aleatorio(min, maxi)
{
 var resultado;
 resultado = Math.floor(Math.random()*(maxi - min + 1)) + min;
 return resultado; 
}

