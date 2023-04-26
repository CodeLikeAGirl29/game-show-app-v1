# Game Show App
Sixth project of the [Team Treehouse](http://referrals.trhou.se/lindseykdeveloper) Front End Web Development Techdegree by Lindsey.

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

> Live link of this project can be found [here](https://codelikeagirl29.github.io/game-show-app-v1/)

## Phrase Hunter
In this project, you'll create a browser version of “Wheel of Success”, a word-guessing game where players will click letters from an onscreen keyboard to try to guess a random phrase.

Using Javascript, you’ll create an array of phrases and write functions to choose a random phrase from that array, split the phrase into letters, and put those letters onto the game board.

Each time the player guesses a letter, you’ll need to compare the letter the player has chosen with the random phrase. If the letter is in the phrase, you’ll update the game board with the chosen letters.

A player can keep choosing letters until they make five incorrect guesses. If the letter they chose isn’t in the phrase, you’ll remove one of the player’s 5 guesses.

If the player completes the phrase before they run out of guesses, a winning screen will display. If the player guesses incorrectly 5 times, a losing screen will display.

A player can guess a letter only once. After they’ve guessed a letter, your
programming will need to disable that letter.

This game is all about guessing a random phrase, from a predifined list of five
phrases, before making five wrong guesses.

> The theme is Disney characters!

On screen and physical keyboard input
Users can choose how they want to interact with the game and even switch during the game. While playing the game will ignore choices that already have been made.

Conditional user feedback
If the user makes a wrong guess they will be proved with three kinds of feedback:

One life is lost.

Remaining letters start pulsing (speed depends on lives left).

A game over screen with the correct phrase when five lives are lost.

A game over screen with the amount of lives left and the guessed phrase will be shown when the user wins the game.
