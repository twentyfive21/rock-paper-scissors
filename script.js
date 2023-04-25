const options = ["rock", "paper", "scissors"];

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "Tie";
    }
    else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock") 
    ){
        return "Player";
    }
    else{
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "Tie"){
        return "Its a Tie!"
    }
    else if(result == "Player"){
        return `Yay you won this round! ${playerSelection} beats ${computerSelection}`
    }
    else{
        return `You Lost eek! ${computerSelection} beats ${playerSelection}`
    }
}
function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("rock paper scissors");
        if(choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}
function game () {
    for (let i = 1; i < 6; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    if (i < 5) {
    console.log(`Round ${i}/5 on to the next round!`);
    } else if (i = 6){
        console.log("Game Over! Thanks for playing! :)");
    } 
    }
}
 game();
