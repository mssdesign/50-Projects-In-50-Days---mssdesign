const container = document.querySelector('.image-container')
const imgs = document.querySelectorAll('.image-container img')
const next = document.querySelector('#right')
const previous = document.querySelector('#left')
let activeImg = 0

function translateXNext() {
  activeImg++

  if (activeImg >= imgs.length) {
    activeImg = 0
  }

  return `translateX(${-500 * activeImg}px)`
}

function translateXPrevious() {
  activeImg--

  if (activeImg <= -1) {
    activeImg = imgs.length - 1
  }

  return `translateX(${-500 * activeImg}px)`
}

next.addEventListener('click', () => {
  container.style.transform = translateXNext()
})

previous.addEventListener('click', () => {
  container.style.transform = translateXPrevious()
})
