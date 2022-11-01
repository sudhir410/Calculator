const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const allClearButton = document.querySelector('[data-all-clear]')
const InputField = document.querySelector('input')

function clear() {
    InputField.value = ''
}


function appendNumber(number) {

    let text = InputField.value


    if (text[text.length - 1] == number) {
        return
    } else {
        InputField.value += String(number)
    }

}


numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.innerText)

    })
})

equalsButton.addEventListener('click', () => {
    let res = eval(InputField.value)
    InputField.value = res
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.innerText)
    })
})

allClearButton.addEventListener('click', () => {
    clear()
})