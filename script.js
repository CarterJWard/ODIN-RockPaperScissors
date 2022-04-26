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
    round++;
    playerScore++;
}

const loseGame = (player, computer) => {
    console.log("you lost " + computer + " beats " + player)
    round++;
    cScore++;
}

const tiedGame = () => {
    console.log('Game Tied')
}

const updateScoreboard = () => {
    document.getElementById('playerPoint').innerHTML = 'Player Score: ' +playerScore
    document.getElementById('computerPoint').innerHTML = 'Computer Score: ' + cScore
    document.getElementById('roundCount').innerHTML = 'Round: '+round+'/'+maxRounds
}

const game = () => {
    while(round <= maxRounds ) {
        let playerSelection = prompt('enter your choice')
        console.log(playerSelection + ' player')
        playRound(playerSelection.toLowerCase(), computerSelection())
        updateScoreboard()
    }
    if (playerScore > cScore) {
        document.getElementById('roundCount').innerHTML = 'Congratulations, you won'
    } else {
        document.getElementById('roundCount').innerHTML = 'Better luck next time :('
    }
}

updateScoreboard()
game()

