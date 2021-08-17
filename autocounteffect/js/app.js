const counters = document.querySelectorAll('.counter');

counters.forEach(counter=>{
    // console.log(counter);

    counter.innerText = '0';

    const updatecounter = ()=>{
        const target = +counter.getAttribute('data-target'); 
        // string phit nay loe + htae number change
        // console.log(target);
        // console.log(typeof(target));

        const ctr = Number(counter.innerText);

        const increment = target / 100; //the less, the fast

        if(ctr < target){
            counter.innerText = `${Math.floor(ctr + increment)}`; // 2 myo lone ya
            // counter.innerText = Math.ceil(ctr + increment); 
            setTimeout(updatecounter,20);
        }
    };
    updatecounter();
});



