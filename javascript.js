
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

    if(playerSelection === "Rock" && computerSelection === "Scissors"){
        winner = "player";
        playerScore++;
    }else if(playerSelection === "Paper" && computerSelection === "Rock"){
        winner = "player";
        playerScore++;
    }else if(playerSelection === "Scissors" && computerSelection === "Paper"){
        winner = "player";
        playerScore++;
    }else if(computerSelection === "Rock" && playerSelection === "Scissors"){
        winner = "computer";
        computerScore++;
    }else if(computerSelection === "Paper" && playerSelection === "Rock"){
        winner = "computer";
        computerScore++;
    }else if(computerSelection === "Scissors" && playerSelection === "Paper"){
        winner = "computer";
        computerScore++;
    }else if(playerSelection || computerSelection){
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
    const inputs = document.getElementById('results');
    inputs.classList.add('inputs');
    inputs.textContent = "You picked " + playerInput + ", and the computer picked " + computerInput + ".";

    const results = document.getElementById('results');
    content.classList.add('results');
    results.textContent = "The winner is " + winnerOfRound + ".";

    const playerDisplayScore = document.getElementById('playerDisplayScore');
    playerDisplayScore.classList.add('playerDisplayScore');
    playerDisplayScore.textContent = playerScore;

    const computerDisplayScore = document.getElementById('computerDisplayScore');
    computerDisplayScore.classList.add('computerDisplayScore');
    computerDisplayScore.textContent = computerScore;

    const roundCount = document.getElementById('roundCount');
    roundCount.classList.add('roundCount');
    roundCount.textContent = roundCounter;
}

/*
End the game with a alert displaying the final winner.
*/
function endGame(){
    let winner;

    if(playerScore > computerScore){
        winner = "you";
    }else if(playerSCore < computerScore){
        winner = "the computer";
    }else{
        winner = "is no one, you both tied"
    }

    alert("Game Over! The winner of the game is " + winner + "!");
}
