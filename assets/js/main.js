// aqui el codigo js
'use strict'
const app  = {//array de 'img', 'pregunta','alternativas','correcta',y 'asertada'
    item : [{
        titulo : '0 of 5 answered',
        icono : 'icon icon-list glyphicon glyphicon-info-sign',
        imgsrc : 'assets/img/plane.svg',
        pregunta : "¿What is the oldest airline in the word?",
        alternativas : ['Avianca','KLM','Qantas'],//array de alternativas
        rptCorrecta : 'KLM',
        rptElegida : undefined
    },
    {
        titulo : '0 of 5 answered',
        icono : 'icon icon-list glyphicon glyphicon-info-sign',
        imgsrc : 'assets/img/barco.svg',
        pregunta : "What is the largest port in the word?",
        alternativas : ['Port of shangai','Port of singa pore','port of rotterdan'],//array de alternativas
        rptCorrecta : 'Port of shangai',
        rptElegida : undefined
    },
    {
        titulo : '0 of 5 answered',
        // icono : 'icon icon-list glyphicon glyphicon-info-sign',
        imgsrc : 'assets/img/bicicle.svg',
        pregunta : "What is the longest distance cycling back wards?",
        alternativas : ['89.30 km','675.10 km','357.60 km'],//array de alternativas
        rptCorrecta : '357.60 km',
        rptElegida : undefined
    },
    {
        titulo : '0 of 5 answered',
        // icono : 'icon icon-list glyphicon glyphicon-info-sign',
        // imgsrc : 'assets/img/carro.svg',
        pregunta : "What is the longest distance cycling back wards?",
        alternativas : ['89.30 km','675.10 km','357.60 km'],//array de alternativas
        rptCorrecta : '357.60 km',
        rptElegida : undefined
    },
    {
        titulo : '0 of 5 answered',
        // icono : 'icon icon-list glyphicon glyphicon-info-sign',
        // imgsrc : 'assets/img/auto.svg',
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
          app.resultados();//para los resultados.
      },

    estructura : function () {
        $('.col-lg-4').on('click',app.siguiente);//al hacer click en las alternativas pasara a la siguiente.
    },

    // resultados : function () {
    //     $('.col-lg-4').on('click',app.siguiente)
    //       app.incremento += app.item.rptCorrecta;
    //       if ($('this.text()') == app.incremento) {
    //         app.mostrarHtml();
    //       }else{
    //           app.item.rptElegida = " ";
    //       };//al hacer click en las alternativas pasara a la siguiente.
    // },
    //
    // mostrarHtml : function () {
    //     $('#answere').append(
    //       `<div class="container buttomc ">\
    //         <div class="row texto ">\
    //               <h1>Here are your answers</h1>\
    //             <div id="result" class="col-xs-12 preRep">
    //               ${app.item.app.incremento}
    //             </div>\
    //               <button type="button" class="btn btn-primary submit">Submit</button>
    //         </div>\
    //       </div>`);
    // },

    siguiente : function () {
        app.iniciaPreguntas++;//se incrementara las preguntas segun la posicion.
        if (app.iniciaPreguntas >= app.item.length) {//condicion
          app.incremento = 0;//incrementa el porcentahje del progres.
          app.iniciaPreguntas = 0;//
        } else {//caso contrario realiza lo siguiente.
          app.limpiarAlternetivas();//realiza esta funcion donde limpiara el primer custionario .
          app.init();// despues de limpiar el 1° questionario nuevamente inicializa en la 2 posicion.
        }
    },

    dibujoHtml : function () {
      $('#airLine').append(//al 'id', del contenedor agregamos el icono y la imagen.
        `<div class="container">\
            <div id="iconorosa" class="row">\
                  <span class='${app.item[app.iniciaPreguntas].icono}' aria-hidden="true"></span>\
                <div id="imags" class="col-md-12 ">\
                  <center><img src='${app.item[app.iniciaPreguntas].imgsrc}' class="fade-out image1" ></center>\
                </div>\
            </div>\
        </div>`)

      $('#plantilla').append(//al 'id' plantilla  agregamos el 'incremento', 'la pregunta', y las 'alternativas'
        `<div class="answer">${app.item[app.iniciaPreguntas].titulo}</div>\
        <div class="row texto">\
            <div class="progress">\
                <div class="progress-bar bg-success" role="progressbar" style="width: ${app.incremento}%; height: 5px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>\
            </div>\
            <div class="col-md-12">\
                <h2>${app.item[app.iniciaPreguntas].pregunta}</h2>\
            </div>\
            <div class="col-lg-4">\
              <button class="btn btn-huge "><span class="letter">A</span>${app.item[app.iniciaPreguntas].alternativas[0]}</button>\
            </div>\
            <div class="col-lg-4">\
              <button class="btn btn-huge "><span class="letter">B</span>${app.item[app.iniciaPreguntas].alternativas[1]}</button>\
            </div>\
            <div class="col-lg-4">\
              <button class="btn btn-huge "><span class="letter">C</span>${app.item[app.iniciaPreguntas].alternativas[2]}</button>\
            </div>\
        </div>\
        <div class="row texto">\
            <div class="col-md-12">\
              <i class="fa fa-twitter-square fbook" style="font-size:48px;color:#00bbff"></i>\
              <i class="fa fa-google-plus-circle" style="font-size:48px;color:red"></i>\
              <i class="fa fa-facebook-square fbook" style="font-size:48px;color:blue;border-radius:50%"></i>\
            </div>\
        </div>\
      </div>`
        );
        app.incremento += 25;// incrementa progresivamente.
    },

    limpiarAlternetivas: function () {
      $('#iconorosa').empty();//elimina el icono.
      $('#imags').empty();//elimina el contenido del 'div ' imagen.
      $('#plantilla').empty();//elimina el contenido del cuestionario.
    }
}
	$(document).ready(app.init);
