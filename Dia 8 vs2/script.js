const labels = document.querySelectorAll('.input-div label')
const login = document.querySelector('.form-login input')
const password = document.querySelector('.form-password input')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx*50}ms">${letter}</span>`)
        .join('')
})

function hoverLogin() {
    var magicLogin = document.createElement('style');
    magicLogin.innerText = ".input-div .form-login label span {transform: translateY(-30px);}";
    document.head.appendChild(magicLogin);
}

function hoverPassword() {
    var magicPassword = document.createElement('style');
    magicPassword.innerText = ".input-div .form-password label span {transform: translateY(-30px);}";
    document.head.appendChild(magicPassword);
}


