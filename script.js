// Variables
let computerScore = 0;
let playerScore = 0;
const roundsToWin = 3;  // Fixed the variable name to `roundsToWin`
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultDiv = document.getElementById('result');
const scoreDiv = document.getElementById('score');

// Choices
const choices = ["rock", "paper", "scissors"];

// Add event listeners
rockButton.addEventListener('click', () => playGame("rock"));
paperButton.addEventListener('click', () => playGame("paper"));
scissorsButton.addEventListener('click', () => playGame("scissors"));

// Function to check for the best of 5 winner
function checkForWinner() {
  if (playerScore === roundsToWin) {
    scoreDiv.textContent = `Congratulations! You won the best of 5! Final Score: Player ${playerScore} - Computer ${computerScore}`;
    setTimeout(resetGame, 2000);
  } else if (computerScore === roundsToWin) {
    scoreDiv.textContent = `Sorry, the Computer won the best of 5. Final Score: Player ${playerScore} - Computer ${computerScore}`;
    setTimeout(resetGame, 2000);
  }
}

// Function to reset the game after a winner is determined
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  scoreDiv.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
  resultDiv.textContent = `Pick your poison!!`
}

// Main game logic
function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  const winner = determineWinner(playerChoice, computerChoice);

  resultDiv.innerHTML = `
    You chose: ${playerChoice}<br>
    Computer chose: ${computerChoice}<br>
    <strong>${winner}</strong>
  `;

  // Display the current score
  scoreDiv.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;

  // Check if anyone has won the best of 5
  checkForWinner();
}

// Function to determine the round winner
function determineWinner(player, computer) {
  if (player === computer) {
    return "It's a draw!";
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    playerScore++;
    return "You Win!";
  } else {
    computerScore++;
    return "Computer Wins!";
  }
}
