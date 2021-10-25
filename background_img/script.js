const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.querySelector('.left-arrow');
const rightBtn = document.querySelector('.right-arrow');

let activeSlide = 0;

setBgToBody()

function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
    slides.forEach(slide => {
        slide.classList.remove('active')
    })

    slides[activeSlide].classList.add('active')
}

leftBtn.addEventListener('click',() => {
    if(activeSlide > 0) {
        activeSlide--
        setActiveSlide()
        setBgToBody()
    } else {
        activeSlide = slides.length -1;
    }
});

rightBtn.addEventListener('click',() => {
    if(activeSlide < slides.length - 1) {
        activeSlide++
        setActiveSlide()
        setBgToBody()
    } else {
        activeSlide = 0;
    }
});