
/*
Initial game scores and execution.
*/
let playerScore = 0;
let computerScore = 0;
let roundCounter = 0;

playGame();

/*
A function to execute other functions as functional decomposition. If roundCounter = 5, then end the game and decide winner.
*/
function playGame(playerInput){

if(roundCounter = 5){
    endGame();
    return;
};

let computerInput = getComputerChoice();

decideWinner(playerInput, computerInput);
displayResults(playerInput, computerInput);

roundCounter++;
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
    }else if(playerSelection || computerSelection){
        winner = "no one";
    }else{
        winner = "a error has occurred";
    }
    
    return winner;
}















/*




Complete a round of Rock Paper Scissors.




Display results of previous round.

function displayResults(input){
    const content = document.getElementById('results');
    content.classList.add('content');
    content.textContent = "The winner is " + input + ".";
}




Display player and computer choices.

function displaySelections(playerInput,computerInput){
    const content = document.getElementById('selections');
    content.classList.add('content');
    content.textContent = "Player choose " + playerInput + " and Computer choose " + computerInput + "!";
}




Play a round, running the getComputerChoice, decideWinner, displaySelections and displayResults functions.

function playRound(playerInput){
    let computerInput = getComputerChoice();
    
    let results = decideWinner(playerInput, computerInput);

    displaySelections(playerInput, computerInput);
    
    displayResults(results);
};




Simulate 5 rounds of Rock Paper Scissors.

function game(){
    let playerScore = 0;
    let computerScore = 0; 
    
    for(i = 0; i < 5; i++){
        let computerInput = getComputerChoice();


        displaySelections(playerInput, computerInput);
        let results = decideWinner(playerInput, computerInput);
        displayResults(results);
        if(results === "player"){
            playerScore++;
            i++;
        }else if(results === "computer"){
            computerScore++;
            i++;
        }else{
            console.log('Error detected!')
        }
    };

}
*/