//If you can see this you are using a browser that does not support
//JavaScript or Jscript. Please download Netscape Navigator Version 4.0
//(or newer) from http:\home.netscape.com or http:\www.microsoft.com
// Microsoft Internet Explorer Version 4.0 (or newer) from http://home.microsoft.com
//
//This script outputs the correct copyright date and link to copyright page.
//Updated 1/8/07 to output the copyright information if the page is not the copyright.html
//Updated 6/09/08 with Oracle copyright and trademark notice


// FOOTER begin


function Copyright() 
{
var strHref = window.location.href;
//alert("strHref=" + strHref);

document.write('<div id="footer">');

if ((strHref.indexOf("copyright.html") != -1)) {

	
	document.write('Copyright &copy; 2015, Oracle Corporation and/or its affiliates. All rights reserved. Oracle is a registered trademark of Oracle Corporation and/or its affiliates. Other names may be trademarks of their respective owners.');

} else {

	
	document.write('Copyright &copy; 2015, Oracle Corporation and/or its affiliates. All rights reserved. Oracle is a registered trademark of Oracle Corporation and/or its affiliates. Other names may be trademarks of their respective owners.');
    document.write('<p>Oracle Fusion Middleware Oracle WebLogic Server Administration Console Online Help<br>12<i>c</i> (12.1.3)<br>Part Number E41845-03');
}
document.write('</div>');
}

// FOOTER end