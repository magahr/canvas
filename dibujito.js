var texto        = document.getElementById('texto_lineas');
var texto_caras  = document.getElementById('texto_caras');
var boton        = document.getElementById('botoncito');
boton.addEventListener("click",dibujoPorClick );
var d            = document.getElementById('dibujito');
var lienzo       = d.getContext("2d");
var ancho_lienzo = d.width;


function dibujar_linea( color, xinicial, yinicial, xfinal, yfinal)
{

  lienzo.beginPath();
  lienzo.strokeStyle = color ;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();

}

function dibujoPorClick()
{
   var lineas_canvas = parseInt(texto.value);
   var espacio_entre = ancho_lienzo / lineas_canvas;
   alert("Canvas con " + lineas_canvas + " lineas, con ancho  " + ancho_lienzo + " espacio " + espacio_entre + " valor de las caras :" + texto_caras.value);

   var nIncre = 0;
   var nDecre = ancho_lienzo;
   while (nIncre <= ancho_lienzo)
   {
        if ( parseInt(texto_caras.value) >= 1 && parseInt(texto_caras.value) <= 4)
        {
          dibujar_linea("#AAF",        0, nIncre, nIncre, ancho_lienzo);
        }
        if (parseInt(texto_caras.value) >= 2  && parseInt(texto_caras.value) <= 4)
        {
            dibujar_linea("#FF0000",   ancho_lienzo, nIncre, nDecre, ancho_lienzo);
        }
        if (parseInt(texto_caras.value) >= 3  && parseInt(texto_caras.value) <= 4)
        {
            dibujar_linea("#FA8072",   ancho_lienzo, nDecre, nDecre, 0);
        }
        if (parseInt(texto_caras.value) == 4)
        {
            dibujar_linea("#008000",     0, nDecre, nIncre, 0);
        }
          nIncre = nIncre + ( espacio_entre );
          nDecre = nDecre - ( espacio_entre );

   }
}
