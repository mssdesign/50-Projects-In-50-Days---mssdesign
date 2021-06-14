const text = document.getElementById('piada')

function piada() {
    fetch('https://icanhazdadjoke.com/')
    .then((res) => res.json())
    .then(function (data) {
        console.log(data)
    })
}

piada()


        
    



// function piada() {
//     var df = await fetch('https://icanhazdadjoke.com/')
//     text.innerText = df
// }


// piada()


