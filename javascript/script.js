
// Set up the variable
let comScore = 0;
let playerScore = 0;
let playerSelection;

// Select DOM
const displayMy = document.querySelector("#playerscore");
const displayCom = document.querySelector("#computerscore")
const buttons = document.querySelectorAll(".btn-choice");
const reset = document.querySelector("#btn-reset")

// Display score to HTML
displayCom.textContent = `${comScore}`;
displayMy.textContent = `${playerScore}`;


function playerChoose(e) {
  playerSelection = this.id;
  console.log(playerSelection)
  game();
  displayCom.textContent = `${comScore}`;
  displayMy.textContent = `${playerScore}`;
}

// Generate ComChoice
function computerPlay () {
  let choice = ["rock", "paper", "scissors"];
  let com_pick = choice[Math.floor(Math.random() * 3)];
  return com_pick;
}

//Taking user choice and comchoice and determine who win
function playRound (playerSelection, computerSelection) {
  // coditional check who win
  if (playerSelection === computerSelection) {
    return "Draw!!!!!";
  }
  else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      comScore++;
      return "You Lose! Paper beats Rock";
    }
    else if (computerSelection === "scissors") {
      playerScore++;
      return "You Win! Rock beats Scissors"
    }
  } 
  else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      comScore++;
      return "You Lose! Scissors beats paper";
    }
    else if (computerSelection === "rock") {
      playerScore++;
      return "You Win! Paper beats Rock"
    }
  } 
  else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      comScore++
      return "You Lose! Rock beat Scissors";
    }
    else if (computerSelection === "paper") {
      playerScore++;
      return "You Win! Scissors beat Paper"
    }
  } 
}

// Game play 
function game() {
  if (playerScore == 5) {
    return alert("You win the game!!\nClick 'Reset' to play again!!!!!")
  } else if (comScore == 5) {
    return alert("Computer win the game!!!\nClick 'Reset' to play again!!!!!")
  }
  else {
    alert(playRound(playerSelection, computerPlay()));
  }
}

function clickReset() {
  playerScore = 0;
  comScore = 0;
  displayCom.textContent = `${comScore}`;
  displayMy.textContent = `${playerScore}`;
  alert("Game Reset!!!!")
}

// Add EventListener to the game when clicked 
buttons.forEach(button => button.addEventListener('click', playerChoose));

reset.addEventListener('click', clickReset);