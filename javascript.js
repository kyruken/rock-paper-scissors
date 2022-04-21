
function computerPlays () {

    let choice = getRandomInt(3);

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

    if (playerSelection === "rock" && computerPlays === "rock") {
      return "Tie!";
    }
    if (playerSelection === "rock" && computerPlays === "paper") {
      return "You lose";
    }
    if (playerSelection === "rock" && computerPlays === "scissors") {
      return "You win!";
    }

    if (playerSelection === "paper" && computerPlays === "rock") {
        return "You win!";
      }
    if (playerSelection === "paper" && computerPlays === "paper") {
        return "Tie!";
      }
    if (playerSelection === "paper" && computerPlays === "scissors") {
        return "You lose";
      }

    if (playerSelection === "scissors" && computerPlays === "rock") {
        return "You lose";
      }
    if (playerSelection === "scissors" && computerPlays === "paper") {
        return "You win!";
      }
    if (playerSelection === "scissors" && computerPlays === "scissors") {
        return "Tie!";
      }



}

function game () {
    for (let rounds = 0; rounds < 5; rounds++) {
        console.log(playRound());
    }
}