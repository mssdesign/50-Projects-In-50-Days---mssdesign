const button = document.getElementById('button')
const toast = document.getElementById('toasts')

const messages = [
    'Mensagemteste1',
    'Mensagemteste2',
    'Mensagemteste3',
    'Mensagemteste4',
    'Mensagemteste5',
    'Mensagemteste6'
]

let i = 0

function createNotification() {
    let element = document.createElement('div');
    element.textContent = messages[i];
    element.setAttribute("name", `${messages[i]}`);
    element.classList.add('toast');
    
    if (i < messages.length) {
        i++
        toast.appendChild(element)
    } else if (i >= messages.length) {
        i = 0
        toast.appendChild(element)
    }

    setTimeout(() => {
        //toast.removeChild(element);
        element.remove();
    }, 5000)

}


button.addEventListener('click', () => createNotification());