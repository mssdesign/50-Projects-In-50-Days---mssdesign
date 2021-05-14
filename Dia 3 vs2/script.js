const container = document.querySelector('.container')
const fechar = document.getElementById('botao_sair')
const abrir = document.getElementById('botao_menu')

abrir.addEventListener('click', () => container.classList.add('mostrar'))

fechar.addEventListener('click', () => container.classList.remove('mostrar'))





