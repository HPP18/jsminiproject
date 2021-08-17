const textel = document.getElementById('text');
const speedel = document.getElementById('speed');
// console.log(speedel.value); //value 0 but min 1 ka sa loe
const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";

let idx = 1;
let speed = 1000 / speedel.value;



function autotext(){

    textel.innerText = text.slice(0,idx);
    idx++;
     
    if(idx > text.length){
        idx = 1;
    }
    setTimeout(autotext,speed);
}
autotext();



speedel.addEventListener('click',function(){
    speed = 1000 / speedel.value;
    // console.log(speedel.value);
});