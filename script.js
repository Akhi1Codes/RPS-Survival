const rockbtn = document.getElementById('rock');
const paperbtn = document.getElementById('paper');
const scissorsbtn = document.getElementById('scissors');
const playerweapon = document.getElementById('player1');
const computerweapon = document.getElementById('player2');

rockbtn.addEventListener( "click" ,function() {
    let result = computerPlay('rock');
    playerweapon.innerText = "rock"
})
paperbtn.addEventListener( "click" ,function() {
    let result = computerPlay('paper');
    playerweapon.innerText = "paper"
})
scissorsbtn.addEventListener( "click" ,function() {
    let result = computerPlay('scissors');
    playerweapon.innerText = "scissors"
})

function computerPlay(playerSelection){
let playes=['rock','paper','scissors'];
let computerPlay = Math.floor(Math.random()*playes.length);
 computerSelection = (playes[computerPlay]);
 console.log('computer selects '+computerSelection);
 console.log('player selects '+playerSelection);
 gameRules(playerSelection,computerSelection);
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

