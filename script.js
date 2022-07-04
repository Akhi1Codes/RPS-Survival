let playerscore = 0;
let computerscore = 0;
const rockbtn = document.getElementById('rock');
const paperbtn = document.getElementById('paper');
const scissorsbtn = document.getElementById('scissors');
const playerweapon = document.getElementById('player1');
const score = document.getElementById('mainresult');
const wepnContr = document.getElementById('weapon_container');
const restartbtn = document.getElementById('restart_button');
const finalresults = document.getElementById('subtext');

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
const computerweapon = document.getElementById('computer1');
computerSelection = (playes[computerPlay]);
computerweapon.innerText = computerSelection;
gameRules(playerSelection,computerSelection);
}

function gameRules(playerSelection,computerSelection){

const playerchar = document.getElementById ('ply_char');
const compchar = document.getElementById ('cmp_char');

if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock')) 
    {
        score.innerText = "YOU WIN"
        playerscore++;
        compchar.classList.add("hit");
        setTimeout(()=> {compchar.classList.remove("hit")},200)
        console.log(playerscore);
    }
    else if(playerSelection === computerSelection){
        score.innerText = "TIE"
    }
    else {
        score.innerText = "YOU LOSE"
        computerscore++;
        playerchar.classList.add("hit");
        setTimeout(()=> {playerchar.classList.remove("hit")},200)
        console.log(computerscore);
    }
    let pscore = playerscore;
    let cscore = computerscore;
    health(pscore,cscore)
    gameEnd(pscore,cscore)
}

function health(pscore,cscore){
    const phealth = document.getElementById('playerh');
    const phealth1 = document.getElementById('playerh1');
    const phealth2 = document.getElementById('playerh2');
    const phealth3 = document.getElementById('playerh3');
    const phealth4 = document.getElementById('playerh4');
    const phealth5 = document.getElementById('playerh5');
    const chealth = document.getElementById('computerh');
    const chealth1 = document.getElementById('computerh1');
    const chealth2 = document.getElementById('computerh2');
    const chealth3 = document.getElementById('computerh3');
    const chealth4 = document.getElementById('computerh4');
    const chealth5 = document.getElementById('computerh5');

    if(pscore == 1){
        chealth1.style.display = "none";
    }
    else if(pscore == 2){
        chealth2.style.display = "none";
    }
    else if(pscore == 3){
        chealth3.style.display = "none";
    }
    else if(pscore == 4){
        chealth4.style.display = "none";
    }
    else if(pscore == 5){
        chealth5.style.display = "none";
        chealth.style.display = "none"
    }

    if(cscore == 1){
        phealth1.style.display = "none";
    }
    else if(cscore == 2){
        phealth2.style.display = "none";
    }
    else if(cscore == 3){
        phealth3.style.display = "none";
    }
    else if(cscore == 4){
        phealth4.style.display = "none";
    }
    else if(cscore == 5){
        phealth5.style.display = "none";
        phealth.style.display = "none"
    }
}

function gameEnd(pscore,cscore){
    if(pscore == 5 || cscore == 5){
        wepnContr.style.display = "none"
        restartbtn.style.display = "block"
    }
    if(pscore == 5){
        finalresults.innerText = "VICTORY"
    }
    if(cscore == 5){
        finalresults.innerText = "A Bitter defeat TRY AGAIN!!!"
    }
}
 function gameRestart(){
    location.reload();
 }
