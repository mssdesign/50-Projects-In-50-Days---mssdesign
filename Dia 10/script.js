const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

/*Função gerador de piadas método 2 (recomendado)*/
/*Para usar await em uma variavél é preciso definir a função como async*/
async function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json',
        },
    }

    const res = await fetch('https://icanhazdadjoke.com', config)

    const data = await res.json()

    jokeEl.innerHTML = data.joke
}

// /*Função gerador de piadas método 1*/
// function generateJoke() {
//     const config = {
//         headers: {
//             'Accept': 'application/json',
//         },
//     }

//     fetch('https://icanhazdadjoke.com', config)
//         .then(res => res.json())
//         .then((data) => {
//             jokeEl.innerHTML = data.joke
//         })
// }