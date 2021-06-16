const container = document.querySelector('.container')

window.addEventListener('keydown', (tecla) => {
    container.innerHTML = `<div class="key">
    <small>Tecla</small>
    <h1>${tecla.key === ' ' ? 'space' : tecla.key}</h1>
</div>

<div class="key">
    <small>Código de tecla</small>
    <h1>${tecla.keyCode}</h1>
</div>

<div class="key">
    <small>Código de evento</small>
    <h1>${tecla.code}</h1>
</div>`
})