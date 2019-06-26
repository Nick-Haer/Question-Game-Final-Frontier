let winDisplay = document.querySelector("#windisplay");
let wordDisplay = document.querySelector("#worddisplay");
let guessDisplay = document.querySelector("#guessesremaining");
let lettersDisplay = document.querySelector("#guessedletters");
let changingPhoto = document.querySelector("#changingphoto")
let winCount = 0;
let guessesRemaining = 12;
let wordsToPick = ["moon", "quasar", "galaxy", "satellite", "andromeda"];
let indexCount = -1;
let wordBlanks = [];
let guessesArray = [];

function startGame() {

    wordBlanks = [];
    guessesArray = [];
    guessesRemaining = 12;
    indexCount++;

    if (indexCount === 5) {
        alert("The hyperdrive is out of fuel for now, but you can refresh the page to take another tour of the stars!")
        return "You win!";
    }

    for (i = 0; i < wordsToPick[indexCount].length; i++) {
        wordBlanks.push("_");
    }
    wordDisplay.textContent = wordBlanks;
    guessDisplay.textContent = guessesRemaining;
    lettersDisplay.textContent = guessesArray;


}

startGame();

document.onkeyup = function (event) {

    let letterguessed = event.key;

    console.log(wordsToPick[indexCount].indexOf(letterguessed));


    if (guessesArray.indexOf(letterguessed) != -1) {
        alert("You guessed that already!");
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
    }


    
    if (wordBlanks.indexOf("_") === -1) {
        winCount++;
        winDisplay.textContent = winCount;
        alert("Buckle Up!")
        startGame()

        indexCount === 5 ? changingPhoto.setAttribute("src", "./pictures/andromeda-galaxy.jpg")
        : indexCount === 4 ? changingPhoto.setAttribute("src", "./pictures/SEF13-08597-001_abs_front_view-med-res.jpg") 
        : indexCount === 3 ? changingPhoto.setAttribute("src", "./pictures/galaxy.jpeg") 
        : indexCount === 2 ? changingPhoto.setAttribute("src", "./pictures/r1358045_19071863.jpg")
        : indexCount === 1 ? changingPhoto.setAttribute("src", "./pictures/moon_3x4.jpg")
        : changingPhoto;

    } 
    if (guessesRemaining === 0) {
        alert("Well , maybe next time!");
        startGame()


    }

    guessDisplay.textContent = guessesRemaining;

}







// grab all elements that need to be updated, creating variables for them
// create counters for wins, guesses remaining, and an array to store guessed letters
// Create event listeners to log the keys and do all necessary counter adjustments
// Modify the Counters
// Display the counters 
// end game properly
// fix meta
// get rid of commas
// add an img changing
