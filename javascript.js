
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
function playRound() {
    const computerSelection = getComputerChoice();
    let winner;
    let i = 0;

    do{
        let playerSelection = prompt("Choose Rock Paper or Scissors!");

        if(playerSelection === "Rock" && computerSelection === "Scissors"){
            winner = "player";
            i = i++;
        }else if(playerSelection === "Paper" && computerSelection === "Rock"){
            winner = "player";
            i = i++;
        }else if(playerSelection === "Scissors" && computerSelection === "Paper"){
            winner = "player";
            i = i++;
        }else if(computerSelection === "Rock" && playerSelection === "Scissors"){
            winner = "computer";
            i = i++;
        }else if(computerSelection === "Paper" && playerSelection === "Rock"){
            winner = "computer";
            i = i++;
        }else if(computerSelection === "Scissors" && playerSelection === "Paper"){
            winner = "computer";
            i = i++;
        }else if(playerSelection === "Paper" || playerSelection === "Paper" || playerSelection === "Scissors"){
            winner = "no one";
            i = i++;
        }else{
            console.log("Error! Please correctly input Rock Paper or Scissors!")
        }
    }while(i < 1);

    console.log("Player was " + playerSelection + " and Computer was " + computerSelection);

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

        let outcome = playRound();

        if(outcome == "player"){
            console.log("Player won the round!");
            playerScore = playerScore++;
            i = i++;
        }else if(outcome == "computer"){
            console.log("Computer won the round!");
            computerScore = computerScore++;
            i = i++;
        }else{
            console.log("It was a tie.")
            i = i++;
        }
    };

    console.log("It's the end of the game.");

    if(playerScore > computerScore){
        console.log("Player won with " + playerScore + "points!");
    }else if(computerScore > playerScore){
        console.log("Computer won with " + computerScore + "points!");
    }else{
        console.log("Player and Computer tied.");
    }

}
