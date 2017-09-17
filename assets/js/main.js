// aqui el codigo js
// 'use strict'
const app  = {//array de 'img', 'pregunta','alternativas','correcta',y 'asertada'
    item : [{
        imgsrc : 'assets/img/plane.svg',
        pregunta : "¿What is the oldest airline in the word?",
        alternativas : ['Avianca','KLM','Qantas'],//array de alternativas
        rptCorrecta : 'KLM',
        rptElegida : undefined
    },
    {
        imgsrc : 'assets/img/barco.svg',
        pregunta : "What is the largest port in the word?",
        alternativas : ['Port of shangai','Port of singa pore','port of rotterdan'],//array de alternativas
        rptCorrecta : 'Port of shangai',
        rptElegida : undefined
    },
    {
        imgsrc : 'assets/img/bicicle.svg',
        pregunta : "What is the longest distance cycling back wards?",
        alternativas : ['89.30 km','675.10 km','357.60 km'],//array de alternativas
        rptCorrecta : '357.60 km',
        rptElegida : undefined
    }],

    incremento : 0, //incremento el '% indefinidas'
    iniciaPreguntas : 0,//preguntas en posicion 'indefinidas'

    init : function () {
          app.dibujoHtml();//dibujara el HTML desde js.
          app.estructura();//para la configuraciom.
      },

      estructura : function () {
          $('.col-lg-4').on('click',app.siguiente);//al hacer click en las alternativas pasara a la siguiente.
      },
}
	$(document).ready(app.init);
