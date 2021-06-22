const caixatexto = document.getElementById('caixatexto');
const tags = document.getElementById('tags');
let i = 0;

caixatexto.addEventListener('keyup', (event) => {
    let text = caixatexto.value.trim() 
    let array = text.split(',')

    if(event.key === ',') {
        newElement()
    }

    function newElement() {
        const span = document.createElement('span');
        span.classList.add('tag');
        span.innerText += array[i];
        tags.appendChild(span);
        i++
    }

    console.log(array)
})
