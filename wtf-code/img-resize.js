var Images = document.getElementsByClassName("image");
var OriginalWidth = [];
var Resolution;
try {
    Resolution = parseInt(document.getElementsByTagName("resolution")[0].innerHTML);
    for(var a = 0; a < Images.length;a+=1) {
        OriginalWidth.push(Images[a].clientWidth);
        //Images[a].style.display = "none";

    }
}
catch {
    alert("Ошибка! На сайте не добавлен параметр разрешения.");
}
function Resize() {
    if(!Resolution) return;
    var NewResolution = document.body.clientWidth;
    var Koeff = NewResolution / Resolution;
    for(var a = 0; a < Images.length;a+=1) {
        Images[a].style.width = OriginalWidth[a] * Koeff * 1.6 + "px";
    }
}

window.onresize = Resize;
Resize();


