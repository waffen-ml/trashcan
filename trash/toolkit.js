var Menu = false;

function get(selector) {
    var obj = selector.slice(1);
    var selector_symbol = selector.charAt(0);
    if(selector_symbol == "#") return document.getElementById(obj);
    else if(selector_symbol == ".") return document.getElementsByClassName(obj)[0];
    else if(selector_symbol == "*") return document.getElementsByClassName(obj);
    else if(selector_symbol == "@") return document.getElementsByTagName(obj)[0];
    else return document.getElementById(selector);
}

function strweight(str) {
    for(var a = 0; a < str.length;a+=1) {
        if(str[a] != ' ' && str[a] != '\n' && str[a] != '') return true;
    }
    return false;
}

function Search() {
    var value = get("SEARCH").value;
    if(!strweight(value)) return;
    location.href = (Menu?"" : "../") + "index.html?request=" + value.replace(/ /g,"+");
}

function ClearSearchFilter() {
    location.href="index.html";
}

get("#SEARCH").addEventListener("keydown",function(event) {
    if (event.keyCode == 13) {
        Search();
    }
});

if(document.body.id == "menu") Menu = true;