var tab = document.getElementById("menu_tab");
var menu = document.getElementById("left_menu");
var page = document.getElementById("page_right");
var menuExpandStatus = false;

window.onload = function(){
    menuExpandStatus = false;
}

tab.onclick = function(){
    if(!menuExpandStatus){
        menu.style.left = "0";
        page.style.transform = "translateX(4.94rem)";
        menuExpandStatus = true;
    } else{
        menu.style.left = "-4.94rem";
        page.style.transform = "translateX(0)";
        menuExpandStatus = false;
    }
}