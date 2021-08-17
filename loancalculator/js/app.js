const terms = document.getElementById('years');
const bubble = document.querySelector('.bubble');
terms.addEventListener('input',function(){
    const val = terms.value;
    bubble.innerHTML = val>1? `${val} Months`: `${val} Month`;
});


document.getElementById('loan-form').addEventListener('submit',function(e){
    
    document.getElementById('results').style.display= 'none';

    document.getElementById('loading').style.display='block';

    setTimeout(calculateresult,1000);
    e.preventDefault();
});

// CALCULATE RESULT
function calculateresult(){
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const monthlypayment = document.getElementById('monthly-payment');
    const totalpayment = document.getElementById('total-payment');
    const totalinterest = document.getElementById('total-interest');

    const getprincipal = parseFloat(amount.value);
    const getinterest = parseFloat(interest.value)/12;
    const getterm = parseFloat(terms.value);

    const monthly = Math.round(getprincipal*(getterm*getinterest))/100;
    console.log(monthly);

    if(monthly){
        monthlypayment.value = ((getprincipal+monthly)/getterm).toFixed(2);
        totalinterest.value = monthly.toFixed(2);
        totalpayment.value = (monthlypayment.value * getterm).toFixed(2);

        document.getElementById('results').style.display = "block";

        document.getElementById('loading').style.display = 'none';

    }else{
        document.getElementById('loading').style.display = 'none';
        showerror("Please check your number");
    }
}

function showerror(message){
    document.getElementById('results').style.display = 'none'; //no necessarily need
    const errordiv = document.createElement('div');
    errordiv.className = "alert alert-danger";
    errordiv.appendChild(document.createTextNode(message));
    
    const card= document.querySelector('.card');
    const heading = document.querySelector('.heading');

    card.insertBefore(errordiv,heading);
    setTimeout(clearerror,1000);

}
function clearerror(){
    document.querySelector('.alert').remove();
}
