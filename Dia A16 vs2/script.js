const copo = document.querySelector('.copo');
const copinhos = document.querySelectorAll('.copo-pequeno');

copinhos.forEach((copinho,idx) => {
    copinho.addEventListener('click', () => {
        copinho.classList.add('cheio')

        


    })
})