//validacion username 
const app  = {
    item :  {
        name: undefined,
        email: undefined,
    },

	init : function () {
        app.item.name =  $('#name');
        app.item.email = $('#email');
        app.setup ();
    },

    setup: function () {
    	if (app.item != undefined) {
        $('#email').click (app.addComment) ;
        $('#email').click (app.clearComments) ;
        }
    },

    addComment: function () {
    	localStorage.setItem(app.item.name.val(),app.item.coment.val());
    	$('#name').val("");
    	$('#email').val("");
		app.recargar();    	
    },
}
	// $(document).ready(app.init);


// validacion chect box
function checkt(){
	if(document.getElementById("check").checked){
		document.getElementById("next").disabled=false;
	}else{
		document.getElementById("next").disabled=true;
	}
}




