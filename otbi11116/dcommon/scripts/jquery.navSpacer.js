
jQuery(document).ready(function($){
								
	//check for iphone, removed spacers else adjust heights

 	var deviceAgent = navigator.userAgent.toLowerCase();
    var agentID = deviceAgent.match(/(iphone|ipod)/);
    	
		if (agentID) {
		// mobile code here
 		$("#navSpacer").remove();
    	$("#navSpacerfixed").remove();
		$("#ContentOverlay").remove();
    	
		}else{
			
		var $headerheight = ($("#headerbox").height());//+'px'
		var $headercombo = ($headerheight);//($headerheight + 20);
	
		$("#navSpacer").css({'height':($headercombo+'px')}); // white box, top of article navSpacer
		$("#navSpacerfixed").css({'height':($headercombo+'px')}); // white box, fixed position
		$("#ContentOverlay").css({'height':($headercombo+'px')});	
		}

});	
