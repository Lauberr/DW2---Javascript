const textTask = document.querySelector('#add')
const btnCreate = document.querySelector('.create')
const todo = document.querySelector('.to-do')
const empty = document.querySelector('.empty')
const numCreated = document.querySelector('.num-created')
const numCheck = document.querySelector('.num-check')

let countCreated = 0;
let countCheck = 0;

btnCreate.addEventListener('click', addTask)
todo.addEventListener('click', clickTask)

function updateEmpty(){
    if (todo.children.length === 0) {
        empty.style.display = 'flex'
    
    } else {
        empty.style.display = 'none'
    }
}

function addTask(){
    let task = document.createElement('label')
   
    task.classList.add('task')
    task.innerHTML = `
        <input type="checkbox" name="checkbox" class="unchecked">
        <p class='mark'>${textTask.value}</p>
        <i class='bx bx-trash'></i>
    `
    todo.append(task)
    textTask.value = ''
    countCreated++
    numCreated.textContent = countCreated
    updateEmpty()
}

function clickTask(event){
    if (event.target.classList.contains('bx-trash')) {
        deleteTask(event.target.parentElement)
   
    } else if (event.target.name === 'checkbox') {
        check(event.target)
    }
}

function deleteTask(taskElement){
    todo.removeChild(taskElement)
    countCreated--
    numCreated.textContent = countCreated
    updateEmpty()
}

function check(checkbox){        
    let mark = checkbox.nextElementSibling

    if (checkbox.checked) {
        checkbox.classList.remove("unchecked")
        checkbox.classList.add("checked")
        mark.style.textDecoration = 'line-through'
        countCheck++
    
    } else {
        checkbox.classList.remove("checked")
        checkbox.classList.add("unchecked")
        mark.style.textDecoration = 'none'
        countCheck--
    }
    numCheck.textContent = countCheck
}
