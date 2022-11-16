let click = document.querySelector('.click')
let toltip = document.querySelector('.toltip')

click.addEventListener('click',()=> {
    toltip.classList.toggle('active')
})

