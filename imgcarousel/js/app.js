const imgcarousel = document.getElementById('imgcarousel'),
    imgs = document.querySelectorAll('#imgcarousel img');

const leftbtn = document.getElementById('left'),
    rightbtn = document.getElementById('right');

let idx = 0;

rightbtn.addEventListener('click',()=>{
    idx++;
    changeimage();
    resetinterval();
})

leftbtn.addEventListener('click',()=>{
    idx--;
    changeimage();
    resetinterval();
});

function changeimage(){
    if (idx > imgs.length - 1){
        idx = 0;
    }else if(idx < 0){
        idx = imgs.length - 1;
    }
    imgcarousel.style.transform = `translate(${-idx * 500}px)`;
}
let interval = setInterval(imgrun, 2000);

function imgrun(){
    idx++;
    changeimage();
}

function resetinterval(){
    clearInterval(interval);
    interval = setInterval(imgrun, 2000);
    // 2 khu phit twar yin shote twar hmar soe loe. overwrite lote
}