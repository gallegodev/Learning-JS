var location1 = 3;
var location2 = 4;
var location3 = 5;
var guess;
var hits = 0;
var numberOfGuesses = 0;
var isSunk = false;
var stats = "You took " + numberOfGuesses + " guesses to sink the battleship, " +
"which means your shooting accuracy was " + (numberOfGuesses);

while (isSunk == false) {
    guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number!");
    } else {
        numberOfGuesses = numberOfGuesses + 1;
        if (guess == location1 || guess == location2 || guess == location3) {
            hits = hits + 1;
            alert("Hi!")
        }else{
            alert("Miss!")
        }

            if (hits == 3) {
                isSunk = true;
                alert("You sank my battleship!");
            }
        }
    }

alert(stats);