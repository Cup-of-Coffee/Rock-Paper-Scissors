
/*
Use Math.random to generate one of three choices for computer opponent.
*/
function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
    let result;

    if(computerChoice == 1){
        result = "Rock";
    }else if(computerChoice == 2){
        result = "Paper";
    }else{
        result = "Scissors";
    }

    return result;
}

/*
Go through a round of Rock Paper Scissors.
*/
function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    let winner;

    console.log("Player was " + playerSelection + " and Computer was " + computerSelection);

    if(playerSelection === "Rock" && computerSelection === "Scissors"){
        winner = "player";
    }else if(playerSelection === "Paper" && computerSelection === "Rock"){
        winner = "player";
    }else if(playerSelection === "Scissors" && computerSelection === "Paper"){
        winner = "player";
    }else if(computerSelection === "Rock" && playerSelection === "Scissors"){
        winner = "computer";
    }else if(computerSelection === "Paper" && playerSelection === "Rock"){
        winner = "computer";
    }else if(computerSelection === "Scissors" && playerSelection === "Paper"){
        winner = "computer";
    }else{
        winner = "no one";
    }

    return winner;
}

/*
Run through five rounds of Rock Paper and Scissors, calculating the score to decide if the Player was a winner, loser or tied.
*/
function game(){
    let playerScore;
    let computerScore;

    for (let i = 1; i < 6; i++){
        console.log("It's round " + i);

        let playerSelection = prompt("Choose Rock Paper or Scissors!");

        let outcome = playRound(playerSelection);

        if(outcome == "player"){
            playerScore = playerScore++;
            i = i++;
        }else if(outcome == "computer"){
            computerScore = computerScore++;
            i = i++;
        }else{
            console.log("It was a tie.")
            i = i++;
        }

    };


}
