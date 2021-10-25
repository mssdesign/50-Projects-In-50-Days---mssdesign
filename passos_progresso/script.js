const progresso = document.getElementById('progresso')
const voltar = document.getElementById('voltar')
const prox = document.getElementById('prox')
const circulos = document.querySelectorAll('.circulo')

let atualativo = 1

prox.addEventListener('click', () => {
    atualativo++

    if(atualativo > circulos.length) {
        atualativo = circulos.length
    }

    update()
})

voltar.addEventListener('click', () => {
    atualativo--

    if(atualativo < 1) {
        atualativo = 1
    }

    update()
})

function update() {
    circulos.forEach((circulo, idx) => {
        if(idx < atualativo) {
            circulo.classList.add('ativo')
        } else {
            circulo.classList.remove('ativo')
        }
    })

    const ativos = document.querySelectorAll('.ativo')

    progresso.style.width = (ativos.length -1)/(circulos.length -1) * 100 + '%'

    if(atualativo === 1) {
        voltar.disabled = true
    } else if(atualativo === circulos.length) {
        prox.disabled = true
    } else {
        voltar.disabled = false
        prox.disabled = false
    }
}

