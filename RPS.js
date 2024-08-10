//Computer answer

function getComputerChoice() {
  // Tab to edit
  let randomNum = Math.random();
  let compMove;
  
  
  //chooses rock paper scissors
  
  if(randomNum >= 0 && randomNum <= 0.3333 ){
  return compMove = "rock";
  } 
  else if(randomNum > 0.3333 && randomNum <= 0.6666 ){
  return compMove = "paper";
  } 
  else if(randomNum > 0.6666 && randomNum <= 0.9999 ){
  return compMove = "scissor";
  } 
  
}
//just to get the output
//console.log(getComputerChoice());

//getting player answer

function getPlayerChoice(){
 let count = true;
 while(count){


 let playerMove = prompt("Choose ROCK, PAPER, SCISSOR")
 
 playerMove = playerMove.toUpperCase();
 
 
 if (playerMove === "ROCK"){
   return playerMove;
 } 
  else if (playerMove === "PAPER"){
   return playerMove;
 } 
else if (playerMove === "SCISSOR") {
   return playerMove;
 }
 else{
   count = true;
   alert("The word input "+playerMove+" is not valid. Please try again.");
   
 }
}

}
//console.log("The answer is "+getPlayerChoice());

//comparison of answers; computer vs player
function playRound(playerMove,computerMove){
  let playerScore;
  let computerScore;
  
  for(let round = 0; round < 5; round++){
    
  if(playerMove === "ROCK" && computerMove === "SCISSOR"){
    return alert
  } 
   else if (playerMove === "PAPER" && computerMove === "ROCK") {
  
   }
    else if (playerMove === "SCISSOR" && computerMove === "PAPER") {
   
    }
    else{
      
    }
  }
  
}

const playerMove = getPlayerChoice();
const computerMove = getComputerChoice();

playRound(playerMove, computerMove);
