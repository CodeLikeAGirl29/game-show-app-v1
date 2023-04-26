const qwerty = document.getElementById("qwerty");
const btn = document.querySelector(".btn__reset");
const phrase = document.querySelector("#phrase");

let missed = 0;
let answer = '';

const phrases = [
  "Pocahontas",
  "Lilo and Stitch",
  "Cinderella",
  "Dumbo",
  "Buzz Lightyear",
  "Aladdin",
  "Anastasia",
  "Flounder",
  "Snow White",
  "Simba",
  "Mulan",
  "Pinocchio"
];

// return a random phrase from an array
function getRandomPhraseAsArray(answer) {
  answer = phrases[Math.floor(Math.random() * phrases.length)];
  const newPhrase = answer.split('');
  return newPhrase;
}

getRandomPhraseAsArray();
console.log(getRandomPhraseAsArray())

// adds the letters of a string to the display
function addPhraseToDisplay(arr) {
  for (let i = 0; i < arr.length; i++) {
    const li = document.createElement('li');
    li.textContent = arr[i];
    if (arr[i] === ' ') {
      li.className = 'space';
    } else {
      li.className = 'letter';
    }
    phrase.append(li);
  }
}

// checks if a letter is in the phrase
function checkLetter(button) {
  let letter = '';
  const letters = document.querySelectorAll('.letter');
  for (let i = 0; i < letters.length; i++) {
    if (letters[i].textContent === button.textContent) {
      letters[i].className += ' show';
      letter = letters[i].textContent;
    }
  }
  if (letter === '') {
    return null;

  } else {
    return letter;
  }
}


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

// check if the game has been won or lost
function checkWin() {
  const letters = document.querySelectorAll(".letter");
  const show = document.querySelectorAll(".show");
  const title = document.querySelector(".title");
  const overlay = document.querySelector("#overlay");
  if (letters.length === show.length) {
    overlay.style.display = "flex";
    overlay.className = "win";
    title.textContent = "You Won!";
    createResetBtn();
  } else if (missed >= 5) {
    overlay.style.display = "flex";
    overlay.className = "lose";
    title.textContent = "You Lost!";
    createResetBtn();
  }
}

function resetHearts() {
  const tries = document.querySelectorAll(".tries");
  for (let i = 0; i < tries.length; i++) {
    tries[i].firstElementChild.src = "images/liveHeart.png";
  }

}

function resetPhrase() {
  const phrase = document.querySelector("#phrase");
  phrase.firstElementChild.innerHTML = "";
}

function resetKeyboard() {
  const keyboard = document.querySelectorAll(".chosen");
  for (let i = 0; i < keyboard.length; i++) {
    keyboard[i].className = "";
    keyboard[i].disabled = false;
  }

}

addPhraseToDisplay(getRandomPhraseAsArray(phrases));
const letters = document.querySelectorAll(".letter");

// listen for the start game button to be pressed
btn.addEventListener("click", (e) => {
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
