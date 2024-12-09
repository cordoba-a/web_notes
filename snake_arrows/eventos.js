var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

console.log(teclas);

document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 100;
var y = 100;

dibujarlinea("red", x-1, y-1, x+1, y+1, papel);

function dibujarlinea(color, x_inicial, y_inicial, x_final, y_final, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(evento)
{
   var colorcito = "green";
   var movimiento = 5;
   switch(evento.keyCode)
   {
       case teclas.UP:
           console.log("arriba");
           dibujarlinea(colorcito, x, y, x, y - movimiento, papel);
           y = y - movimiento;
           break;
       case teclas.DOWN:
           console.log("abajo");
           dibujarlinea(colorcito, x, y, x, y + movimiento, papel);
           y = y + movimiento;
           break;
       case teclas.LEFT:
           console.log("izquierda");
           dibujarlinea(colorcito, x, y, x - movimiento, y, papel);
           x = x - movimiento;
           break;
       case teclas.RIGHT:
           console.log("derecha");
           dibujarlinea(colorcito, x, y, x + movimiento, y, papel);
           x = x + movimiento;
           break;
       default:
           console.log("otra tecla");
           break; 
   }
}