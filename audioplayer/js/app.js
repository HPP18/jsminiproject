const musiccontainer = document.getElementById('music-container');

const title = document.getElementById('title');
const progresscontainer = document.getElementById('progress-container'),
    progress = document.getElementById('progress');

const audio = document.getElementById('audio');

const cover = document.getElementById('cover');

const playbtn = document.getElementById('play');
const prevbtn = document.getElementById('prev');
const nextbtn = document.getElementById('next');

const songs = ['sample1','sample2','sample3'];

let songindex = 0;
loadsong(songs[songindex]);

function loadsong(music){
    title.innerText = music;
    audio.src = `./music/${music}.mp3`;
    cover.src = `./img/${music}.jpg`;
    console.log(cover.src);
}

playbtn.addEventListener('click',()=>{
    // console.log('hey');
    const isplaying = musiccontainer.classList.contains('play');

    if(isplaying){
        pausesong();
    }else{
        playsong();
    }

});

function playsong(){
    musiccontainer.classList.add('play');

    playbtn.querySelector('i.fas').classList.remove('fa-play');
    playbtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play();
}

function pausesong(){
    musiccontainer.classList.remove('play');

    playbtn.querySelector('i.fas').classList.replace('fa-pause','fa-play');
    
    audio.pause();

}

prevbtn.addEventListener('click',previoussong);
nextbtn.addEventListener('click',nextsong);

function previoussong(){
    songindex--;
    if(songindex < 0){
        songindex = songs.length-1;
    }
    loadsong(songs[songindex]);
    playsong();
}

function nextsong(){
    songindex++;
    if(songindex > songs.length-1){
        songindex = 0;
    }
    loadsong(songs[songindex]);
    playsong();
}

function updateprogress(e){
    // Method-1
    // progress.style.width = `${(audio.currentTime/audio.duration)* 100}` + '%';

    // Method-2
    // console.log(this);
    // console.log(e.target);
    const {duration,currentTime} = e.target;
    // console.log(currentTime);
    // console.log(duration);
    const progresspercent = (currentTime/duration) * 100;
    progress.style.width = `${progresspercent}%`;
}

audio.addEventListener('timeupdate',updateprogress);

function setprogress(e){
    const width = this.clientWidth;

    const clickx = e.offsetX;

    const duration = audio.duration;

    audio.currentTime = (clickx/width) * duration;
}

progresscontainer.addEventListener('click',setprogress);

audio.addEventListener('ended',nextsong);