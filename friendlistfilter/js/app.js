const filter = document.getElementById('filter');
const ulresult = document.getElementById('result');
const url = 'https://randomuser.me/api/?results=';
const totalusers = 50;

const listitems = [];

async function getdata(){
    const res = await fetch(`${url}${totalusers}`);
    // console.log(res);

    const {results} = await res.json();
    // info $ results ya. results htae ka kg ko lo chin tr
    // json().results so yin tot ma ya. event htae ka htoke tr ma hote loe.

    ulresult.innerText = '';

    results.forEach(result=>{
       const li = document.createElement('li');
       li.innerHTML = `<img src="${result.picture.large}" alt="${result.name.first}" />
                    <div class="userinfo">
                        <h4>${result.name.first} ${result.name.last}</h4>
                        <p>${result.location.city} , ${result.location.country}</p>
                    </div>`;
        ulresult.appendChild(li);

        listitems.push(li);
    });
}
getdata();

// filter.addEventListener('input',(e)=>{
//    filterdata(e.target.value);
// });
filter.addEventListener('input', (e)=>filterdata(e.target.value));

function filterdata(search){

    listitems.forEach(listitem=>{
        console.log(listitem.innerText);
       if (listitem.innerText.toLocaleLowerCase().includes(search.toLowerCase())){
           listitem.classList.remove('hide');
       }else {
           listitem.classList.add('hide');
       }
    });
}