// BARRA DE VIDEO

let video=document.getElementById('video');

const play=()=>{
    video.play();
    document.querySelector('#duracion').textContent=video.duration.toFixed(2);
}

const pause=()=>{
    video.pause();
}


