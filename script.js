const randomNumber = function () {
    return Math.floor(Math.random() * 10);
}


const guessForm = document.getElementById("guessForm");
const log = document.getElementById("log");
guessForm.addEventListener("submit", processGuess);

function processGuess() {
    let userInput = document.getElementById("userInput").value;
    guess = randomNumber()
    if (parseInt(userInput, 10)  === guess) {
        log.innerHTML = "Correct!";
        log.className = "success";
    } else {
        log.innerHTML = "Wrong! the correct guess was " + guess
        log.className = "danger"
    }


    event.preventDefault()
}
