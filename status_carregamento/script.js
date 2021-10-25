const loadn = document.querySelector('.load')
const picture = document.querySelector('.picture')

let load = 0

let int = setInterval(blurr, 30)

function blurr(){
    load++

    if (load > 99){
        clearInterval(int)
    }

    loadn.innerHTML = `${load}%`;
    loadn.style.opacity = scale(load, 0, 100, 1, 0);

    picture.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}