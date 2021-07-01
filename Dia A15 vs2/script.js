const numbers = document.querySelectorAll('.num');


numbers.forEach(number => {
    number.innerText = '0'

    const cronometer = () => {
        const data = +number.getAttribute('data-target');
        const get = +number.innerText

        const passo = Math.ceil(data / 200)        
            
        if(get < data) {
            number.innerText = `${Math.ceil(get + passo)}`
            setTimeout(cronometer, 1)
        } else {
            number.innerText = data
        }
    
    }

    cronometer()
            
})



