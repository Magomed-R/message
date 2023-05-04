let buttons = document.querySelectorAll(`button`)

for (let i = 0; i < buttons.length; i++) {
    buttons.forEach(button => {
        button.addEventListener(`click`, function(){
            document.querySelector(`.pred`).style.display = `none`
            document.querySelector(`.video`).style.display = `block`
            document.querySelector(`video`).play()
        })
    })
}