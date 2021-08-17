const video = document.getElementById('video');

const play = document.getElementById('play'),
    stop = document.getElementById('stop'),
    progress = document.getElementById('progress'),
    timestamp = document.getElementById('timestamp');

// Play and pause video
function togglevideostatus(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}

function updateplayicon(){
    if(video.paused){
        play.innerHTML=`<i class="fa fa-play fa-2x"></i>`;
    }else{
        play.innerHTML=`<i class="fa fa-pause fa-2x"></i>`;
    }
}

function updateprogess(){
    // console.log(video.currentTime);
    // console.log(video.duration);

    // progress.value = (video.currentTime / video.duration) * 100;
progress.value = 58;
console.log(progress);

    let mins = Math.floor(video.currentTime / 60);
    if(mins<10){
        mins = '0'+ String(mins);
    }

    let secs = Math.floor(video.currentTime % 60);
    if(secs<10){
        secs = "0"+ String(secs);
    }

    timestamp.innerText = `${mins}:${secs}`;
}

function stopvideo(){
    video.currentTime = 0;
    video.pause();
}

function setvideoprogress(){
    video.currentTime = (progress.value* video.duration) / 100;
}

video.addEventListener('click',togglevideostatus);
video.addEventListener('play',updateplayicon);
video.addEventListener('pause',updateplayicon);
video.addEventListener('timeupdate',updateprogess);

play.addEventListener('click',togglevideostatus);
stop.addEventListener('click',stopvideo);

progress.addEventListener('change',setvideoprogress); //click ll ya

