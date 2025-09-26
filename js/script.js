// Randomly choice get a choice for computer
function getComputerChoice()
{
	let choice = Math.floor(Math.random() * 3 + 1);
	if (choice == 1)
		return("Rock".toLowerCase());
	else if (choice == 2)
		return("Paper".toLowerCase());
	else
		return("Scissors".toLowerCase());
}
// Get the human choice from prompt
function getHumanChoice()
{
	let choice = prompt("->Rock\n->Paper\n->Scissors\n\tEnter your choice\t");

	if (!choice)
		return (null);
	return (choice.toLowerCase());
}
// Choice the winner for round
function playRound(humanChoice, computerChoice)
{
	if (humanChoice == computerChoice)
	{
		console.log(`Draw, ${humanChoice} vs ${computerChoice}`);
		return;
	}
	const beats = {
		rock: "scissors",
		paper: "rock",
		scissors: "paper"
	};
	if (beats[humanChoice] == computerChoice)
	{
		console.log("You Win the Round! " + humanChoice + " beats " + computerChoice);
		return (1);
	}
	else
	{
		console.log(`You Lose the Round! You: ${humanChoice} VS He: ${computerChoice}`);
		return (2);
	}
}

// The main game function
function playGame()
{
	// Initial the scores
	let humanScore = 0;
	let computerScore = 0;
	let status;
	
	for (let i = 0; i < 5; i++)
	{
		// Get the choices for the two players
		let humanChoice = getHumanChoice();
		let computerChoice = getComputerChoice();

		status = playRound(humanChoice, computerChoice);
		if (status == 1)
			humanScore++;
		else if (status == 2)
			computerScore++;
	}
	humanScore > computerScore ? console.log("You Win the Game") : console.log("You Lose the Game");
	if (humanScore == computerScore)
		console.log("Its Draw Try Again");
	return;
}

playGame();