const gerar = document.querySelectorAll("[divGerar]");
const resultado = document.querySelectorAll("[divResultado]");
const btnLink = document.querySelectorAll("[btn-link]");
const btnAbrir = document.querySelectorAll("[btn-envia]");
const inputLink = document.querySelectorAll("[input-link]").value;
const inpuTel = document.querySelectorAll("[input-telefone]").value;

// Botão de link
btnLink.addeventListener("click", () => {
    geraLink()
    console.log
})

// Botão abrir em nova guia
btnAbrir.addeventListener("click", () => {
    abrirLink()
})

/*=============================================================
*                FUNÇÕES
==============================================================*/

function geraLink(){
    numero = inpuTel.innerText
    inputLink.innerText = `https://wa.me/${numero}`
}