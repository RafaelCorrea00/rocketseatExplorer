const home = document.querySelector('.home')
const luck = document.querySelector('.luck')

const cookie = document.querySelector('#cookie')
const newCookie = document.querySelector('#newCookie')
const cookieSentence = document.querySelector('#cookieSentence')

const sentences = [
    'Procure acender uma vela em vez de amaldiçoar a escuridão',
    'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu',
    'A vida trará coisas boas se tiver paciência',
    'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si',
    'Não compense na ira o que lhe falta na razão',
    'Defeitos e virtudes são apenas dois lados da mesma moeda',
    'A maior de todas as torres começa no solo',
    'Não há que ser forte. Há que ser flexível',
    'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
    'A juventude não é uma época da vida, é um estado de espírito.'
]

function changeSentence() {
    let randomSentence = Math.floor((Math.random() * 10))
    cookieSentence.textContent = sentences[randomSentence]
}

function changeScreen() {
    home.classList.toggle('hide')
    luck.classList.toggle('hide')
}

cookie.addEventListener('click', () => {
    changeScreen()
    changeSentence()
})

newCookie.addEventListener('click', changeScreen)