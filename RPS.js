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
console.log(getComputerChoice());

//getting player answer

function getPlayerChoice(){
  
}
