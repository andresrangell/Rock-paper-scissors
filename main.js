const choices = ['rock', 'paper', 'scissors']

function game() {
    playRound();
}

function playRound(){
    const playerSelection = playerChoice;
    const computerSelection = computerChoice;
}

function playerChoice(){
    let input = prompt('Type Rock, Paper, or Scissors');

function computerChoice(){
    return choices[Math.floor(Math.random()*choices.length)]
}


game();










// let playerScore = 0;
// let computerScore = 0;

// let playerSelection = playerPlay();
// let computerSelection = computerPlay();

// // Generates the computer's choice ramdomly between rock, paper and scissors
// function computerPlay() {
//     let computerChoice = Math.floor(Math.random() * 3);

//     if (computerChoice == 0) {
//         computerChoice = 'rock';
//     }  else if (computerChoice == 1) {
//         computerChoice = 'paper';
//     } else {
//         computerChoice = 'scissors';
//     }

//     return computerChoice;
// }




// // Obtains the player's choice
// function playerPlay() {
//     playerChoice = prompt('Type an option:  ["Rock", "Paper" or "Scissors"]').toLowerCase();
    

//     return playerChoice;
// }



// // Evaluates the winner of the round
// function playRound(playerSelection, computerSelection) {
//     if (computerSelection === playerSelection) {
//         computerScore ++;
//         playerScore ++;
//         return 'It\'s a tie! ' + 'Player score is: ' + playerScore + ' Computer score is: ' + computerScore;
        
//     } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
//         computerScore ++;
//         return 'Computer win! Rock beats Scissors '  + 'Player score is: ' + playerScore + ' Computer score is: ' + computerScore;
        
//     } else if (computerSelection === 'paper' && playerSelection === 'rock') {
//         computerScore ++;
//         return 'Computer win! Paper beats Rock ' + 'Player score is: ' + playerScore + ' Computer score is: ' + computerScore;
        
//     } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
//         computerScore ++;
//         return 'Computer win! Scissors beats Paper ' + 'Player score is: ' + playerScore + ' Computer score is: ' + computerScore;
        
//     } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
//         playerScore ++;
//         return 'You win! Rock beats Scissors ' + 'Player score is: ' + playerScore + ' Computer score is: ' + computerScore;
        
//     } else if (playerSelection === 'paper' && computerSelection === 'rock') {
//         playerScore ++;
//         return 'You win! Paper beats Rock ' + 'Player score is: ' + playerScore + ' Computer score is: ' + computerScore;
        
//     } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
//         playerScore ++;
//         return 'You win! Scissors beats Paper ' + 'Player score is: ' + playerScore + ' Computer score is: ' + computerScore;
//         }
// }

// // console.log(playRound(playerSelection, computerSelection));



// // Game loop - continues until the player or the computer reaches 5 points
// function game() {
//     for (let i = 0; i < 5; i++) {

//         playerPlay();
//         console.log('The player choose: ' + playerSelection);
        
//         computerPlay();
//         console.log('The CPU choose: ' + computerSelection);

//         console.log(playRound(playerSelection, computerSelection));


//     }
// }



// game();   