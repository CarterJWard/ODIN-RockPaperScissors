const computerSelection = () => {
    let options = ['rock', 'paper', 'scissors']
    let selection = Math.floor(Math.random() * (2 - 0 + 1) + 0)
    console.log(options[selection])
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
            if(computer == 'scissors') {
                loseGame(player, computer)
            } else {
                winGame(player,computer)
            }
        }
    }
}

const winGame = (player, computer) => {
    console.log("you won " + player + ' beats ' + computer)
}

const loseGame = (player, computer) => {
    console.log("you lost " + computer + " beats " + player)
}

const tiedGame = () => {
    console.log('Game Tied')
}

const game = () => {
    let playerSelection = prompt('enter your choice')
    console.log(playerSelection + ' player')
    playRound(playerSelection, computerSelection())
}
