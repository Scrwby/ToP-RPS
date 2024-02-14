const tools = ['rock', 'paper', 'scissors'];


function getComputerChoice(){
    return tools[(Math.floor(Math.random() * tools.length))];
}
    // console.log(getComputerChoice());
    
function getUserChoice(){
    prompt('Please enter your choice');
}

   // getUserChoice();