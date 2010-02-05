var prompt = null;
var progress = null;
var modal_opened = false;
prompt_overlay = 
{ 
    expose: 
		{
		    maskId: "expose",
        // you might also consider a "transparent" color for the mask 
        color: '#d0d0d0', 
        // load mask a little faster 
        loadSpeed: 200, 
        // highly transparent 
        opacity: 0.9
    }, 
    // disable this for modal dialog-type of overlays 
    closeOnClick: false, 
/*    lazy: true,*/
    
    // we want to use the programming API 
    api: true
}
progress_overlay = 
{ 
    expose: 
		{
		    maskId: "progressExpose",
        // you might also consider a "transparent" color for the mask 
        color: '#d0d0d0', 
        // load mask a little faster 
        loadSpeed: 200, 
        // highly transparent 
        opacity: 0.9
    }, 
    // disable this for modal dialog-type of overlays 
    closeOnClick: false, 
/*    lazy: true,*/
    
    // we want to use the programming API 
    api: true
}
function show_loading(msg){	
  progress = $('#progress').overlay(progress_overlay);
  jQuery("#loading p").html('please wait while we ' + msg)
  jQuery("#prompt").hide();
  progress.load();
}

jQuery.ajaxSetup({ 
  'beforeSend': function(xhr) {
		xhr.setRequestHeader("Accept", "text/javascript");		
	},
	'complete': function(xhr) {
 }
})

jQuery.fn.submitWithAjax = function(prefilter) {
  this.submit(function() {
		if(prefilter) prefilter();
    $.post(this.action, $(this).serialize(), null, "script");
    return false;
  });
  return this;
};

function generate_view(xml){
  best_book = $(xml).find("best_book");
  view = new Object();
  view.title = best_book.find("title").get(0).innerHTML;
  view.author = best_book.find("author").find("name").get(0).innerHTML;
  view.img_url = best_book.find("my_review").find("book").find("image_url").get(0).innerHTML;
  view.gr_url = best_book.find("my_review").find("book").find("link").get(0).innerHTML;  
  return view;
}




