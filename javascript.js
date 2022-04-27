
function game () {
  let gameDecision = '';
  let playerScore = 0, computerScore = 0, tie = 0;
  // for (let rounds = 0; rounds < 5; rounds++) {
  //   gameDecision = playRound();
  //   if (gameDecision === "You win!") {
  //     playerScore += 1;
  //   }

  //   if (gameDecision === "You lose") {
  //     computerScore += 1;
  //   }

  //   if (gameDecision === "Tie!") {
  //     tie += 1;
  //   }
  }

  if (playerScore > computerScore) {
    console.log(`You win! Score is: Player: ${playerScore} - Computer: ${computerScore} - Ties: ${tie}`);
  }

  if (computerScore > playerScore) {
    console.log(`You lose. Score is: Player: ${playerScore} - Computer: ${computerScore} - Ties: ${tie}`);
  }

  if (playerScore === computerScore) {
    console.log(`Tie! Score is: Player: ${playerScore} - Computer: ${computerScore} - Ties: ${tie}`);
  }
}

function computerPlays () {

    let choice = Math.floor(Math.random() * 3);
    switch(choice) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
    }



}

function getPlayerSelection() {

    let playerSelect = prompt("Pick Rock, Paper, or Scissors");
    switch (playerSelect.toLowerCase()) {
        case "rock":
            return "rock";
        case "paper":
            return "scissors";
        case "scissors":
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {

    playerSelection = getPlayerSelection();
    computerSelection = computerPlays();

    if (playerSelection === "rock" && computerSelection === "rock") {
      return "Tie!";
    }
    if (playerSelection === "rock" && computerSelection === "paper") {
      return "You lose";
    }
    if (playerSelection === "rock" && computerSelection === "scissors") {
      return "You win!";
    }

    if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win!";
      }
    if (playerSelection === "paper" && computerSelection === "paper") {
        return "Tie!";
      }
    if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose";
      }

    if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose";
      }
    if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win!";
      }
    if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "Tie!";
      }



}
