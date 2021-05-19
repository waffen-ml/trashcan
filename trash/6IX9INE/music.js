/*
<div class="qblock trackholder"><h1>FEFE</h1><audio class="qaudio" controls><source src="music/fefe.mp3" type="audio/mpeg"></audio><div class="buttonholder"><a class="qbutton to-clip" href="#">Клип</a><a class="qbutton download" href="music/fefe.mp3" download>Скачать</a></div></div>
*/

let music = [
    {"name":"FEFE","path":"music/fefe.mp3","video":"https://www.youtube.com/watch?v=V_MXGdSBbAI"},
    {"name":"ZAZA","path":"music/zaza.mp3","video":"https://www.youtube.com/watch?v=xdVknLqOM9A"},
    {"name":"TATI","path":"music/tati.mp3","video":"https://www.youtube.com/watch?v=UC6USOV4ewc"},
    {"name":"TROLLZ","path":"music/trollz.mp3","video":"https://www.youtube.com/watch?v=oNg3M9IJJlY"},
    {"name":"BILLY","path":"music/billy.mp3","video":"https://www.youtube.com/watch?v=LJjsm6CVsG8"},
    {"name":"PUNANI","path":"music/punani.mp3","video":"https://www.youtube.com/watch?v=AY1bA23hGMU"},
    {"name":"GOOBA","path":"music/gooba.mp3","video":"https://www.youtube.com/watch?v=pPw_izFr5PA"},
    {"name":"YAYA","path":"music/yaya.mp3","video":"https://www.youtube.com/watch?v=yxgJclR4dUU"},
    {"name":"BEBE","path":"music/bebe.mp3","video":"https://www.youtube.com/watch?v=ycV6cnK3SIs"},
    {"name":"KEKE","path":"music/keke.mp3","video":"https://www.youtube.com/watch?v=02fRdleMSaA"},
    {"name":"MAMA","path":"music/mama.mp3","video":"https://www.youtube.com/watch?v=wPhLt1zlCik"},
    {"name":"TUTU","path":"music/tutu.mp3","video":"https://www.youtube.com/watch?v=jV1v2Cy1w30"},
    {"name":"GATA","path":"music/gata.mp3","video":"https://www.youtube.com/watch?v=uaixbaNK9X8"},
    {"name":"KOODA","path":"music/kooda.mp3","video":"https://www.youtube.com/watch?v=yz7Cn3pHibo"},
    {"name":"GUMMO","path":"music/gummo.mp3","video":"https://www.youtube.com/watch?v=gAs9HZC9c7Y"}
];

var holder = document.getElementsByClassName("tracks")[0];

for(var a = 0; a < music.length;a+=1) {
    holder.innerHTML += '<div class="qblock trackholder"><h1>' +music[a].name +'</h1><audio class="qaudio" controls><source src="' +music[a].path +'" type="audio/mpeg"></audio><div class="buttonholder"><a class="qbutton to-clip" target="_blank" href="' + music[a].video+'">Клип</a><a class="qbutton download" href="' +music[a].path +'" download>Скачать</a></div></div>';
}

