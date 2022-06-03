const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    console.log(randomNumber)

    if (randomNumber === 1) {
        computerChoice = 'ROCK'
    }
    if (randomNumber === 2) {
        computerChoice = 'SCISSORS'
    }
    if (randomNumber === 3) {
        computerChoice = 'PAPER'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'DRAW!'
    }
    
    if (computerChoice === 'ROCK' && userChoice === 'PAPER') {
        result = 'YOU WIN!'
    }

    if (computerChoice ==='PAPER' && userChoice ==='SCISSORS') {
        result = 'YOU WIN!'
    }

    if (computerChoice === 'SCISSORS' && userChoice === 'ROCK') {
        result = 'YOU WIN!'
    }

    if (computerChoice === 'ROCK' && userChoice === 'SCISSORS') {
        result = 'YOU LOSE! TRY AGAIN.'
    }

    if (computerChoice === 'PAPER' && userChoice === 'ROCK') {
        result = 'YOU LOSE! TRY AGAIN.'
    }
    resultDisplay.innerHTML = result
}