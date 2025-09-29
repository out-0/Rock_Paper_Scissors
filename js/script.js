const choices = document.querySelectorAll(".choice");

// Lisen to the click for each choice and 
// change the text to "clicked" for 2 seconds
choices.forEach(function(choice) {
	choice.addEventListener("click", function() {
		const originalText = choice.textContent;
		const userChoice = this.dataset.choice;
		const computerChoice = getComputerChoice();
		const result = playRound(userChoice, computerChoice);
		// Display the result in an alert
		alert(result);
		choice.textContent = "clicked";
		setTimeout(function() {
			choice.textContent = originalText;
		}, 2000);
	})
})

// Get the computer choice
function getComputerChoice() {
	const choices = ["rock", "paper", "scissors"];
	const randomIndex = Math.floor(Math.random() * 3);
	return (choices[randomIndex]);
}

// Game Round
function playRound(userChoice, computerChoice) {
	
	const winAgainst = {
		rock: "scissors",
		paper: "rock",
		scissors: "paper"
	};
	
	if (userChoice == computerChoice)
		return "It's a Draw!";
	if (winAgainst[userChoice] == computerChoice)
		return `You Win! ${userChoice} beats ${computerChoice}`;
	return `You Lose! ${computerChoice} beats ${userChoice}`;
}