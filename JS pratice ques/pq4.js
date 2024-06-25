//Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.

let gamenumber = 25;
let userNum = parseInt(prompt("Guess the game number"), 10);

while (userNum !== gamenumber) {
    userNum = parseInt(prompt("You entered the wrong number. Guess again"), 10);
} 

console.log("Congratulations, you entered the right number");

