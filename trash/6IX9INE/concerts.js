let concerts = [
    {"name":"Франция","path":"concerts/france.png","link":"https://www.youtube.com/watch?v=VBZ9pBi5AZc"},
    {"name":"Маями","path":"concerts/miami.png","link":"https://www.youtube.com/watch?v=NYo2RHofhGc"},
    {"name":"Москва","path":"concerts/moscow.png","link":"https://www.youtube.com/watch?v=NH9FRL7XTK8"},
    {"name":"Массачусетс","path":"concerts/MA.png","link":"https://www.youtube.com/watch?v=tZPzdosMcNk"},
    {"name":"Лос-Анжелес","path":"concerts/LA.png","link":"https://www.youtube.com/watch?v=boysJeKQ_Lk"},
    {"name":"Нидерланды","path":"concerts/niderlands.png","link":"https://www.youtube.com/watch?v=hKqiLuGfZjc"},
    {"name":"Италия","path":"concerts/italy.png","link":"https://www.youtube.com/watch?v=9yu20xVexTg"},
    {"name":"Stoopid","path":"concerts/stoopid.png","link":"https://www.youtube.com/watch?v=34N8TwnwaN0"},
    {"name":"Tati","path":"concerts/westcoast.png","link":"https://www.youtube.com/watch?v=8Z7ePk0ZAsQ"}
];

//
//    <div class="qblock">
//      <h1 class="qheader">null</h1>
//      <a href="#"><img class="qimage" src="concerts/LA.png"></a>
//    </div>
//    <div class="qblock"><h1 class="qheader">null</h1><a href="#"><img class="qimage" src="concerts/LA.png"></a></div>

var content = document.getElementsByClassName("concerts-holder")[0];

for(var a = 0; a < concerts.length;a+=1) {
    content.innerHTML += '<div class="qblock"><h1 class="qheader">' + concerts[a].name +'</h1><a target="_blank" href="' +concerts[a].link+'"><img class="qimage" src="' +concerts[a].path +'"></a></div>';
}