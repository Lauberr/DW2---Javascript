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
link.addEventListener("click", () => { copiar() })
telefone.addEventListener("input", () => { valida() })
telefone.addEventListener("click", () => { 
    desc.innerText = 'Clique no link para copiar'; 
})

/*=============================================================
*                           FUNÇÕES
==============================================================*/

function geraLink(){
    const telLimpo = telefone.value.replace(/[-\s()]/g, "");
    linkGerado = `https://wa.me/55${telLimpo}`;
    link.value = linkGerado;
    resultado.style.display = "block";
}

function abrirLink(evento){
    window.open(linkGerado)
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
    navigator.clipboard.writeText(link.value).then(() => {
        desc.innerText = 'Link copiado para área de transferência'
    })
}