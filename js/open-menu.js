var tab = document.getElementById("menu_tab");
var menu = document.getElementById("left_menu");
var page = document.getElementById("page_right");

// console.log(notification);

var menuExpandStatus = false;
var notificationExisted = true;
var tabclicked = false;

window.onload = function(){
    menuExpandStatus = false;
    tabclicked = false;
}

tab.onclick = function(){
    tabclicked = true;
    // console.log(tabclicked);

    if(!menuExpandStatus){
        menu.style.left = "0";
        page.style.transform = "translateX(4.94rem)";
        menuExpandStatus = true;
        
    } else{
        menu.style.left = "-4.94rem";
        page.style.transform = "translateX(0)";
        menuExpandStatus = false;
    }

    if(tabclicked){
        var style = document.createElement("style");
        document.head.appendChild(style); 
        sheet = style.sheet;
        // sheet.addRule(".menu-tab::after","display: none'"); // 兼容IE浏览器
        sheet.insertRule(".menu-tab::after { display: none }", 0); // 支持非IE的现代浏览器
    }
}