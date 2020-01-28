var name="joe" // prompt("What is your name?");
var playerScore=0;
var computerScore=0;
var playerChoice;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const result = document.querySelector("#result");



rock.addEventListener("click", function(){
	playerChoice="ROCK";
	game();
});
paper.addEventListener("click", function(){
	playerChoice="PAPER";
	game();
});
scissors.addEventListener("click", function(){
	playerChoice="SCISSORS";
	game();
});

function game(RockPaperScissors) {


var computerChoice=computerPlay();


function computerPlay() {    
computerChoice = Math.random();
if (computerChoice <.34) {
computerChoice="ROCK";
} else if (computerChoice <=.67){
computerChoice="PAPER";
} else {
computerChoice="SCISSORS"
}
return computerChoice;
}


function RockPaperScissors (playerChoice, computerChoice) {

if (playerChoice == "ROCK" && computerChoice == "PAPER") {
computerScore++;
return "Paper beats Rock. You lose.";
} 
else if (playerChoice == "ROCK" && computerChoice == "SCISSORS") {
playerScore++;
return "Rock beats Scissors. You win!";
} 
else if (playerChoice == "PAPER" && computerChoice == "ROCK") {
playerScore++;
return "Paper beats Rock. You win!";
}
else if (playerChoice == "PAPER" && computerChoice == "SCISSORS") {
computerScore++;
return "Scissors beats Paper. You lose.";
}
else if (playerChoice == "SCISSORS" && computerChoice == "ROCK") {
computerScore++;
return "Rock beats Scissors. You lose.";
}
else if (playerChoice == "SCISSORS" && computerChoice == "PAPER") {
playerScore++;
return "Scissors beats Paper. You win!";
}
else {
return "Tie game";
}
}





//console.log("The player has selected: " + playerChoice);  
//console.log("The computer has selected: " + computerChoice);
//console.log("PLAYER: " + playerScore + " " + "CPU: " + computerScore);

alert(RockPaperScissors(playerChoice, computerChoice));
document.getElementById('result').innerHTML = "Player: " + playerScore + " CPU: " + computerScore;


}



	

 
