const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

var checkCounter = 0
var uncheckedCounter = 0

function newTodo() {
  const task = prompt("Please enter your first task" , "task ...")

  if(task != 0){
    checkCounter += 1;
    uncheckedCounter += 1;
    updateCounter()
  //crate a list element add append it the list
    const todolist = document.createElement("li")
    todolist.className = classNames.TODO_ITEM
    list.appendChild(todolist)

    //Add the text to the todolist
    const todoText = document.createTextNode(task)
    todoText.className = classNames.TODO_TEXT
    todolist.appendChild(todoText)

    // Create a check box
    const todoCheck = document.createElement('input')
    todoCheck.className = classNames.TODO_CHECKBOX
    todoCheck.type = "checkbox"
    todoCheck.id = "mycheck" + checkCounter
    todoCheck.setAttribute("onClick", "checkTodo(this.id)")
    todolist.appendChild(todoCheck)

    // Create a delete box
    const deleteButton = document.createElement('button')
    deleteButton.className = "todo-delete"
    deleteButton.type = "button"
    deleteButton.id = "deleteButton"
    deleteButton.innerText = "Delete"
    deleteButton.setAttribute("onClick", "deleteTodo(this.id)")
    todolist.appendChild(deleteButton)
    
  }
}

function checkTodo(id){
  const checkbox = document.getElementById(id)
  if(checkbox.clicked == true || checkbox.checked == true){
    uncheckedCounter -= 1
    updateCounter()
  }else if(checkbox.clicked == true || checkbox.checked == false){
    uncheckedCounter += 1
    updateCounter()
  }
}

function deleteTodo(value){
  const check = document.getElementById("mycheck" + value)
  const remove  = document.getElementById(value)
  remove.parentNode.removeChild(remove)
  // if(check.clicked == true || check.checked== true){

  // }
  updateCounter()
}

function updateCounter(){
  itemCountSpan.innerHTML = checkCounter;
  uncheckedCountSpan.innerHTML = uncheckedCounter;
}