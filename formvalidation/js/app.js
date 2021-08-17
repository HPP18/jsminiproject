const form = document.querySelector('.form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cfmpassword = document.getElementById('cfmpassword');

form.addEventListener('submit',function(e){
    // console.log('username.value');
    
    // function showsuccess(input){
    //     const formcontrol = input.parentElement;
    //     formcontrol.className = 'form-control success';
    // }

    // function showerror(input,message){
    //     const formcontrol = input.parentElement;
    //     formcontrol.classList.add('error');

    //     const small = formcontrol.querySelector('small');        
    //     small.innerText = message;
    // }

    // // check valid email
    // function isvalidemail(email){
    //     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     return re.test(String(email).toLowerCase());
    // }
    

    if(username.value === ''){
        showerror(username,'Username is required');
    }else{
        showsuccess(username);
    }

    if(email.value === ''){
        showerror(email,'Email is required');
    }
    else if(!isvalidemail(email.value)){
        showerror(email,"Email is not valid");
    }
    else{
        showsuccess(email);
    }

    if(password.value === ''){
        showerror(password,'Password is required');
    }else{
        showsuccess(password);
    }

    if(cfmpassword.value === ''){
        showerror(cfmpassword,'Confirmed password is required');
    }
    else{
        if(cfmpassword.value !== password.value){
            showerror(cfmpassword, 'Password do not match');
        }else{
            showsuccess(cfmpassword);
        }
    }

    
    e.preventDefault();
});
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

// check valid email
function isvalidemail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
