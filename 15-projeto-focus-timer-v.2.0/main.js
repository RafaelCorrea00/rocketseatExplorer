
/********************          TIMER           *******************/
const minutesDisplay = document.querySelector('#minutesDisplay')
const secondsDisplay = document.querySelector('#secondsDisplay')

const playTimer = document.querySelector('#playTimer')
const stopTimer = document.querySelector('#stopTimer')
const increase5Minutes = document.querySelector('#increase5Minutes')
const decrease5Minutes = document.querySelector('#decrease5Minutes')

let timer
let seconds = 0
let minutes = 25

function updateTimeDisplay(seconds, minutes) {
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
}

function stopTimeDisplay() {
    seconds = 0
    minutes = 25
    updateTimeDisplay(0, 25)
    clearInterval(timer)
}

playTimer.addEventListener('click', () => {
    timer = setInterval(() => {

        if(seconds <= 0){
            seconds = 59
            minutes--
        } else {
            seconds--
        }
        if(minutes < 0) {
            stopTimeDisplay()
        }

        updateTimeDisplay(seconds, minutes)
    }, 1000)
})

stopTimer.addEventListener('click', () => {
    stopTimeDisplay()
})

increase5Minutes.addEventListener('click', () => {
    minutes += 5
    updateTimeDisplay(seconds, minutes)
})

decrease5Minutes.addEventListener('click', () => {
    minutes -= 5
    if(minutes < 0) {
        minutes = 0
    }
    updateTimeDisplay(seconds, minutes)
})

/********************          SOUNDS           *******************/
const soundButton = document.querySelectorAll('.sounds .card button')
const audios = document.querySelectorAll('.sounds .card button audio')

function handleSoundButton(n1, n2, n3, n4) {
    soundButton[n1].classList.add('active')
    soundButton[n2].classList.remove('active')
    soundButton[n3].classList.remove('active')
    soundButton[n4].classList.remove('active')
}

function handleAudios(n1, n2, n3, n4){
    audios[n1].play()
    audios[n2].pause()
    audios[n3].pause()
    audios[n4].pause()
}

function forestSound() {
    soundButton[0].addEventListener('click', () => {
        handleSoundButton(0, 1, 2, 3)
        handleAudios(0, 1, 2, 3)
    })
}

function rainSound() {
    soundButton[1].addEventListener('click', () => {
        handleSoundButton(1, 0, 2, 3)
        handleAudios(1, 0, 2, 3)
    })
}

function coffeeshopSound() {
    soundButton[2].addEventListener('click', () => {
        handleSoundButton(2, 0, 1, 3)
        handleAudios(2, 0, 1, 3)
    })
}

function fireplaceSound() {
    soundButton[3].addEventListener('click', () => {
        handleSoundButton(3, 0, 1, 2)
        handleAudios(3, 0, 1, 2)
    })
}

forestSound()
rainSound()
coffeeshopSound()
fireplaceSound()

/********************          VOLUME CONTROLS           *******************/
let forestVolume = document.querySelector('#forestVolume')
let rainVolume = document.querySelector('#rainVolume')
let coffeeshopVolume = document.querySelector('#coffeeshopVolume')
let fireplaceVolume = document.querySelector('#fireplaceVolume')

let forestVolumeRange = document.querySelector('#forestVolumeRange')
let rainVolumeRange = document.querySelector('#rainVolumeRange')
let coffeeshopVolumeRange = document.querySelector('#coffeeshopVolumeRange')
let fireplaceVolumeRange = document.querySelector('#fireplaceVolumeRange')

function volumeControl(volume, volumeRange){
    volumeRange.addEventListener('click', () => {
        volume.volume = Number(volumeRange.value) / 10
    })
}

volumeControl(forestVolume, forestVolumeRange)
volumeControl(rainVolume, rainVolumeRange)
volumeControl(coffeeshopVolume, coffeeshopVolumeRange)
volumeControl(fireplaceVolume, fireplaceVolumeRange)

/********************          DARK MODE           *******************/
const toggle = document.querySelector('.toggle')
const body = document.querySelector('body')
const timerDisplay = document.querySelectorAll('.timer .time span')
const timerButtons = document.querySelectorAll('.timer .buttons img')
let darkMode = false

toggle.addEventListener('click', () => {

    if(darkMode === false){
        toggle.style.backgroundImage = 'url("./assets/images/dark-mode.svg")'
        body.style.background = '#000'
        
        timerDisplay.forEach(element => {
            element.style.color = '#FFF'
        })
    
        timerButtons.forEach(element => {
            element.style.filter = 'invert()'
        })
    
        soundButton.forEach(element => {
            element.style.filter = 'invert()'
        })

        darkMode = true
    } else {
        if(darkMode === true) {
            toggle.style.backgroundImage = 'url("./assets/images/light-mode.svg")'
            body.style.background = '#FFF'
            
            timerDisplay.forEach(element => {
                element.style.color = '#323238'
            })
        
            timerButtons.forEach(element => {
                element.style.filter = 'none'
            })
        
            soundButton.forEach(element => {
                element.style.filter = 'none'
            })
        }
        darkMode = false
    }
})
