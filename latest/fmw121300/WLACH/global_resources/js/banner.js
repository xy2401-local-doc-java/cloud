//If you can see this you are using a browser that does not support
//JavaScript or Jscript. Please download Netscape Navigator Version 4.0
//(or newer) from http:\home.netscape.com or http:\www.microsoft.com
// Microsoft Internet Explorer Version 4.0 (or newer) from http://home.microsoft.com
//
//This script is the edocs banner.
//Version 2.0

var strHref = window.location.href;

function Banner(){
var metaArrayTest = document.getElementsByName('LASTUPDATED');
document.write('<div id="header">');
document.write('	<div id="headergraphic"><a href="http://www.oracle.com/"><img src="https://docs.oracle.com/middleware/1213/wls/WLACH/global_resources/images/oracle.gif" alt="Oracle Logo" border="0" width="150" height="15" style="margin:10px 0px 0px 20px;" /></a>');
document.write('	<p><b>Oracle Fusion Middleware Oracle WebLogic Server Administration Console Online Help<br>12<i>c</i> (12.1.3)</b><br>Part Number E41845-03</p></div>');

document.write('	<div class="blueline"><img src="https://docs.oracle.com/middleware/1213/wls/WLACH/global_resources/images/_.gif" width="1" height="1" alt="" /></div>');
document.write('	<div id="graybar">');
document.write('		<div class="topnav">'); 

if ((strHref.indexOf("docs-stage") != -1) && (metaArrayTest[0] != null)) {

	document.write('<strong>Oracle Internal Doc Info:</strong> ');
	
	var metaArray = document.getElementsByName('LASTUPDATED');
	for (var i=0; i<metaArray.length; i++) {
	document.write('&nbsp;&nbsp; Last update: ' + metaArray[i].content + '&nbsp;&nbsp;');
	}

	var metaArray = document.getElementsByName('LOC_US_CHANGE');
	for (var i=0; i<metaArray.length; i++) {
	document.write('P4 change: ' + metaArray[i].content + '&nbsp;&nbsp;');
	}

	var metaArray = document.getElementsByName('LOC_US_SRCFILE');
	for (var i=0; i<metaArray.length; i++) {
	document.write('P4 File: ' + metaArray[i].content );
	}

	var metaArray = document.getElementsByName('LOC_US_REV');
	for (var i=0; i<metaArray.length; i++) {
	document.write('#' + metaArray[i].content + '<br/>');
	}

} else
	{
	document.write('		<a href="https://www.oracle.com/us/technology/index.html">OTN Home</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
	document.write('		<a href="https://community.oracle.com/welcome">Community</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
	
 	}

document.write('		</div>');
document.write('	</div>');
document.write('	<div class="twodots"><img src="https://docs.oracle.com/middleware/1213/wls/WLACH/global_resources/images/_.gif" width="1" height="1" alt="" /></div>');
document.write('</div>');
}