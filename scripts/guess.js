let secret = Math.floor(Math.random() * 10 + 1);
console.log(secret);
let guesses = 0;
let guessCount = 3;
let playerGuess;
let gameOver = false;

while (guesses < guessCount && !gameOver) {
	playerGuess = Number(prompt("Pick a number between 1 and 10"));

	if (playerGuess === secret) {
		// player wins
		gameOver = true;
		alert("You won!!");
	} else {
		if (playerGuess < secret) {
			alert("Too low!");
		} else {
			alert("Too high!");
		}
	}

	// guesses = guesses + 1;
	// guesses += 1;
	guesses++;
	// ++guesses;
}

if (!gameOver) {
	alert("You lose!");
}
