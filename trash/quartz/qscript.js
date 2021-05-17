var menu = document.getElementsByClassName("qmenu")[0];
var logo = document.getElementsByClassName("qtextlogo")[0];
var ul = document.getElementById("ul");
var mbutton = document.getElementsByClassName("qmenubutton")[0];

var ul_width = ul.clientWidth;

var compact_menu = false;
var menu_shown = false;

function MenuToCompact() {
    if(compact_menu) return;
    compact_menu = true;
    ul.classList.add("compacted");
    mbutton.style.visibility = "visible";
}

function MenuFromCompact() {
    if(!compact_menu) return;
    compact_menu = false;
    menu_shown = false;
    menu.style.borderBottomRightRadius = "20px";
    ul.style.animation = "none";
    ul.classList.remove("compacted");
    mbutton.style.visibility = "hidden";
}

function Update() {
    var width = document.body.clientWidth;
    if (width * 0.04 + logo.clientWidth + 10 > width/2 - ul_width/2)
        MenuToCompact();
    else
        MenuFromCompact();
}

mbutton.addEventListener("click",function(ev) {
    if(menu_shown) {
        ul.style.animation = "sidebar-close 0.4s both";
        menu.style.borderBottomRightRadius = "20px";
        menu_shown = false;
    }
    else {
        ul.style.animation = "sidebar-open 0.4s both";
        menu.style.borderBottomRightRadius = "0";
        menu_shown = true;
    }
});

Update();
window.onresize = Update;