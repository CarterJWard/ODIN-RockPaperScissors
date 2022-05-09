let playerScore = 0;
let cScore = 0;
let round = 1;
let maxRounds = 5;

const computerSelection = () => {
    let options = ['rock', 'paper', 'scissors']
    let selection = Math.floor(Math.random() * (2 - 0 + 1) + 0)
    return options[selection];
}

const playRound = (player, computer) => {
    if (player == computer) {
        tiedGame()
    } else {
        if (player == 'rock') {
            if (computer == 'paper') {
                loseGame(player, computer)
            } else {
                winGame(player, computer)
            }
        }
        if (player == 'scissors') {
            if (computer == 'rock') {
                loseGame(player, computer)
            } else {
                winGame(player, computer)
            }
        }
        if (player == 'paper') {
            if (computer == 'scissors') {
                loseGame(player, computer)
            } else {
                winGame(player, computer)
            }
        }
    }
}


const winGame = (player, computer) => {
    console.log("you won " + player + ' beats ' + computer)
    let scoreboard = document.querySelector('#scoreboard')
    let addition = document.createElement('h3')
    addition.textContent = 'You Won! ' + player + ' beats ' + computer
    scoreboard.appendChild(addition)
    round++;
    playerScore++;
    updateScoreboard()
}

const loseGame = (player, computer) => {
    console.log("you lost " + computer + " beats " + player)
    let scoreboard = document.querySelector('#scoreboard')
    let addition = document.createElement('h3')
    addition.textContent = "You lost " + computer + " beats " + player
    scoreboard.appendChild(addition)
    round++;
    cScore++;
    updateScoreboard()
}

const tiedGame = () => {
    console.log('Game Tied')
    let scoreboard = document.querySelector('#scoreboard')
    let addition = document.createElement('h3')
    addition.textContent = 'Game Tied'
    scoreboard.appendChild(addition)
}

const updateScoreboard = () => {
    document.getElementById('player').innerHTML = 'Player Score: ' + playerScore
    document.getElementById('comp').innerHTML = 'Computer Score: ' + cScore
    document.getElementById('round').innerHTML = 'Round: ' + round + '/' + maxRounds
    if (round > maxRounds) {
        let board = document.querySelector('#round')
        if (cScore > playerScore) {
            board.textContent = 'Better luck next time'
        } else {
            board.textContent = "congrats you've won"
        }
    }

}

let rock = document.querySelector('#rock')
rock.onclick = () => {
    playRound('rock', computerSelection())
}

let paper = document.querySelector('#paper')
paper.onclick = () => {
    playRound('paper', computerSelection())
}

let scissors = document.querySelector('#scissors')
scissors.onclick = () => {
    playRound('scissors', computerSelection())
}
updateScoreboard()