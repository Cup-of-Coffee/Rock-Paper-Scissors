
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
    const playerSelection = "Rock";
    const computerSelection = getComputerChoice();
    let outcome;

    console.log("Player was " + playerSelection + " and Computer was " + computerSelection);

    if(playerSelection === "Rock" && computerSelection === "Scissors"){
        console.log("You win!");
    }else if(playerSelection === "Paper" && computerSelection === "Rock"){
        console.log("You win!");
    }else if(playerSelection === "Scissors" && computerSelection === "Paper"){
        console.log("You win!");
    }else if(computerSelection === "Rock" && playerSelection === "Scissors"){
        console.log("You lose!");
    }else if(computerSelection === "Paper" && playerSelection === "Rock"){
        console.log("You lose!");
    }else if(computerSelection === "Scissors" && playerSelection === "Paper"){
        console.log("You lose!");
    }else{
        console.log("You tie!");
    }

    return outcome;
}

function game(){
    for (let i = 0; i < 5; i++){
        


    };
}
