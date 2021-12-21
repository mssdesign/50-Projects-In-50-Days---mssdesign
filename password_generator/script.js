const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value
    const hasLower = lowercaseEl.checked
    const hasUpper= uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
})

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = ''
    const typesCount = lower + upper + number + symbol
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0])  //O filter aqui retorna os itens com "true"
    
    if (typesCount === 0) {
        return ''
    }

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]   //Definindo as funções que serão ativadas
            generatedPassword += randomFunc[funcName]() //Executando e adicionando em generatedPassword os valores das funções no objeto randomFunc
        })
    }

    const finalPassword = generatedPassword.slice(0, length)    //Filtrando o máximo de caracteres

    return finalPassword;
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97) //97 -> Início das letras minúsculas
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65) //65 -> Início das letras maiúsculas
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48) //48 -> Início dos números 
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

//Criando função para copiar a senha
clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea')
    const password = resultEl.innerText

    if (!password) {
        return
    }

    textarea.value = password
    navigator.clipboard.writeText(textarea.value)   //Função para copiar
    alert("Copiado");
})
