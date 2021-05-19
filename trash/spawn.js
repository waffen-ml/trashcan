function BelongsToSelector(string,selector) {
    string = string.toLowerCase();
    selector = selector.toLowerCase();
    if (string.includes(selector) || selector.includes(string)) return true;
    return false;
}

function Spawn(selector) {
    var holder = get(".item-holder");
    holder.innerHTML = "";
    
    for(var a = 0; a < Projects.length;a+=1) {
        if(selector && !BelongsToSelector(Projects[a].name,selector)) continue;
        holder.innerHTML += '<div class="item" onclick="location.href=' + "'" + Projects[a].path+ "'"+ '"><div class="img-shadow"><img src="' +Projects[a].icon_path +'"></div><a href="' +Projects[a].path +'">' +Projects[a].name +'</a></div>';

    }
}