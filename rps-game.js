//create function with choice parameter for random computer choice
//use math random to generate a random whole number with 3 possibilities
//assign choice a value depending on random number drawn
//return choice

function getComputerChoice(choice){
    choice = Math.floor(Math.random() * 3);
    switch(choice) {
        case 0:
            choice = 'Rock';
            break;
        case 1:
            choice = 'Paper';
            break;
        case 2:
            choice = 'Scissors';
            break;
    }
    return choice;
}

/* playRound function outside of game
//create function to play game with two parameters: player selection and computer selection
//if player choice = computer choice then draw
//else if player beats computer then player wins
//lse computer wins
//return game result

function playRound(playerSelection, computerSelection){
    let result;
    if (playerSelection == computerSelection){
        result = 'Draw!';
    } else if (
        ((playerSelection == 'rock') && (computerSelection == 'scissors')) ||
        ((playerSelection == 'paper') && (computerSelection == 'rock')) ||
        ((playerSelection == 'scissors') && (computerSelection == 'paper'))
        ){
        result = 'You win!';
    } else {
        result = 'Better luck next time!';
    }
    return result;
}

let playerSelection = prompt('Rock, paper, or scissors?').toLowerCase();
let computerSelection = getComputerChoice().toLowerCase();

console.log(playerSelection, computerSelection);
console.log(playRound(playerSelection, computerSelection));
*/

//play game 5 times

function game(){

    let playerSelection = prompt('Rock, paper, or scissors?').toLowerCase();
    let computerSelection = getComputerChoice().toLowerCase();

    function playRound(playerSelection, computerSelection){
        let result;
        if (playerSelection == computerSelection){
            result = 'Draw!';
        } else if (
            ((playerSelection == 'rock') && (computerSelection == 'scissors')) ||
            ((playerSelection == 'paper') && (computerSelection == 'rock')) ||
            ((playerSelection == 'scissors') && (computerSelection == 'paper'))
            ){
            result = 'You win!';
        } else {
            result = 'Better luck next time!';
        }
        return result;
    }
    console.log(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));
}

game();
game();
game();
game();
game();