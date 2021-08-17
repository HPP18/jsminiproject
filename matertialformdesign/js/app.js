const labels = document.querySelectorAll('.form-control label');
// console.log(labels);
labels.forEach(function (label){
    // let span = document.createElement('span');
    // span.style.transitionDelay = 0 + 'ms';
    // label.innerText.split('');
    // span.appendChild(document.createTextNode(''));
    // console.log(span);

    // console.log(label.innerText);
    // console.log(label.textContent.split());
    // console.log(label.textContent.split(''));

    label.innerHTML = label.innerText
        .split('')
        .map((letter,index)=>
        `<span style="transition-delay: ${index * 50}ms">${letter}</span>`).join('');
});

// let abc = ['a','b','c'];
// console.log(abc.join('-')); //a-b-c