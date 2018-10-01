	
$(document).ready(function() {


var deviceAgent = navigator.userAgent.toLowerCase();
    	var agentID = deviceAgent.match(/(iphone|ipod)/);
    	if (agentID) {
			
		//iphone code	
		//alert("yes, iphone toc-fun");
		
		$('#slick-toggle').toggle(function(){
		
		
		/////// Mobile DOWN
		jQuery('#tocflipnav').css({ "visibility": 'visible' });
		jQuery('#tocflipnav').css({ "height": 'auto' });
		jQuery('#tocflipnav').css({ "width": '100%' });
		$('#toc').slideDown("fast");
		
		
		 },function(){
	
	///////  Mobile UP
	
			
		$('#toc').slideUp("fast");
	jQuery('#tocflipnav').css({ "visibility": 'hidden' });
			  }); // end toggle function
		
		
		}else{// End Iphone else
			
	// create var for max height of toc
	var pageHeight = jQuery(window).height();
	var navHeight = pageHeight - 280;
	
	jQuery('#tocflipnav').css({ "overflow":'hidden' });

			
 $('#slick-toggle').toggle(function(){
		
		
		///////  DOWN
		jQuery('#tocflipnav').css({ "visibility": 'visible' });
		//$('#toc').show();
  		$('#toc').slideDown("fast");
 		$('#tocarrow').attr("src", "../../dcommon/img-common/book-contents-down.png" );
		//$('#showhide').replaceWith('<span id="showhide"> Hide TOC </span>');// changes text for show toc vs. hide toc
		jQuery('#toc').css({ "visibility": 'visible' });
		jQuery('#tocflipnav').css({ "height": 'auto' });
		jQuery('#tocflipnav').css({ "max-width":'800px' });
		jQuery('#tocflipnav').css({ "width": 'auto' });
		jQuery('#tocflipnav').css({ "overflow":'auto' });
		jQuery('#tocflipnav').css({ "overflow-x":'hidden' });
		jQuery('#tocflipnav').css({ "max-height": navHeight + 'px' });
		
		
 },function(){
 	 	
		///////  UP
		
		//jquery set TOC menu height
		var pageHeight = jQuery(window).height();
		var navHeight = pageHeight - 280;
		
		//jQuery('#tocflipnav').css({ 'right': '0px' });
		jQuery('#tocflipnav').css({ 'visibility': 'visible' });	
		
		$('#toc').slideUp("fast");
		//jQuery('#toggletoc').css({ "background-color": '#f7f7f7' });
 		$('#tocarrow').attr("src","../../dcommon/img-common/book-contents.png" );
		//$('#showhide').replaceWith('<span id="showhide"> Show TOC</span>');// changes text for show toc vs. hide toc


 }); // end toggle function
 
		}; //end mobile if statement
 
 }); // end ready function
	
		
		
		
$(document).ready(function() {
		$(function() {
			$("#tree").treeview({
				collapsed: true,
				animated: "fast",
				control:"#sidetreecontrol",
				prerendered: true,
				persist: "location"
				
			});
		});
	});


// resizes the toc window when browser is resized
$(window).resize(function() {
			
		//var agentID = deviceAgent.match(/(iphone|ipod)/);
    	//if (agentID) {
		var deviceAgent = navigator.userAgent.toLowerCase();

        if(deviceAgent.match(/(iphone|ipod)/)){

			
			//iphone code
		}else{
			
		jQuery('#tocflipnav').css({ "height": 'auto' });
		jQuery('#tocflipnav').css({ "max-width":'800px' });
		jQuery('#tocflipnav').css({ "width": 'auto' });
		jQuery('#tocflipnav').css({ "overflow":'auto' });
		jQuery('#tocflipnav').css({ "overflow-x":'hidden' });	
		
		var wpageHeight = jQuery(window).height();
		var wnavHeight = wpageHeight - 280;
		jQuery('#tocflipnav').css({ "max-height": wnavHeight + 'px' });

		}//end iphone if
		
}); // end function
