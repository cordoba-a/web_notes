

var texto = document.getElementById("texto_peso");
var slcchange = document.getElementById("planeta");

var boton = document.getElementById("boton_iniciar");
boton.addEventListener("click", pesoplaneta);

function pesoplaneta()
{
    var x = parseInt(texto.value);
    var y = parseInt(slcchange.value);
    var g_tierra = 9.8;

    var campo = document.getElementById("planeta");
    var nombre = campo.options[campo.selectedIndex].text;

    peso_final = parseFloat((x * y / g_tierra).toFixed(2));
    alert("Tú peso en  " + nombre + " es " + peso_final);
}
