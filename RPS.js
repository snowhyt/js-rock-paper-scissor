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
//just to get the output
console.log(getComputerChoice());

//getting player answer

function getPlayerChoice(playerMove){
 //let playerMove = prompt("Choose ROCK, PAPER, SCISSOR")
 //playerMove = playerMove.toUpperCase();
 
 
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
   
 }
}

//console.log("The answer is "+getPlayerChoice());

//comparison of answers; computer vs player
function playRound(playerMove,computerMove){
 

    
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

//scanner
function promptScanner(){
   let playerMove = prompt("Choose ROCK, PAPER, SCISSOR")
 
 playerMove = playerMove.toUpperCase();
 return playerMove;
 
}

const playerMove = getPlayerChoice();
const computerMove = getComputerChoice();

let scanner = promptScanner();


  getPlayerChoice(scanner);
  playRound(playerMove, computerMove);
