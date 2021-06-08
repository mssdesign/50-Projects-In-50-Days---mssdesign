const sons = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sons.forEach(som => {
    const btn = document.createElement('button')
    btn.classList.add('btn')
    
    btn.innerText = som

    btn.addEventListener('click', () => {
        pararMusica()

        document.getElementById(som).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

function pararMusica() {
    sons.forEach(som => {
        const audio = document.getElementById(som)

        audio.pause()
        audio.currentTime = 0;
    })
}

