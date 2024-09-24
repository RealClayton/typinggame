let words = ["cybersecurity", "ransomware", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon", 
    "mango", "nectarine", "orange", "papaya", "quince", "raspberry", "strawberry", "tangerine", "ugli", "watermelon"];
let currentWordIndex = 0;
let score = 0;
let startTime;
let inputBox = document.getElementById('input-box');
let overlayWord = document.getElementById('overlay-word');
let startBtn = document.getElementById('start-btn');
let scorePopup = document.getElementById('score-popup');
let scoreMessage = document.getElementById('score-message');

function startGame() {
currentWordIndex = 0;
score = 0;
startTime = new Date();
inputBox.disabled = false;
inputBox.value = '';
showWord();
startBtn.style.display = 'none';
inputBox.focus();
}

function showWord() {
if (currentWordIndex < words.length) {
let word = words[currentWordIndex];
overlayWord.textContent = word;
inputBox.placeholder = word;
} else {
endGame();
}
}

function checkWord() {
let inputWord = inputBox.value.trim();
if (inputWord === words[currentWordIndex]) {
score++;
}
inputBox.value = '';
currentWordIndex++;
showWord();
}

function endGame() {
let endTime = new Date();
let totalTime = (endTime - startTime) / 1000;
scoreMessage.textContent = `You got ${score} out of 20 words correct in ${totalTime.toFixed(2)} seconds.`;
scorePopup.style.display = 'block';
startBtn.style.display = 'block';
inputBox.disabled = true;
}

inputBox.addEventListener('keyup', (e) => {
if (e.key === "Enter") {
checkWord();
}
});

startBtn.addEventListener('click', startGame);
