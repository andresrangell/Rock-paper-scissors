let playerScore = 0;
let computerScore = 0;

let playerSelection = playerPlay();
let computerSelection = computerPlay();
let result;

// Generates the computer's choice ramdomly between rock, paper and scissors
function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice == 0) {
        computerChoice = 'rock';
    }  else if (computerChoice == 1) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
    console.log('The CPU choose: ' + computerChoice)

    return computerChoice;
}

// Obtains the player's choice
function playerPlay() {
    playerChoice = prompt('Type an option:  ["Rock", "Paper" or "Scissors"]').toLowerCase();
    
    console.log('The player choose: ' + playerChoice);


    return playerChoice;
}

// Evaluates the winner of the round
function playRound(playerSelection, computerSelection) {
    if (computerSelection === playerSelection) {
        computerScore ++;
        playerScore ++;
        result = 'It\'s a tie! ' + 'Player score is: ' + playerScore + ' Computer score is: ' + computerScore;
        
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        computerScore ++;
        result = 'Computer win! Rock beats Scissors '  + 'Player score is: ' + playerScore + ' Computer score is: ' + computerScore;
        
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        computerScore ++;
        result = 'Computer win! Paper beats Rock ' + 'Player score is: ' + playerScore + ' Computer score is: ' + computerScore;
        
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        computerScore ++;
        result = 'Computer win! Scissors beats Paper ' + 'Player score is: ' + playerScore + ' Computer score is: ' + computerScore;
        
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore ++;
        result = 'You win! Rock beats Scissors ' + 'Player score is: ' + playerScore + ' Computer score is: ' + computerScore;
        
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore ++;
        result = 'You win! Paper beats Rock ' + 'Player score is: ' + playerScore + ' Computer score is: ' + computerScore;
        
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore ++;
        result = 'You win! Scissors beats Paper ' + 'Player score is: ' + playerScore + ' Computer score is: ' + computerScore;
        }
    return result;
}

// Game loop - continues until the player or the computer reaches 5 points
function game() {
    for (let i = 0; i < 5; i++) {
        computerPlay();


        playerPlay();
        
        
        console.log(playRound(playerSelection, computerSelection));


    }
}



game();   