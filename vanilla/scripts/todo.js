const toDoForm = document.querySelector(".js-toDoform"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = [];

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos!==null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach((toDo) => {
            paintToDo(toDo.text);
        });
    }
}


function deleteToDo(event){
    const btn =event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id!==parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDO();
}

function  saveToDO(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const newId = toDos.length +1;
    const span = document.createElement("span");

    delBtn.innerText="X";
    delBtn.addEventListener("click" , deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);    
    li.id = newId;
    toDoList.appendChild(li);

    const toDoObj = {
        text : text,
        id : newId,
    };

    toDos.push(toDoObj);
    saveToDO();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
    
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();