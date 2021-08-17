const form = document.getElementById('task-form');
const taskinput = document.getElementById('task');
const filter = document.querySelector('#filter');
const tasklist = document.querySelector('.collection');
const clearbtn = document.querySelector('.clear-tasks');

tasklist.addEventListener('click',removetask);

clearbtn.addEventListener('click',cleartasks);

filter.addEventListener('keyup',filtertasks);

form.addEventListener('submit',addtask);

clearbtn.addEventListener('click',cleartasksfromlocalstorage);

document.addEventListener('DOMContentLoaded',gettasks);

function addtask(e){
    
    if(taskinput.value === ''){
        window.alert('Add a task');
    }

    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskinput.value));

    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = `<i class="far fa-trash-alt"></i>`;
    li.appendChild(link);
    tasklist.appendChild(li);

    storetaskinlocalstorage(taskinput.value);

    e.preventDefault();
}

function removetask(e){
    // console.log(e.target);
    // console.log(e.target.parentElement);
    

    if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure')){
        console.log(e.target.parentElement.parentElement);
        e.target.parentElement.parentElement.remove();

        removetaskfromlocalstorage(e.target.parentElement.parentElement);
    }
    }
    
}

function cleartasks(){
    // Method-1
    // tasklist.innerHTML= '';

    // Method-2
    // console.log(tasklist.childElementCount);
    // console.log(tasklist.firstChild);

    // let x = 0;
    // while(x < tasklist.childElementCount){
    //     tasklist.removeChild(tasklist.firstChild);
// }

    // Method-3
    // let x =0;
    // const litems = document.querySelectorAll('li');
    // console.log(litems);
    // console.log(litems.length);

    // while(x < litems.length){ //wrong
    while(tasklist.firstChild){
        tasklist.removeChild(tasklist.firstChild);
    }
    
}

function filtertasks(e){
    // console.log(e.target.value);

    const filter = e.target.value.toLowerCase();
    // console.log(filter);

    const tasks = document.querySelectorAll('.collection-item');

    tasks.forEach(function(task){
        const item = task.firstChild.textContent.toLowerCase();

        if(item.indexOf(filter) !== -1){
            task.style.display = 'block';
        }else{
            task.style.display = 'none';
        }
    });
}

function storetaskinlocalstorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
}
// GET Tasks From Localstorage
function gettasks(){
    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task){
    
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(task));

        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = `<i class="far fa-trash-alt"></i>`;

        li.appendChild(link);
        tasklist.appendChild(li);

    });


}
// gettasks();

// Remove task from localStorage

function removetaskfromlocalstorage(taskitem){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task,index){
        if(taskitem.textContent === task){
            tasks.splice(index,1);
        }
    });
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

// CLear from localStorage
function cleartasksfromlocalstorage(){
    localStorage.clear();
}
