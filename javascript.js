
let playerScore = 0;
let computerScore = 0;



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
Complete a round of Rock Paper Scissors.
*/
function decideWinner(playerSelection, computerSelection) {
    let winner;

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
    }else if(playerSelection === "Paper" || playerSelection === "Paper" || playerSelection === "Scissors"){
        winner = "no one";
    }else{
        winner = "error";
    }
    
    return winner;
}



/*
Display results of previous round.
*/
function displayResults(input){
    const results = document.querySelector('#results');

    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = input;

    results.appendChild(content);
}



/*
Display player and computer choices.
*/
function displaySelections(playerInput,computerInput){
    const selections = document.querySelector('#selections');

    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = "Player choose " + playerInput + " and Computer choose " + computerInput + "!";

    selections.appendChild(content);
}



/*
Run a game round, using the playRound, displaySelections and displayResults functions.
*/
function game(playerInput){
    let i = 0;

    for(i = 0; i < 5; i++){
        let computerInput = getComputerChoice();
        let results = playRound(playerInput, computerInput);
        displaySelections(playerInput, computerInput);
        displayResults(results);
        i++;
    };
}



















/*  First verison: Run through five rounds of Rock Paper and Scissors, calculating the score to decide if the Player was a winner, loser or tied.
function game(){
    let playerScore;
    let computerScore;

    for (let i = 1; i < 6; i++){
        console.log("It's round " + i);

        let playerSelection = prompt("Choose Rock Paper or Scissors!");

        let outcome = playRound(playerSelection);

        if(outcome == "player"){
            console.log("Player won the round!");
            playerScore = playerScore++;
            i = i++;
        }else if(outcome == "computer"){
            console.log("Computer won the round!");
            computerScore = computerScore++;
            i = i++;
        }else if(outcome == "no one"){
            console.log("It was a tie.")
            i = i++;
        }else if(outcome == "error"){
            console.log("Error! Please input Rock Paper or Scissors!")
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
*/
