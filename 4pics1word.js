function checkGuess() {
    var guessInput = document.getElementById('guess-input').value;
    var resultMessage = document.getElementById('result-message');


    var correctAnswer = 'ball';

    if (guessInput === correctAnswer) {
        resultMessage.textContent = 'Congratulations! Your answer is correct.';
    } else if (guessInput === '') {
        resultMessage.textContent = 'Please enter a guess.';
    } else {
        resultMessage.textContent = 'Sorry, your answer is incorrect. Try again.';
    }
}

function checkGuesse() {
    var guessInput = document.getElementById('guess-inputs').value;
    var resultMessage = document.getElementById('result-messages');


    var correctAnswer = 'pair';

    if (guessInput === correctAnswer) {
        resultMessage.textContent = 'Congratulations! Your answer is correct.';
    } else if (guessInput === '') {
        resultMessage.textContent = 'Please enter a guess.';
    } else {
        resultMessage.textContent = 'Sorry, your answer is incorrect. Try again.';
    }
}
function checkGuess() {
    var guessInput = document.getElementById('guess-input').value;
    var resultMessage = document.getElementById('result-message');


    var correctAnswer = 'ball';

    if (guessInput === correctAnswer) {
        resultMessage.textContent = 'Congratulations! Your answer is correct.';
    } else if (guessInput === '') {
        resultMessage.textContent = 'Please enter a guess.';
    } else {
        resultMessage.textContent = 'Sorry, your answer is incorrect. Try again.';
    }
}

function checkGuesses() {
    var guessInput = document.getElementById('guess-inputss').value;
    var resultMessage = document.getElementById('result-messagess');


    var correctAnswer = 'mouse';

    if (guessInput === correctAnswer) {
        resultMessage.textContent = 'Congratulations! Your answer is correct.';
    } else if (guessInput === '') {
        resultMessage.textContent = 'Please enter a guess.';
    } else {
        resultMessage.textContent = 'Sorry, your answer is incorrect. Try again.';
    }
}