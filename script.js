const calculadora = document.querySelector("[box1]")
const contador = document.querySelector("[box2]")
const gerador = document.querySelector("[box3]")

calculadora.addEventListener("click", () => {
    window.location.href = 'calculadora/index.html'
})

contador.addEventListener("click", () => {
    window.location.href = 'contador/index.html'
})

gerador.addEventListener("click", () => {
    window.location.href = 'gerador_link/index.html'
})
