let winDisplay = document.querySelector("#windisplay");
let wordDisplay = document.querySelector("#worddisplay");
let guessDisplay = document.querySelector("#guessesremaining");
let lettersDisplay = document.querySelector("#guessedletters");
let winCount = 0;
let guessesRemaining = 12;
let wordsToPick = ["moon", "quasar", "galaxy", "satellite", "andromeda"];
let indexCount = 0;
let wordBlanks = [];
let guessesArray = [];
let guessed = false;

function makeWordBlanks() {

    wordBlanks = [];

    for (i = 0; i < wordsToPick[indexCount].length; i++) {
        wordBlanks.push("_");
    }
    wordDisplay.textContent = wordBlanks;
}

guessDisplay.textContent = guessesRemaining;

makeWordBlanks();

document.onkeyup = function (event) {

    let letterguessed = event.key;

    console.log(wordsToPick[indexCount].indexOf(letterguessed));


    if (letterguessed in guessesArray) {
        alert("you guessed that already!");
    }

    else if ((wordsToPick[indexCount].indexOf(letterguessed)) === -1) {
        guessesArray.push(letterguessed);
        lettersDisplay.innerHTML = guessesArray;
        guessesRemaining--;

    } else {
        for (i = 0; i < wordsToPick[indexCount].length; i++) {
            if (letterguessed === wordsToPick[indexCount][i]) {
                wordBlanks[i] = letterguessed;
            }
        }
        wordDisplay.textContent = wordBlanks;
        guessesRemaining--;
    }

    guessDisplay.textContent = guessesRemaining;


    if (wordBlanks.indexOf("_") === -1) {
        guessesRemaining = 12;
        indexCount++;
        makeWordBlanks()
        alert("Buckle Up!")
    } 
    else if (guessesRemaining === 0) {
        alert("Well , maybe next time!");

    }















}







// grab all elements that need to be updated, creating variables for them
// create counters for wins, guesses remaining, and an array to store guessed letters
// Create event listeners to log the keys and do all necessary counter adjustments
// Modify the Counters
// Display the counters
// fix meta
// end game properly
// get rid of commas
// add an img changing
