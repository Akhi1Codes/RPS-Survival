let playes=['rock','paper','scissors'];
let playerOutput = 'Rock';
let playerSelection = playerOutput.toLowerCase();

function computerPlay(){
 computerSelection = Math.floor(Math.random()*playes.length);
 console.log('computer selects '+playes[computerSelection])
 console.log('player selects '+playerSelection);
}

function gamePlay(playerSelection,computerSelection){
if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
        console.log('You win');
    } else {
        console.log('computer wins')
    }
}
if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
        console.log('You win');
    } else 
        console.log('computer wins')
}
if (playerSelection === "paper") {
    if (computerSelection === "rock") {
        console.log('You win');
    } else 
        console.log('computer wins')
}
}


computerPlay()
gamePlay()