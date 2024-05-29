const inptcriar = document.querySelector("[inpt-criar]")
const btncriar = document.querySelector("[btn-criar]")
const numtask = document.querySelector("[num-task]")
const didtask = document.querySelector("[did-task]")
const tarefas = document.querySelector("[tarefas]")
const lista = document.getElementById("lista")
const secao = document.querySelector("[secao2]")
const checkbox = document.querySelector("[checkbox]")
const trash = document.querySelector("[trash]")
const body = document.getElementById("body")

btncriar.addEventListener("click", function(){
    if(inptcriar.value != ""){
        tarefas.style = "display: block;"
        secao.style = "display: none;"
        numtask.value = Number(numtask.value) + 1
        tarefas.innerHTML += `<div class="addtask" + ${numtask.value}><input checkbox class="checkbox" onclick="marcar()" type="checkbox"></input><label id="taskname" class="taskname">${inptcriar.value}</label><button trash class="trash"><i style="font-size: x-large;" class="fa fa-trash-o"></i></button></div>`
    }
})

trash.addEventListener("click", function(){

})

function marcar(){
    const taskname = document.getElementById("taskname")
    taskname.innerHTML = `<s>${inptcriar.value}</s>`
}