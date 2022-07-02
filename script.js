let playes=['rock','paper','scissors'];
let playerOutput = 'paper';
let playerSelection = playerOutput.toLowerCase();

function computerPlay(){
let computerPlay = Math.floor(Math.random()*playes.length);
 computerSelection = (playes[computerPlay]);
 console.log('computer selects '+computerSelection);
 console.log('player selects '+playerSelection);
}

function gameRules(playerSelection,computerSelection){
if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock')) 
    {
        console.log('You win')
    }
    else if(playerSelection === computerSelection){
            console.log('tie')
    }
    else {
        console.log('Computer wins')
    }

}


computerPlay();
gameRules(playerSelection,computerSelection);