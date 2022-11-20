// variáveis
const inputNumber = document.querySelector('#inputNumber')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', handleResetKey)

// funções
function handleTryClick(event){
    event.preventDefault() // não faça o padrão | não envie o formulário

    emptyError()

    if(Number(inputNumber.value) === randomNumber) {
        toggleScreen()

        screen2.querySelector('h2').innerText = `Acertou em ${xAttempts} tentativas`
    }
    
    inputNumber.value = ''
    xAttempts++
}

function handleResetClick() {
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

function handleResetKey(e) {
    let resetKey = e.key === 'Enter' && screen1.classList.contains('hide')
    if(resetKey) {
        handleResetClick()
    }
}

function toggleScreen() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}

function emptyError() {
    let emptyError = inputNumber.value === '' || inputNumber.value < 0 || inputNumber.value > 10
    if(emptyError) {
        alert('ERRO! Por favor, insira um número entre 0 e 10 para jogar.')
        xAttempts = 1
    }
}

