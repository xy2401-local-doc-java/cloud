//If you can see this you are using a browser that does not support
//JavaScript or Jscript. Please download Netscape Navigator Version 4.0
//(or newer) from http:\home.netscape.com or http:\www.microsoft.com
// Microsoft Internet Explorer Version 4.0 (or newer) from http://home.microsoft.com
//
//This script opens a new, small, floating window and put TOCname.htm and IXname.htm files in it

function SetWindowName() {
        window.name="qaview";
}
        SetWindowName();

//Position windows on right side
leftPos = 0
if (screen) {
leftPos = screen.width-620;
}

function OpenWindowEdocsHelpToc1(){
                var tocwin = window.open('http://download.oracle.com/docs/cd/E23943_01/apirefs.1111/e13952/core/indexpopup.html', 'newWin1', 'resizable=yes,scrollbars=yes,status=0,width=450,height=600,left='+leftPos+',top=20');
}

function OpenWindowEdocsPageHelp(){
                var tocwin = window.open('http://download.oracle.com/docs/cd/E23943_01/apirefs.1111/e13952/core/indexpopup.html', 'newWin1', 'resizable=yes,scrollbars=yes,status=0,width=450,height=600,left='+leftPos+',top=20');
}

function OpenWindowEdocsTaskHelp(){
                var tocwin = window.open('http://download.oracle.com/docs/cd/E23943_01/apirefs.1111/e13952/core/indexpopup.html', 'newWin1', 'resizable=yes,scrollbars=yes,status=0,width=450,height=600,left='+leftPos+',top=20');
}

function OpenWindowEdocsHelpTOC(){
                var tocwin = window.open('http://download.oracle.com/docs/cd/E23943_01/apirefs.1111/e13952/index.html', 'newWin1', 'resizable=yes,scrollbars=yes,status=0,width=450,height=600,left='+leftPos+',top=20');
}

function OpenWindowToc(){
                var tocwin = window.open('glossary/index.html', 'newWin1', 'resizable=yes,scrollbars=yes,status=0,width=450,height=600,left='+leftPos+',top=20');
}

function OpenWindowIndex(){
                var indexwin = window.open('', 'newWin2', 'resizable=yes,scrollbars=yes,status=0,width=450,height=600,left='+leftPos+',top=20');
}

function OpenWindowGloss(){
                var glosswin = window.open('./glossary/index.html','newWin3', 'resizable=yes,scrollbars=yes,status=0,width=450,height=600,left='+leftPos+',top=20');
}


