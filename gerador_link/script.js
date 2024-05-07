const resultado = document.querySelector("[divResultado]")
const btnLink = document.querySelector("[btn-link]")
const btnAbrir = document.querySelector("[btn-envia]")
const link = document.querySelector("[input-link]")
const telefone = document.querySelector("[input-telefone]")
const desc = document.querySelector("[descricao]")

/*=============================================================
*                          INTERAÇÕES
==============================================================*/

btnLink.addEventListener("click", () => { geraLink() })
btnAbrir.addEventListener("click", () => { abrirLink() })
resultado.addEventListener("click", () => { copiar() })
telefone.addEventListener("input", () => { valida() })

/*=============================================================
*                           FUNÇÕES
==============================================================*/

function geraLink(evento){
    link.value = `https://wa.me/${telefone.value}`
    resultado.style.display = "block"
}

function abrirLink(evento){
    window.open(`https://wa.me/${telefone.value}`)
}

function valida(evento){
    let tel = telefone.value;
    tel = tel.replace(/\D/g, "");
    if (tel.length > 11) {
        tel = tel.slice(0, 11);
    }
    telefone.value = tel.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
}

function copiar(evento){
    
}