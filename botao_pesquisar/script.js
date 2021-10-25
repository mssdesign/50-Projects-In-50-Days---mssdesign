const search_box = document.querySelector('.search-box')
const button = document.querySelector('.search')
const input = document.querySelector('.barr')

button.addEventListener('click', () => {
    search_box.classList.toggle('active')    
    input.focus()
})