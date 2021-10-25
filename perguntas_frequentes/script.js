const ask = document.querySelectorAll('.ask');
const btns = document.querySelectorAll('.buttons');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentElement.classList.toggle('active');
    })
});