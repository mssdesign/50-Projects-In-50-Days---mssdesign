const numbers = document.querySelectorAll('.num');

function counter() {
    numbers.forEach(number => {
        const data = +number.getAttribute('data-target');
        
        const passo = Math.ceil(data / 200)        
                
        let res = passo;
        
               
    })
}

counter()



