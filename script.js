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

function getHumanChoice() {
    let choice = prompt("Please choose rock or paper or scissors")
    return choice
}

function playGame() {
    let humanScore = 0
    let computerScore = 0
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase()
        
        if (humanChoice === computerChoice) {
            console.log("It's a tie!")
        } else if ((humanChoice === "rock" && computerChoice === "scissors") 
            || (humanChoice === "paper" && computerChoice === "rock")
            || (humanChoice === "scissors" && computerChoice === "paper")) {
                console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
                humanScore++;
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            computerScore++;
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log(`You are the winner! You won ${humanScore}/5 games.`)
    } else if (humanScore < computerScore) {
        console.log(`You are the loser! The computer won ${computerScore}/5 games.`)
    } else {
        console.log(`You tied with the computer!`)
    }
}

playGame()

