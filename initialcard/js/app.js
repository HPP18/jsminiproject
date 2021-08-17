const panels = document.querySelectorAll('.panel');

panels.forEach(function(panel){
    panel.addEventListener('click',()=>{
        removeactiveprevclass();
        panel.classList.add('active');
    });
});

function removeactiveprevclass(){
    panels.forEach(function(panel){
        panel.classList.remove('active');
    });
}