const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

const toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    //localStorage에는 배열을 저장할수 없음, 따라서 stringify 해주고 저장.
}

function deleteToDo(event){
    const li = event.target.parentElement;
    //console.log(li.id); //li객체마다 id를 추가해줬으므로 삭제 버튼 클릭 할 때 클릭 된 element의 id를 받을 수 있음
    li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id; // li html element에 id를 부여해줌
    const span = document.createElement("span");
    span.innerText = newTodo.text;  
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    //삭제 한 element를 로컬 스토리지에서도 삭제해야하므로 이 때 찾기 쉽게 id를 갖는 객체로 변경해줌.
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos){ //localstorage에 저장된 투두가 있을 경우에
    const parsedToDos = JSON.parse(savedToDos);
    //eventlistener가 함수에 event를 인자로 보내주는 것처럼, forEach는 element를 인자로 보내줌
    parsedToDos.forEach(paintToDo); // paintToDo(a), paintToDo(b) ... 호출 
    
}