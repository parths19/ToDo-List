const inp = document.querySelector("#Task");
const sub = document.querySelector(".inp button");
const table = document.querySelector(".EntryTable");

// const edit = document.querySelector(".EntryTable .Edit ");
// const del = document.querySelector(".EntryTable .Delete ");

sub.addEventListener('click', () => {
    let txt = takeinput();
    newEntry(txt);
    
});

function takeinput(){
    const val = inp.value;
    inp.value = "";
    return val;
}

function newEntry(txt){
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let btn1 = document.createElement('button');
    let btn2 = document.createElement('button');
    let txt1 = document.createTextNode("Edit");
    let txt2 = document.createTextNode("Delete");

    table.appendChild(tr);
    td2.appendChild(btn1).appendChild(txt1);
    td2.appendChild(btn2).appendChild(txt2);
    tr.appendChild(td1);
    tr.appendChild(td2);

    td1.innerText = txt;

    btn1.addEventListener('click', () => {
        const newText = prompt('Enter new text:', td1.textContent);
        if (newText !== null) {
            td1.textContent = newText;
        }
    });
    
    btn2.addEventListener('click', () => {
        table.removeChild(tr);
    });
    
}



