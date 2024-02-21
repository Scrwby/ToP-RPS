
const tools = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
    return tools[(Math.floor(Math.random() * tools.length))];
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection){
        return "It's a tie!";
    }


    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ){ 
        return 'Player Wins!'
    };


        return 'Computer Wins';
    
    }
    
    
    const playerSelection = 'rock';
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    