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
 

  document.getElementById("player-score").innerHTML = playerPoints;
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
    console.log("lose");
  }

  if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("win");
  }

  if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("lose");
  }

  if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("win");
  }
}


