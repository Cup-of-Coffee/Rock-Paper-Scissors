
/*
Initial game scores and execution.
*/
let playerScore = 0;
let computerScore = 0;
let roundCounter = 0;

/*
A function to execute other functions as functional decomposition. If roundCounter = 5, then end the game and decide winner.
*/
function playGame(playerInput){

if(roundCounter >= 5){
    endGame();
    return;
};

roundCounter++;

let computerInput = getComputerChoice();

let winnerOfRound = decideWinner(playerInput, computerInput);
displayResults(playerInput, computerInput, winnerOfRound);
}

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
Decide winner of the current round by comparing the two inputs against a if statement.
*/
function decideWinner(playerInput,computerInput){
    let winner;

    if(playerInput === "Rock" && computerInput === "Scissors"){
        winner = "player";
        playerScore++;
    }else if(playerInput === "Paper" && computerInput === "Rock"){
        winner = "player";
        playerScore++;
    }else if(playerInput === "Scissors" && computerInput === "Paper"){
        winner = "player";
        playerScore++;
    }else if(playerInput === "Scissors" && computerInput === "Rock"){
        winner = "computer";
        computerScore++;
    }else if(playerInput === "Rock" && computerInput === "Paper"){
        winner = "computer";
        computerScore++;
    }else if(playerInput === "Paper" && computerInput === "Scissors"){
        winner = "computer";
        computerScore++;
    }else if(playerInput || computerInput){
        winner = "no one";
    }else{
        winner = "a error has occurred";
    }
    
    return winner;
}

/*
Update divs with player and computer choices, the winner of the round, the current scores and current round.
*/
function displayResults(playerInput, computerInput, winnerOfRound){
    const roundCount = document.getElementById('roundCount');
    roundCount.classList.add('roundCount');
    roundCount.textContent = "Round " + roundCounter;

    const playerDisplayScore = document.getElementById('playerDisplayScore');
    playerDisplayScore.classList.add('playerDisplayScore');
    playerDisplayScore.textContent = "Player's Score: " + playerScore;

    const computerDisplayScore = document.getElementById('computerDisplayScore');
    computerDisplayScore.classList.add('computerDisplayScore');
    computerDisplayScore.textContent = "Computer's Score: " + computerScore;

    const inputs = document.getElementById('inputs');
    inputs.classList.add('inputs');
    inputs.textContent = "You picked " + playerInput + ", and the computer picked " + computerInput + ".";

    const results = document.getElementById('results');
    results.classList.add('results');
    results.textContent = "The winner is of the round is " + winnerOfRound + ".";
}

/*
End the game with a alert displaying the final winner.
*/
function endGame(){
    let winner;

    if(playerScore > computerScore){
        winner = "you";
    }else if(playerScore < computerScore){
        winner = "the computer";
    }else{
        winner = "is no one, you both tied"
    }

    alert("Game Over! The winner of the game is " + winner + "!");
}

/*
Ideas to polish game:
@ Add the ability to restart after the game is finished.
@ Add CSS to make it look prettier.
@ ...
*/
