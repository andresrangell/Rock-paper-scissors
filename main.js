const choices = ['rock', 'paper', 'scissors'];
const winners = [];


/**
The function game() plays a round of rock, paper, scissors, and logs the results
 */
function game() {
	for (let i = 0; i <= 5; i++) {
		playRound(i);
	}
	logWins();
}

/**
 * The function plays a round of rock, paper, scissors, and logs the results.
 * @param round - the current round number
 */
function playRound(round) {
	const playerSelection = playerChoice();
	const computerSelection = computerChoice();
	const winner = checkWinner(playerSelection, computerSelection);
	winners.push(winner);
	logRound(playerSelection, computerSelection, winner, round)
}

/**
 * This function prompts the user to input their choice of rock, paper, or scissors. It then validates
 * the input and returns the input if it is valid.
 * @returns The player's choice of rock, paper, or scissors
 */
function playerChoice() {
	let input = prompt('Type Rock, Paper, or Scissors');
	while (input == null) {
		input = prompt('Type Rock, Paper, or Scissors')
	}
	input = input.toLowerCase();
	let check = validateInput(input);
	while (check == false) {
		input = prompt(
			'Type Rock, Paper, or Scissors. Spelling need to be exact, but capitalization doesnt matter'
		);
		while (input == null) {
			input = prompt('Type Rock, Paper, or Scissors')
		}
		input = input.toLowerCase();
		check = validateInput(input);
	}

	return input;
}

/**
 * The function computerChoice() returns a random choice from the choices array.
 * @returns The computerChoice function is returning a random choice from the choices array.
 */
function computerChoice() {
	return choices[Math.floor(Math.random() * choices.length)]
}

/**
 * It takes a string as an argument and returns true if the string is in the array choices.
 * @param choice - The user's choice.
 * @returns a boolean value.
 */
function validateInput(choice) {
	return (choices.includes(choice));
}

/**
 * If the player and computer choices are the same, it's a tie. Otherwise, if the player has chosen
 * rock and the computer has chosen scissors, or the player has chosen paper and the computer has
 * chosen rock, or the player has chosen scissors and the computer has chosen paper, then the player
 * wins. Otherwise, the computer wins
 * @param choiceP - The player's choice
 * @param choiceC - The computer's choice
 * @returns a string.
 */
function checkWinner(choiceP, choiceC) {
	if (choiceP === choiceC) {
		return 'Tie';
	} else if (
		(choiceP === 'rock' && choiceC === 'scissors') ||
		(choiceP === 'paper' && choiceC === 'rock') ||
		(choiceP === 'scissors' && choiceC === 'paper')
	) {
		return 'Player';
	} else {
		return 'Computer'
	}
}

/**
 * The function `logWins()` takes the array `winners` and filters it for the number of times the player
 * won, the computer won, and the number of ties.
 */
function logWins() {
	let playerWins = winners.filter((item) => item == 'Player').length;
	let computerWins = winners.filter((item) => item == 'Computer').length;
	let ties = winners.filter((item) => item == 'Tie').length
	console.log('Results:');
	console.log('Player Wins:', playerWins);
	console.log('Computer Wins:', computerWins);
	console.log('Ties:', ties)
}

/**
 * The function takes in four parameters, logs the round number, the player's choice, the computer's
 * choice, and the winner of the round
 * @param playerChoice - The player's choice
 * @param computerChoice - The computer's choice for the round
 * @param winner - The winner of the round
 * @param round - The current round number
 */
function logRound(playerChoice, computerChoice, winner, round) {
	console.log('Round', round)
	console.log('Player Choose:', playerChoice);
	console.log('Computer Choose:', computerChoice);
	console.log(winner, 'Won the round');
	console.log('---------------------------')
}

game();