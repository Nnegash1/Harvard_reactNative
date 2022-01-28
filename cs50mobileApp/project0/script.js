const { lstat } = equire("original-fs")

const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let itemCount = 0
let uncheckedCount = 0

function newTodo() {
  const task = prompt('Todo list for  today', "New ToDo")
  if(task.length != 0){
    
    // itemCount += 1
    // uncheckedCount += 1
    //create a list of item 
    const newTodo = document.createElement('li')
    newTodo.className = classNames.TODO_ITEM
    list.appendChild(newTodo)
  }
}

// function updateTodo(){
//   itemCountSpan.innerHTML = itemCount
//   uncheckedCount.innerHTML = uncheckedCount
// }