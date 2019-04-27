var video = document.getElementById('video');
var btnPlay = document.getElementById('btnPlay');
var icono = document.getElementById('icono');
var tiempo = document.getElementById('tiempo');
var volumen = document.getElementById('volumen');


tiempo.setAttribute("max", video.duration);

btnPlay.addEventListener("click", function(){
    
    if(icono.className == "ico icon-controller-play"){
        

        video.play();
        var intervalo = setInterval(barraTiempo, 1);
    }
    else{
        video.pause();
    }

    icono.classList.toggle("icon-controller-play");
    icono.classList.toggle("icon-controller-paus");
});

tiempo.addEventListener("change", function(){
    video.currentTime = tiempo.value;
});

function barraTiempo(){
    tiempo.value = video.currentTime;
    if(video.ended){
        icono.className = "icon-controller-play";
    }
}

volumen.addEventListener("change", function(){
    video.volume = volumen.value;
});







































