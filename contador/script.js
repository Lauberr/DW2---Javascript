const inputTexto = document.querySelector("[input-texto]")
const btnContar = document.querySelector("[btn-contar]")
const divContador = document.querySelector("[txt-contador]")

let tipoContagem = "caracteres"

const handleInputTexto = (evento) => {


}

function handleBtnContar(evento){
    if(tipoContagem == "caracteres"){
    evento.target.innerText = "Contar Palavras"
    tipoContagem = "palavras"
    } else {
    evento.target.innerText = "Contar Caracteres"
    tipoContagem= "caracteres"
    }
}

btnContar.addEventListener("click", handleBtnContar)
inputTexto.addEventListener("input", handleInputTexto)