const esquerda = document.querySelector('.esquerda');
const direita = document.querySelector('.direita');
const imgs = document.querySelectorAll('.img');
const fotos = document.querySelectorAll('.foto');
const body = document.body;
let i = 0;
body.style = `background: URL(${fotos[i].src}); background-size: cover`;

direita.addEventListener('click', () => {  
    imgs.forEach((img) => {
        img.classList.remove('active');
    })

    if(i < imgs.length - 1) {
        i++
        imgs[i].classList.add('active')
        body.style = `background: URL(${fotos[i].src}); background-size: cover`;
    } else if(i >= imgs.length - 1) {
        i = 0
        imgs[i].classList.add('active')
        body.style = `background: URL(${fotos[i].src}); background-size: cover`;
    }    
})

esquerda.addEventListener('click', () => {  
    imgs.forEach((img) => {
        img.classList.remove('active');
    })

    if(i > 0) {
        i--
        imgs[i].classList.add('active')
        body.style = `background: URL(${fotos[i].src}); background-size: cover`;
    } else if(i <= 0) {
        i = imgs.length - 1
        imgs[i].classList.add('active')
        body.style = `background: URL(${fotos[i].src}); background-size: cover`;
    }    
})
