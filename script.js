let winDisplay = document.querySelector("#windisplay");
let wordDisplay = document.querySelector("#worddisplay");
let guessDisplay = document.querySelector("#guessesremaining");
let lettersDisplay = document.querySelector("#guessedletters");
let changingPhoto = document.querySelector("#changingphoto")
let changingAudio = document.querySelectorAll(".getaudio")
console.log(changingAudio);
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

    wordDisplay.textContent = wordBlanks.join(" ");
    guessDisplay.textContent = guessesRemaining;
    lettersDisplay.textContent = guessesArray;


}

startGame();

changingAudio[0].classList.remove("changingaudio")
changingAudio[0].classList.add("activeaudio")

document.onkeyup = function (event) {

    let letterguessed = event.key;

    console.log(wordsToPick[indexCount].indexOf(letterguessed));


    

    if ( !((97 <= letterguessed.charCodeAt(0)) && (letterguessed.charCodeAt(0) <= 122)) ) {
        return 0;
    }

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
        wordDisplay.textContent = wordBlanks.join(" ");
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

        let removeLast = changingAudio[indexCount-1].remove();
        let makeCurrent = changingAudio[indexCount].classList.remove("changingaudio")
        changingAudio[indexCount].classList.add("activeaudio");

        if (indexCount === 5) {
            makeCurrent()
            removeLast()
        }
        else if (indexCount === 4) {
            makeCurrent()
            removeLast()
        }
        else if (indexCount === 3) {
            makeCurrent()
            removeLast()
        }
        else if (indexCount === 2) {
            makeCurrent()
            removeLast()
        }
        else if (indexCount === 1) {
            makeCurrent()
            removeLast()
            
        }

    } 
    if (guessesRemaining === 0) {
        alert("Well , maybe next time!");
        startGame()

        if (indexCount === 5) {
            removeLast()
        }
        else if (indexCount === 4) {
            removeLast()
        }
        else if (indexCount === 3) {
            removeLast()
        }
        else if (indexCount === 2) {
            removeLast()
        }
        else if (indexCount === 1) {
            removeLast()
        }


    }

    guessDisplay.textContent = guessesRemaining;

}







// grab all elements that need to be updated, creating variables for them
// create counters for wins, guesses remaining, and an array to store guessed letters
// Create event listeners to log the keys and do all necessary counter adjustments
// Modify the Counters
// Display the counters 
// end game properly
// add an img changing

// fix meta bug
// get rid of commas
// add music
// make slighlty mobile responsive

