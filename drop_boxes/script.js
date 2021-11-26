const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty') //empties é um array com todos os empty dentro

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for (const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

function dragStart() {
    //console.log('drag start')
    this.className += ' hold'   //Adiciona uma nova classe com "+="
    setTimeout(() => this.className = 'invisible', 0)   //Tornando invisível e garantindo que será executado depois de adicionar a classe hold com setTimeOut              
}

function dragEnd() {
    //console.log('drag end')
    this.className = 'fill'    //Adicionando imagem novamente
}

function dragOver(e) {
    //console.log('drag over')
    e.preventDefault() //Parando comportamento padrão que não permite mover o elemento https://developer.mozilla.org/en-US/docs/Web/API/Document/dragover_event
}

function dragEnter(e) {
    //console.log('drag enter')
    e.preventDefault() //Parando comportamento padrão que não permite mover o elemento https://developer.mozilla.org/en-US/docs/Web/API/Document/dragenter_event
    this.className += ' hovered' //Adicionando a classe com o estilo de hovered
}

function dragLeave() {
    //console.log('drag leave')
    this.className = 'empty' //Tornando o quadrado branco após tirar imagem
}

function dragDrop() {
    //console.log('drag drop')
    this.className = 'empty'
    this.append(fill) //Adicionando fill como classe no lugar que deve ficar a imagem 
}