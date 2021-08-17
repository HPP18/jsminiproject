const range = document.getElementById('range');

range.addEventListener('input',(e)=>{
const value = +e.target.value;
const label = e.target.nextElementSibling;

const rangewidth = getComputedStyle(e.target).getPropertyValue('width');
const labelwidth = getComputedStyle(e.target.nextElementSibling).getPropertyValue('width');

// const numrangewith = rangewidth.slice(3);
const numrangewith = rangewidth.substring(0,rangewidth.length-2);
// console.log(numrangewith);
const numlabelwidth = labelwidth.substring(0,labelwidth.length-2);

const min = +e.target.min;
const max = +e.target.max;

// const leftright = value * (numrangewith / max) - numlabelwidth / 2;
// nal nal bay htawt p dlaint tone lo phit nay loe 10+ and 10- pay lite tr
// rightmost 260=>250 phit twr, leftmost -40=>-30 phit twr, total 220px+80px = 300px
const leftright = value * (numrangewith / max) - numlabelwidth / 2 + scale(value,min,max,10,-10);

label.style.left=`${leftright}px`;
label.textContent = value;
});

const scale = (num, inmin, inmax, outmin, outmax)=>{
    return(num - inmin)* (outmax - outmin)/(inmax - inmin) + outmin;
}