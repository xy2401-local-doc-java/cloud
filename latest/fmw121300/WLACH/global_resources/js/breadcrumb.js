//If you can see this you are using a browser that does not support
//JavaScript or Jscript. Please download Netscape Navigator Version 4.0
//(or newer) from http:\home.netscape.com or http:\www.microsoft.com
// Microsoft Internet Explorer Version 4.0 (or newer) from http://home.microsoft.com
//
//changed tcp/v100 and kodo 4.1 - 6/18/08

function Breadcrumb(){
var strHref = window.location.href;
//alert("strHref=" + strHref);

if (strHref.indexOf("bea/integration/docs102/") != -1) {

	document.write('<a href="http://www.oracle.com/technetwork/index.html">OTN Home</a>');

}

else {

	document.write('<a href="http://www.oracle.com/technetwork/index.html">OTN Home</a>&nbsp;&gt;&nbsp;');

if (strHref.indexOf("/copyright.html") != -1) {

	document.write('Copyright');
}

}

}