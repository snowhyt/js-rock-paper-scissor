//Computer answer

function getComputerChoice() {
  // Tab to edit
  let randomNum = Math.random();
  let compMove;
  
  
  //chooses rock paper scissors
  
  if(randomNum >= 0 && randomNum <= 0.3333 ){
  return compMove = "ROCK";
  } 
  else if(randomNum > 0.3333 && randomNum <= 0.6666 ){
  return compMove = "PAPER";
  } 
  else if(randomNum > 0.6666 && randomNum <= 0.9999 ){
  return compMove = "SCISSOR";
  } 
  
}
//just to get the output
console.log(getComputerChoice());

//getting player answer

function getPlayerChoice(){


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
   alert("The word input "+playerMove+" is not valid. Please try again.");
   
 }
}

//console.log("The answer is "+getPlayerChoice());

//comparison of answers; computer vs player
function playRound(playerMove,computerMove){
  console.log(playerMove);

    
  if(playerMove === "ROCK" && computerMove === "SCISSOR"){
    alert("PLAYER WON");
  } 
   else if (playerMove === "PAPER" && computerMove === "ROCK") {
      alert("PLAYER WON");

   }
    else if (playerMove === "SCISSOR" && computerMove === "PAPER") {
       alert("PLAYER WON");

    }
    else{
         alert("COMPUTER WON");

    }
  
  
}


function promptScanner(){
   let playerMove = prompt("Choose ROCK, PAPER, SCISSOR")
 
 playerMove = playerMove.toUpperCase();
 
}

const playerMove = getPlayerChoice();
const computerMove = getComputerChoice();



let comScore = 0;
let playerScore = 0;


for(let round = 0; round < 5; round++){
playRound(playerMove, computerMove);
playerMove = getPlayerChoice();
}