const loveme = document.querySelector('.loveme');
const times = document.querySelector('#times');

let timescliced = 0;

// loveme.addEventListener('dblclick',(e)=>{
let clicktimes = 0;
loveme.addEventListener('click',(e)=>{
    if (clicktimes === 0){
        clicktimes = new Date().getTime();
        // console.log(clicktimes);
    }else{
        if((new Date().getTime() - clicktimes) < 1000){

            createheart(e);

            clicktimes = 0;
        }else {
            clicktimes = new Date().getTime();
        }
    }

});

const createheart = (e)=>{
    const heart = document.createElement('i');
    heart.className = "fas fa-heart";
    const cx = e.clientX;
    const cy = e.clientY;

    const topoffset = e.target.offsetTop;
    const leftoffset = e.target.offsetLeft;

    const xinside = cx - leftoffset;
    const yinside = cy - topoffset;

    heart.style.top = `${yinside}px`;
    heart.style.left = `${xinside}px`;

    loveme.appendChild(heart);

    times.textContent = ++timescliced;

    setTimeout(()=>heart.remove(),1000);
};