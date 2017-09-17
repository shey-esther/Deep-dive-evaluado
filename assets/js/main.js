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

}
	$(document).ready(app.init);


// validacion chect box
// function checkt(){
// 	if(document.getElementById("check").checked){
// 		document.getElementById("next").disabled=false;
// 	}else{
// 		document.getElementById("next").disabled=true;
// 	}
// }
