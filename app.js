const choice = document.querySelectorAll(".choices");
const score = document.getElementById("score");
const result = document.getElementById("result");
const reStart = document.getElementById("restart");
const modal = document.querySelector(".modal");

const scoreBoard = { player: 0, computer: 0 };

const play = (e) => {
  const playChoice = e.target.id;
  // console.log(playChoice);
  reStart.style.display = "inline-block";
  const computerChoice = getComputerChoice();
  const winner = getWinner(playChoice, computerChoice);
    showWinner(winner, computerChoice);
  // console.log(playChoice, computerChoice);
};

const getComputerChoice = () => {
  const rand = Math.random();
  if (rand < 0.34) {
    return "rock";
  } else if (rand <= 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
};

//Get Winner
function getWinner(p, c) {
  if (p === c) {
    return "draw";
  } else if (p === "rock") {
    if (c === "paper") {
      return "computer";
    } else {
      return "player";
    }
  } else if (p === "paper") {
    if (c === "scissors") {
      return "computer";
    } else {
      return "player";
    }
  } else if (p === "scissors") {
    if (c === "rock") {
      return "computer";
    } else {
      return "player";
    }
  }
}

function showWinner(winner, computerChoice) {
  if (winner === 'player') {
    // Inc player score
    scoreBoard.player++;
    // Show modal result
    result.innerHTML = `
      <h1 class="text-win">You Win</h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"></i>
      <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)}</strong></p>
    `;
  } else if (winner === 'computer') {
    // Inc computer score
    scoreBoard.computer++;
    // Show modal result
    result.innerHTML = `
      <h1 class="text-lose">You Lose</h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"></i>
      <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)}</strong></p>
    `;
  } else {
    result.innerHTML = `
      <h1>It's A Draw</h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"></i>
      <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)}</strong></p>
    `;
  }

  score.innerHTML = `
  <p>Player: ${scoreBoard.player}</p>
  <p>Computer: ${scoreBoard.computer}</p>
  `
  
  modal.style.display = 'block'
};

const reStartGame = () =>{
  scoreBoard.player = 0
  scoreBoard.computer = 0
  score.innerHTML = `
  <p>Player: 0</p>
  <p>Computer: 0</p>
  `
}

const clearModal = (e) =>{
  if(e.target === modal){
    modal.style.display = "none"
  }
}

//event listeners
choice.forEach((choice) => choice.addEventListener("click", play));
window.addEventListener("click",clearModal)
reStart.addEventListener("click", reStartGame)
