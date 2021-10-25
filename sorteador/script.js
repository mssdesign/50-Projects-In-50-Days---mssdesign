const caixatexto = document.getElementById('caixatexto');
const tags = document.getElementById('tags');
let i = 0;
let aleatorio = 0;

caixatexto.addEventListener('keyup', (event) => {
    let text = caixatexto.value.trim() 
    let array = text.split(',')

    if(event.key === ',') {
        newElement()
    }

    if(event.key === 'Enter') {
        random()
    }

    function newElement() {
        const span = document.createElement('span');
        span.classList.add(`tag`);
        span.innerText += array[i];
        tags.appendChild(span);
        i++        
    }

    function random() {
        let aleatorio = Math.floor(Math.random()*array.length);
        
    }
})


