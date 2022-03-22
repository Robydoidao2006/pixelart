const container = document.querySelector('.container')
const sizeEl = document.querySelector('.size')
let size = sizeEl.value
const color = document.querySelector('.color')
const resetBtn = document.querySelector('.resetBnt')

let draw = false

function populate(size) {
    container.style.setProperty('--size', size)
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div')
        div.classList.add('pixel')

        //draws continuesly, so long as the button is pressed and mouse cursor runs over grids
        div.addEventListener('mouseover', function () {
            if (!draw) return
            div.style.backgroundColor = color.value
        })

        // fixes issue where courser will only draw the next grid, instead of the first one
        div.addEventListener('mousedown', function () {
            div.style.backgroundColor = color.value
        })


        container.appendChild(div)
    }
}

//while click is down(pressed) it will continue to draw.
window.addEventListener("mousedown", function () {
    draw = true
})

//let go click stops drawing.
window.addEventListener("mouseup", function () {
    draw = false
})

function reset() {
    container.innerHTML = ''
    populate(size)
}

resetBtn.addEventListener('click', reset)



sizeEl.addEventListener('change', function () {
    size = sizeEl.value
    reset()
})

populate(size)