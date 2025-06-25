let player = document.getElementById('playerDisplay');
let computer = document.getElementById('computerDisplay');
let resultDisplay = document.getElementById('resultDisplay');

const choices = ['rock', 'paper', 'scissors'];

function playGame(playerChoice){
    player.textContent = 'PLAYER: ';
    computer.textContent = 'COMPUTER: ';
    resultDisplay.textContent = 'RESULT: ';
    const computerChoice = choices[Math.floor(Math.random()*3)];
    if(playerChoice === computerChoice) result = "IT'S A TIE";
    else{
        switch(playerChoice){
            case 'rock': 
                result = (computerChoice === 'paper') ? 'YOU LOSE':'YOU WIN';
                break ;
            case 'paper': 
                result = (computerChoice === 'scissors') ? 'YOU LOSE':'YOU WIN';
                break ;
            case 'scissors': 
                result = (computerChoice === 'rock') ? 'YOU LOSE':'YOU WIN';
                break ;
        }
    }
    if(result === 'YOU WIN'){
        document.body.style.backgroundColor = 'green';
    }
    else if(result === 'YOU LOSE'){
        document.body.style.backgroundColor = 'RED';
    }
    else{
        document.body.style.backgroundColor = 'black';
    }
    player.textContent += playerChoice;
    computer.textContent += computerChoice;
    resultDisplay.textContent += result+'!';
}