//variable 
let computerScore = 0;
let playerScore = 0;
//scanner
function promptScanner(){
  let playerMove = prompt("Choose ROCK, PAPER, SCISSOR")
playerMove = playerMove.toUpperCase();
return playerMove;
}


//Computer answer

function getComputerChoice() {
  // Tab to edit
  let randomNum = Math.random();
  let compMove;
  
  
  //chooses rock paper scissors
  
  if(randomNum >= 0 && randomNum <= 0.3333 ){
  compMove = "ROCK";
  console.log("COMPUTER: "+compMove);
  return compMove;
  
  } 
  else if(randomNum > 0.3333 && randomNum <= 0.6666 ){
    compMove = "PAPER";
    console.log("COMPUTER: "+compMove);
 
    return compMove ;
  } 
  else if(randomNum > 0.6666 && randomNum <= 0.9999 ){
     compMove = "SCISSOR"
    console.log("COMPUTER: "+compMove);
 
    return compMove;
    
  } 
  
}


//getting player answer

function getPlayerChoice(){
 //let playerMove = prompt("Choose ROCK, PAPER, SCISSOR")
 //playerMove = playerMove.toUpperCase();
 
 let state= true;
 let playerMove;
 
 while(state){
   playerMove = promptScanner();
 if (playerMove === "ROCK"){
  console.log("PLAYER: "+playerMove);
   return playerMove;
 } 
  else if (playerMove === "PAPER"){
  console.log("PLAYER: "+playerMove);

   return playerMove;
 } 
else if (playerMove === "SCISSOR") {
  console.log("PLAYER: "+playerMove);

   return playerMove;
 }
 else{
  console.log("PLAYER: "+playerMove+" wrong input.");
   alert("The word input "+playerMove+" is not valid. Please try again.");

   
 }}
}

//console.log("The answer is "+getPlayerChoice());

//comparison of answers; computer vs player

function playRound(playerMove,computerMove){
  
  while(playerScore <= 4 && computerScore <=4){
  getPlayerChoice();
  if(playerMove === "ROCK" && computerMove === "SCISSOR"){
    playerScore++;
    console.log("RESULT: PLAYER WON ("+playerScore+" points.)");
    alert("PLAYER WON ("+playerScore+" points.)");
    
  } 
   else if (playerMove === "PAPER" && computerMove === "ROCK") {  
    playerScore++;
    console.log("RESULT: PLAYER WON ("+playerScore+" points.)");
    alert("PLAYER WON ("+playerScore+" points.)");
   


   }
    else if (playerMove === "SCISSOR" && computerMove === "PAPER") {
    playerScore++;
    console.log("RESULT: PLAYER WON ("+playerScore+" points.)"); 
      alert("PLAYER WON ("+playerScore+" points.)");
    


    }
    //add draw MATCH
    else if (playerMove === computerMove) {
      console.log("RESULT: DRAW MATCH ("+computerScore+" points.)");
      alert("DRAW MATCH("+computerScore+" points.)");
     
      
    }
    else{
      computerScore = computerScore +1;
    console.log("RESULT: COMPUTER WON ("+computerScore+" points.)");
         alert("COMPUTER WON("+computerScore+" points.)");
         

    }
  }
    checkGameStatus();
  
}

  //variable 
  const playerMove = getPlayerChoice();
  const computerMove = getComputerChoice();
//fix playRound mot define


    playRound(playerMove, computerMove);

function checkGameStatus(){

  if(playerScore === 5){
    console.log("Player won!");
    alert("You Won!");
  }
  if(computerScore === 5){
    console.log("Computer won!");
    alert("Computer Won!");
  }

}



