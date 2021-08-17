const buttons = document.querySelectorAll('.btnripple');

buttons.forEach(function (button){
    button.addEventListener('click',function (e){
        // const cx = e.offsetX; //ma ya pr cuz y ka center hmr 0 phit ma ny loe
        // const cy = e.offsetY;
       const cx = e.clientX;
       const cy = e.clientY;
       console.log(cx,cy);

        const buttontop = e.target.offsetTop;
        const buttonleft = e.target.offsetLeft;
        console.log(buttonleft, buttontop);

        const xinside = cx - buttonleft;
        const yinside = cy - buttontop;
        // console.log(xinside, yinside);

        const circle = document.createElement('span');
        circle.classList.add('circle');
        // console.log(circle);

        circle.style.top = yinside + 'px';
        circle.style.left = xinside + 'px';

        // e.target.appendChild(circle);
        this.appendChild(circle);

        setTimeout(()=>{
            circle.remove();
        },600);
    });

});