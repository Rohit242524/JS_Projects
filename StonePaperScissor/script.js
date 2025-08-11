const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");

let cpuScore = document.querySelector(".computer-score");
let userScore = document.querySelector(".user-score");

let scoreForUser = 0;
let scoreForCpu = 0;

function winnerCpu() {
  scoreForCpu++;
  cpuScore.innerText = `${scoreForCpu}`;
  document.querySelector(".result").innerText = `Cpu Wins`;
  document.querySelector(".result").style.backgroundColor = "red";
}
function winnerUser() {
  scoreForUser++;
  userScore.innerText = `${scoreForUser}`;
  document.querySelector(".result").innerText = `User Wins`;
  document.querySelector(".result").style.backgroundColor = "green";
}

function winningPattern(userChoice, cpuChoice) {
  if (userChoice === cpuChoice) {
    document.querySelector(".result").innerText = `Draw`;
    document.querySelector(".result").style.backgroundColor = "#0F0429";
  } else if (
    (userChoice === 1 && cpuChoice === 2) ||
    (userChoice === 2 && cpuChoice === 3) ||
    (userChoice === 3 && cpuChoice === 1)
  ) {
    winnerCpu();
  } else {
    winnerUser();
  }
}

rock.addEventListener("click", (e) => {
  let userChoice = 1;
  let cpuChoice = Math.floor(Math.random() * 3) + 1;
  winningPattern(userChoice, cpuChoice);
});

paper.addEventListener("click", (e) => {
  let userChoice = 2;
  let cpuChoice = Math.floor(Math.random() * 3) + 1;
  winningPattern(userChoice, cpuChoice);
});

scissor.addEventListener("click", (e) => {
  let userChoice = 3;
  let cpuChoice = Math.floor(Math.random() * 3) + 1;
  winningPattern(userChoice, cpuChoice);
});
