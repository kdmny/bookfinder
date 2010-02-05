var debug = new Object();

debug.utils = {
    log: function() {
			return;
			if(console)
				console.log(arguments);
    },
    trace: function(what){
        /*if($('#debug').get(0)){
            $('#debug').append('<li>' + what + '</li>');
        }*/
    }
}


