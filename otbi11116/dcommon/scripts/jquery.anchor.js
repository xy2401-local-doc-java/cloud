

// SET ANCHOR PAGE MARGIN FOR IE VERSIONS
$(document).ready(function() {


	if ($("html").hasClass('ie7')) {
    //alert( "ie7" );
	//var $headerheight = ($("#headerbox").height());//+'px'
	//var $anchorcombo = ($headerheight + 10);
	//$(".anchor").css({'padding-top':($anchorcombo+'px')});
	//$(".anchor").css({'margin-top':('-'+$anchorcombo+'px')});
	var $headerheight = ($("#headerbox").height());//+'px'
	var $anchorcombo = ($headerheight + 5);
	$(".anchor").css({'padding-top':($anchorcombo+'px')});
	$(".anchor").css({'margin-top':('-'+$anchorcombo+'px')});
    //
	}else{
	//	alert('not ie 7');
	}// end if

	if ($("html").hasClass('ie8')) {
    //alert( "ie8" );
	var $headerheight = ($("#headerbox").height());//+'px'
	var $anchorcombo = ($headerheight + 5);
	$(".anchor").css({'top':('-'+$anchorcombo+'px')});
    //
	}else{
	//	alert('not ie 8');
	}// end if


	if ($("html").hasClass('ie9')) {
   // alert( "ie9" );
	//var $headerheight = ($("#headerbox").height());//+'px'
	//var $anchorcombo = ($headerheight + 10);
	//$(".anchor").css({'padding-top':($anchorcombo+'px')});
	//$(".anchor").css({'margin-top':('-'+$anchorcombo+'px')});'
	var $headerheight = ($("#headerbox").height());//+'px'
	var $anchorcombo = ($headerheight + 5);
	$(".anchor").css({'padding-top':($anchorcombo+'px')});
	$(".anchor").css({'margin-top':('-'+$anchorcombo+'px')});
    //
	}else{
	//alert('not ie 9');
	}// end if
	
});	





$(document).ready(function() {
if(jQuery.browser.msie)
{
	//see above
	//alert( $.browser.version );
}
else
{
	var $headerheight = ($("#headerbox").height());//+'px'
	var $anchorcombo = ($headerheight + 5);
	$(".anchor").css({'top':('-'+$anchorcombo+'px')});
	//alert("anchorcombo "+$anchorcombo);
}
});	



$(document).ready(function() {
 	var deviceAgent = navigator.userAgent.toLowerCase();
    var agentID = deviceAgent.match(/(iphone|ipod)/);
    	if (agentID) {
		// mobile code here
 		$(".anchor").css({'top':('0px')});
    	}
		
	});		
		
		