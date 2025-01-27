function getComputerChoice() {
    let n = Math.floor(Math.random() * 3)
    let choice
    if (n === 0) {
        choice = "rock"
    } else if (n === 1) {
        choice = "paper"
    } else if (n === 2) {
        choice = "scissors"
    }
    return choice
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()
    
    if (humanChoice === computerChoice) {
    
    } else if ((humanChoice === "rock" && computerChoice === "scissors") 
        || (humanChoice === "paper" && computerChoice === "rock")
        || (humanChoice === "scissors" && computerChoice === "paper")) {
            
            humanScore++;
    } else   {
        
        computerScore++;
    }
    score.textContent = `${computerScore} : ${humanScore}`;
}

let humanScore = 0
let computerScore = 0

const buttons = document.querySelectorAll("button")

const score = document.querySelector(".score")

const winner = document.querySelector(".winner")

buttons.forEach((button) => {
    button.addEventListener("click", function(){playGame(button.textContent, getComputerChoice())}) 
})

function getHumanChoice() {
    let choice = prompt("Please choose rock or paper or scissors")
    return choice
}

function playGame(humanChoice, computerChoice) {
    playRound(humanChoice, computerChoice)

    if (humanScore === 5) {
       winner.textContent =  "You won!" 
    } else if (computerScore === 5) {
        winner.textContent = "The Computer won!"
    }
    
}
