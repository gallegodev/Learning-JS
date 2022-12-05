var randonLoc = Math.floor(Math.random()*5);
var location1 = randonLoc;
var location2 = randonLoc + 1;
var location3 = randonLoc + 2;
var guess;
var hits = 0;
var numberOfGuesses = 0;
var isSunk = false;
var stats = "You took " + numberOfGuesses + " guesses to sink the battleship, " +
"which means your shooting accuracy was " + (3/numberOfGuesses);

while (isSunk == false) {
    guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number!");
    } else {
        numberOfGuesses = numberOfGuesses + 1;
    }
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
    

alert(stats);