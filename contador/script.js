const inputTexto = document.querySelector("[input-texto]");
const btnContar = document.querySelector("[btn-contar]");
const divContador = document.querySelector("[txt-contador]");

let tipoContagem = "caracteres";

const handleInputTexto = (evento) => {
    const texto = evento.target.value;
    let contador;

    if (tipoContagem === "caracteres") {
        contador = texto.length;
        divContador.innerText = `${contador} caracteres`;

    } else {
        contador = texto.trim().split(/\s+/).filter(word => word !== "").length;
        divContador.innerText = `${contador} palavras`;
    }
};

function handleBtnContar(evento) {
    if (tipoContagem == "caracteres") {
        evento.target.innerText = "Contar Caracteres";
        tipoContagem = "palavras";

    } else {
        evento.target.innerText = "Contar Palavras";
        tipoContagem = "caracteres";
    }

    handleInputTexto({ target: inputTexto });
}

btnContar.addEventListener("click", handleBtnContar);
inputTexto.addEventListener("input", handleInputTexto);
