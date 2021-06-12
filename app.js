//Selectors
const todoInput=document.querySelector('.todo-input');
const todoButton=document.querySelector('.todo-button');
const todoList=document.querySelector('.todo-list');
const filterOption=document.querySelector(".filter-todo");

//Event listeners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click',filterTodo);

//Functions
function addTodo(e){
    //Prevents Submitting
    e.preventDefault();
    //Todo List
    const todoDiv=document.createElement('div');
    todoDiv.classList.add('todo');
    //Create List
    const newTodo=document.createElement('li');
    newTodo.innerText= todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Completed button
    const completedButton=document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    //Trash button
    const trashButton=document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //Append List
    todoList.appendChild(todoDiv);
    //Clearing Input
    todoInput.value=" ";
}
//DeleteCheck Function
function deleteCheck(e){
    const item=e.target;
    if(item.classList[0]==="trash-btn"){
        const todo=item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend',function(){
            todo.remove();
        });
        
    }
    //Completed Button
    if(item.classList[0]==="complete-btn"){
        const todo=item.parentElement;
        todo.classList.toggle('completed')
    }

}

//Filter Function
function filterTodo(e){
    const todos=todoList.childNodes;
    todos.forEach(function (todo){
        switch(e.target.value){
            case "all":
               todo.style.display="flex";
               break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display="flex";
                }  
                else{
                    todo.style.display="none";
                } 
                break;
            case "incomplete":
                if(!todo.classList.contains("completed")){
                    todo.style.display="flex";
                }  
                else{
                    todo.style.display="none";
                } 
                break;
        }

    });
}
