const qwerty = document.getElementById("qwerty");
const startButton = document.querySelector(".btn__reset");
const phrase = document.querySelector("#phrase");

let missed = 0;

const phrases = [
  "Pocahontas",
  "Lilo and Stitch",
  "Cinderella",
  "Dumbo",
  "Buzz Lightyear",
  "Aladdin",
  "Anastasia",
  "Flounder"
];

// return a random phrase from an array
function getRandomPhraseAsArray(arr) {

}

getRandomPhraseAsArray(phrases);

// adds the letters of a string to the display
function addPhraseToDisplay(arr) {

}

// checks if a letter is in the phrase
function checkLetter(button) {

}


function createResetBtn() {

}

// check if the game has been won or lost
function checkWin() {

}

function resetHearts() {

}

function resetPhrase() {

}

function resetKeyboard() {
  
}

addPhraseToDisplay(getRandomPhraseAsArray(phrases));
const letters = document.querySelectorAll(".letter");

// listen for the start game button to be pressed
startButton.addEventListener("click", (e) => {
  const overlay = document.querySelector("#overlay");
  overlay.style.display = "none";
  createResetBtn();
});

function createResetBtn() {
  const resetBtn = document.createElement("button");
  resetBtn.className = "btn__reset";
  resetBtn.textContent = "Reset";
  document.querySelector("body").appendChild(resetBtn);
  resetBtn.addEventListener("click", (e) => {
    resetHearts();
    resetPhrase();
    resetKeyboard();
    missed = 0;
    e.target.remove();
  });
}

//listen for the onscreen keyboard to be clicked
qwerty.addEventListener("click", (e) => {
  const button = e.target;
  if (button.tagName === "BUTTON") {
    button.className = "chosen";
    button.disabled = true;
    const letterFound = checkLetter(button);
    if (letterFound === null) {
      const tries = document.querySelectorAll(".tries");
      tries[missed].firstElementChild.src = "images/lostHeart.png";
      missed++;
    }
    checkWin();
  }
});
