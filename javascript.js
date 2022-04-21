//pseudo code for whole program

//for 5 rounds, call playRound
    //playRound(getPlayerSelection(), computerPlays)
        //getPlayerSelection prompts player to pick rock, paper, or scissors and
        //returns that choice

        //computerPlays returns rock, paper, or scissors at random

        //



function computerPlays () {
    //function computerPlays randomly picks Rock, Paper, or Scissors

    //pseudocode
    //let variable choice equal a number from 1-3
        //if number 0, return "rock"
        //if number 1, return "paper"
        //if number 2, return "scissors"

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
    //function prompts player for a selection
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
    // function playRound simulates a round of rock paper scissors
    // playRound takes in parameters playerSelection and computerSelection and compares
    // returns win or loss message'

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