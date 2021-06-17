const btn = document.querySelectorAll('.faq-toggle');
const faq = document.querySelectorAll('.faq');

btn.forEach(btns => {
    btns.addEventListener('click', () => {
        btns.parentNode.classList.toggle('active')
    })
})