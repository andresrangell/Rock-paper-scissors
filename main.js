// //A function that will randomly return either 'Rock', 'Paper' or 'Scisors' as the computer choice
function computerPlay() {
    let cpuChoice = Math.floor(Math.random() * 3);

    if (cpuChoice == 0) {
        cpuChoice = 'rock';
    }  else if (cpuChoice == 1) {
        cpuChoice = 'paper';
    } else {
        cpuChoice = 'scissors';
    }
    console.log('The CPU choose: ' + cpuChoice)

        return cpuChoice;
}


function playerPlay() {
    playerChoice = prompt('Type an option: . ["Rock", "Paper" or "Scissors"]').toLowerCase();
    
    return playerChoice;
}


function playRound(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        return 'It\'s a tie!';
        
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        return 'You Lose! Rock beats Scissors';
        
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        return 'You Lose! Paper beats Rock';
        
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        return 'You Lose! Scissors beats Paper'
        
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You Win! Rock beats Scissors'
        
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You Win! Paper beats Rock'
        
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You Win! Scissors beats Paper'
        }
}


const playerSelection = playerPlay();
console.log('The player choose: ' + playerSelection);
const computerSelection = computerPlay();


console.log(playRound(playerSelection, computerSelection));


