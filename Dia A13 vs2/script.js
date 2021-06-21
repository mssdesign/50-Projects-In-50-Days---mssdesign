const caixatexto = document.getElementById('caixatexto');
const tags = document.getElementById('tags');

caixatexto.addEventListener('keyup', (event) => {
    if(event.key === 'Enter') {
        newelement()
        caixatexto.value = ''
    }

    function newelement() {
        const span = document.createElement('span');
        span.classList.add('tag');
        span.innerText = caixatexto.value;
        tags.appendChild(span);
    }
})
