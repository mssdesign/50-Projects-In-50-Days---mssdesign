const content = document.querySelectorAll('.content')

window.addEventListener('scroll', contentShow)

contentShow()

function contentShow() {
    const showfunction = window.innerHeight/5 * 3

    content.forEach(content => {
        const boxTop = content.getBoundingClientRect().top

        if(boxTop < showfunction) {
            content.classList.add('show')
        } else {
            content.classList.remove('show')
        }
    })
}

