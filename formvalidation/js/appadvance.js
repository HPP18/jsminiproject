const form = document.querySelector('.form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cfmpassword = document.getElementById('cfmpassword');

function showsuccess(input){
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control success';
}

function showerror(input,message){
    const formcontrol = input.parentElement;
    formcontrol.classList.add('error');

    const small = formcontrol.querySelector('small');        
    small.innerText = message;
}

function checkrequired(inputarr){
    inputarr.forEach(function(input) {
        // console.log(input); 
        // console.log(input.value);
        
        if(input.value === ""){
            // showerror(input,"Something is required");
            // showerror(input,`${input.id} is required`);
            // showerror(input,`${input.id.toUpperCase()} is required`);
            showerror(input,`${getfieldname(input)} is required`);
        }else{
            showsuccess(input);
        }
    });
}

function checkemail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // if(re.test(String(input.value).toLowerCase())){
    if(re.test(input.value)){
        showsuccess(input);
    }else{
        showerror(input,"Email is not valid");
    }
}

function checkpasswordmatch(input1,input2) {
    if(input1.value !== input2.value){
        showerror(input2,"Password do not match");
    }    
}

function getfieldname(input) {
    // return input.id.toUpperCase();
    return input.id.charAt(0).toUpperCase() + input.name.slice(1);
}

function checklength(input,min,max) {
    if(input.value.length < min){
        showerror(input,`${getfieldname(input)} must be at least ${min} characters`);
    }else if(input.value.length > max){
        showerror(input,`${getfieldname(input)} must be at most ${max} characters`);
    }else{
        showsuccess(input);
    }
}

form.addEventListener('submit',function(e){

    checkrequired([username,email,password,cfmpassword]);
    checklength(username,3,15);

    checkemail(email);

    checkpasswordmatch(password,cfmpassword);
    checklength(password,6,25);

    e.preventDefault();
});