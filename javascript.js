let playerPoints = 0, computerPoints = 0;

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => { button.addEventListener('click', () => {
  playRound(button.id, computerPlays());

  }); 
});


function game (playerPoint, computerPoint) {

  if(playerPoint > 0) {
    playerPoints += 1;
  }

  if(computerPoint > 0) {
    computerPoints += 1;
  }
 

  document.getElementById("player-score").textContent = playerPoints;
  document.getElementById("computer-score").textContent = computerPoints;
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

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toString();

  if (playerSelection === computerSelection) {
    return;
  }

  if (playerSelection === "rock" && computerSelection === "paper") {
    game(0, 1);
  }
  if (playerSelection === "rock" && computerSelection === "scissors") {
    game(1, 0);
  }

  if (playerSelection === "paper" && computerSelection === "scissors") {
    game(0, 1);
  }

  if (playerSelection === "paper" && computerSelection === "rock") {
    game(1, 0);
  }

  if (playerSelection === "scissors" && computerSelection === "rock") {
    game(0, 1);
  }

  if (playerSelection === "scissors" && computerSelection === "paper") {
    game(1, 0);
  }
}


