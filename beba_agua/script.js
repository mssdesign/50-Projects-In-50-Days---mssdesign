const copo = document.querySelector('.copo');
const copinhos = document.querySelectorAll('.copo-pequeno');
const agua = document.querySelector('.agua');
const ar = document.querySelector('.ar');
const restante = document.querySelector('.restante');

copinhos.forEach((copinho,idx) => {
    copinho.addEventListener('click', () => backgroundcheio(idx))
})

function backgroundcheio(idx) {

    if(copinhos[idx].classList.contains('cheio') && !copinhos[idx].nextElementSibling !==null) {
        idx--
    }

    copinhos.forEach((copinho, idx2) => {
        if(idx2 <= idx) {
            copinho.classList.add('cheio')
        } else {
            copinho.classList.remove('cheio')
        }
    })
    
    copogrande()
}

function copogrande() {
    const coposcheios = document.querySelectorAll('.copo-pequeno.cheio').length;

    const total = copinhos.length

    if(coposcheios === 0) {
        agua.style.visibility = 'hidden'
        agua.style.height = 0
    } else {
        agua.style.visibility = 'visible'
        agua.style.height = `${coposcheios/total * 290}px`
        agua.innerText = `${coposcheios/total * 100}%`
    }

    if(coposcheios === total) {
        ar.style.visibility = 'hidden'
        ar.style.height = 0
    } else {
        ar.style.visibility = 'visible'
        restante.innerText = `${2 - (250 * coposcheios / 1000)}L`
    }
}