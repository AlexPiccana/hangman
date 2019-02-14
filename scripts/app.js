const puzzleDisplay = document.querySelector("#puzzle");
const guessedLettersDisplay = document.querySelector("#guessedLetters");
const statusMessageDisplay = document.querySelector("#guessesLeft");
let game1;

window.addEventListener('keypress', e => {
    const guess = String.fromCharCode(e.charCode);
    game1.guessLetter(guess);
    render();
});

const render = () => {
    puzzleDisplay.innerHTML = '';
    guessedLettersDisplay.innerHTML = '';
    statusMessageDisplay.textContent = game1.statusMessage;

    const puzzleArray = game1.puzzle.split('');
    puzzleArray.forEach((letter) => {
        const letterSpan = document.createElement('span');
        letterSpan.innerText = letter;
        puzzleDisplay.appendChild(letterSpan);
    })

    game1.guessedLetters.forEach((letter) => {
        const letterSpan = document.createElement('span');
        letterSpan.innerText = letter.toUpperCase();
        guessedLettersDisplay.appendChild(letterSpan);
    })
};

const startGame = async () => {
    const puzzle = await getPuzzle('3');
    game1 = new Hangman(puzzle, 5);
    render();
};

document.querySelector('#reset').addEventListener('click', startGame);

startGame();

// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle);
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// });

// getCurrentCountry().then((country) => {
//     console.log(country);
// }).catch((err) => {
//     console.log(err);
// });