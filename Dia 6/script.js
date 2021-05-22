const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkboxes)

checkboxes() /* <-Se retirar esse não aparece nada no início*/

function checkboxes() {
    const triggerBottom = window.innerHeight/5 * 3

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}