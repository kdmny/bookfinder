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
/*    modal_opened = false;*/
		xhr.setRequestHeader("Accept", "text/javascript");
/*    jQuery("#wrapper").addClass('busy');*/
/*    if(prompt && prompt.isOpened()) 
      show_loading('process your request.');
*/		
	},
	'complete': function(xhr) {
/*    if(progress && progress.isOpened()) progress.close();
    if(!modal_opened && prompt) prompt.close();
    if(modal_opened) {jQuery("#prompt").show();jQuery("#expose").show();}
*/	}
})

jQuery.fn.submitWithAjax = function(prefilter) {
  this.submit(function() {
		if(prefilter) prefilter();
    $.post(this.action, $(this).serialize(), null, "script");
    return false;
  });
  return this;
};




