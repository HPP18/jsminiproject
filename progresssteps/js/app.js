const circles = document.querySelectorAll('.circle');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentactive = 1;
update();

next.addEventListener('click',()=>{
    currentactive++;
    if(currentactive > circles.length) {
        currentactive = circles.length;
    }
    update();
});

prev.addEventListener('click',()=>{
    currentactive--;
    if(currentactive < 1){
        currentactive = 1;
    }
    update();
});

function update(){
    circles.forEach(function (circle,index){
       if (index < currentactive){
           circle.classList.add('active');
       }
       else {
           circle.classList.remove('active');
       }
    });

    if (currentactive === 1){
        prev.disabled = true;
    }else if(currentactive === circles.length){
        next.disabled = true;
    }else {
        prev.disabled = false;
        next.disabled = false;
    }

    const actives = document.querySelectorAll('.active');
    console.log(actives.length-1, circles.length-1); //100*1/3 & 100*2/3 ya chin loe
    progress.style.width = (actives.length -1) / (circles.length -1) * 100 + "%";
}

