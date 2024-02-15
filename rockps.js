const tools = ['rock', 'paper', 'scissors'];


function getComputerChoice(){
    return tools[(Math.floor(Math.random() * tools.length))];
}
    console.log(getComputerChoice());

function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        console.log('It\'s a tie');
    } else {
        console.log('Try again.');
    }
}

    const playerSelection = getUserChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));