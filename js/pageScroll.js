if (window.innerHeight){
    winHeight = window.innerHeight;
}
else if ((document.body) && (document.body.clientHeight)){
    winHeight = document.body.clientHeight;
}

if (document.documentElement && document.documentElement.clientHeight){
    winHeight = document.documentElement.clientHeight;
}

var scrollingPage = document.getElementById("scrolling");
var header = document.getElementById("header");
var footer = document.getElementById("footer");

var headerHeight = header.clientHeight;
var footerHeight = footer.clientHeight;

window.onload = function(){
    scrollingPage.style.height = (winHeight - headerHeight - footerHeight) + "px";
}