const toDoForm = document.querySelector('.js-toDoForm'),
    toDoInput = toDoForm.querySelector('input'),
    toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';

let toDos = [];

function saveTodos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function deleteTodo(event) {
    let clickedBtn = event.target.parentNode;
    let btnId = parseInt(clickedBtn.id);
    console.log(btnId);
    clickedBtn.remove();
    toDos.forEach((cur, i) => {
        if(cur.id === btnId) {
            toDos.splice(i,1);
        }
    });
    saveTodos();
}

function paintTodo(text) {
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    delBtn.innerText = "❌";
    delBtn.addEventListener('click', deleteTodo);
    const span = document.createElement('span');
    const newId = toDos.length + 1;
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        id: newId,
        text
    }
    toDos.push(toDoObj);
    saveTodos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currenValue = toDoInput.value; 
    paintTodo(currenValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null) {
        const parsedTodos = JSON.parse(loadedToDos);
        parsedTodos.forEach(toDo => paintTodo(toDo.text));

    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener('submit', handleSubmit);
}

init();