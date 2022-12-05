var location1 = 3;
var location2 = 4;
var location3 = 5;
var guess;
var hits = 0;
var numberOfGuesses = 0;
var isSunk = false;

while (isSunk == false){
    guess = prompt("Ready, aim,fire! (enter anumber from 0-6):");
    
    if (guess < 0 ||  guess > 6){
    alert("Player please enter a valid number");
    } else {
        guess = guess + 1;
    }

    if(guess = 3){
        isSunk == true;
        alert("You sank my batleship")
    }
}