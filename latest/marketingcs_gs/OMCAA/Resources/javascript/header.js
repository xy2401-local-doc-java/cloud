
//feedback link
function sendmail()
{
	window.location.href = "mailto:omcdocumentation_ca@oracle.com?subject=Documentation feedback Re: " + document.title + "&body=%0A%0A-----------------------%0APlease type your feedback above this line and do not edit the information below.%0AThank you for providing feedback (errors, omissions, and so on) regarding Oracle Marketing Cloud documentation to help us enhance this content.%0AFor product support, log in to http://support.oracle.com and create a service request.%0ATopic Title: " + document.title + "%0ATopic URL: " + document.URL;
}
//end feedback link