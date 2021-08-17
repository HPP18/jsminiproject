const addbtn = document.getElementById('add');

// addbtn.addEventListener('click',addnewnote()); //ma ya pr. blank pretency so nameless fun nae write

addbtn.addEventListener('click',()=>addnewnote()); // parameter fun maloe pretency ma par loe ma ya

function addnewnote(text= ''){
        const note = document.createElement('div');
        note.classList.add('note');
    
        note.innerHTML= `
        <div class="tools">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>

        <div class="main ${text ? '' : 'hidden'}"></div>
        <textarea class="${text ? 'hidden' : ''}"></textarea>
        `;

        const editbtn = note.querySelector('.edit');
        const deletebtn = note.querySelector('.delete');
        const main = note.querySelector('.main');
        const txtarea = note.querySelector('textarea');
    
        editbtn.addEventListener('click',()=>{
            main.classList.toggle('hidden');
            txtarea.classList.toggle('hidden');
        });

        deletebtn.addEventListener('click',()=>{
            note.remove();

            updatelocalstorage();
        });

        txtarea.value = text;
        main.textContent = text;

        txtarea.addEventListener('keyup',(e)=>{
            const {value} = e.target; //value name tu hma ya
            main.textContent = value;

            updatelocalstorage();

        });

        document.body.appendChild(note);
}

function updatelocalstorage(){
    const notetexts = document.querySelectorAll('textarea');

    let notes = [];

    notetexts.forEach(notetext=>notes.push(notetext.value));
    localStorage.setItem(' notes', JSON.stringify(notes));
}

const getnotes = JSON.parse(localStorage.getItem('notes'));

if(getnotes){
    getnotes.forEach(getnote=>addnewnote(getnote));
}