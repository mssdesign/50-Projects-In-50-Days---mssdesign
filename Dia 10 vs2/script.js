const text = document.getElementById('piada')
const btn = document.getElementById('btn')

btn.addEventListener('click', piada)

piada()

async function piada() {
    const config = {
        headers: {
            'Accept': 'application/json',
        }
    }

    const response = await fetch('https://icanhazdadjoke.com/', config)
    const data = await response.json()
    text.innerText = data.joke
}