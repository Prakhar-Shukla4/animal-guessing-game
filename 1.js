let animals = ["Lion", "Elephant", "Tiger", "Giraffe", "Zebra"];
let correctAnimal, score = 0, rounds = 3, currentRound = 0;

function startGame() {
  score = 0;
  currentRound = 0;
  document.getElementById("feedback").textContent = "";
  document.getElementById("animal-name").textContent = "Click a button to guess the animal!";
  showRandomAnimal();
}

function showRandomAnimal() {
  if (currentRound < rounds) {
    // Pick a random animal and get its correct index
    let randomIndex = Math.floor(Math.random() * animals.length);
    correctAnimal = animals[randomIndex];

    // Display the animal name on the screen
    document.getElementById("animal-name").textContent = `Which index is "${correctAnimal}"?`;
  } else {
    document.getElementById("animal-name").textContent = `Game Over! Your score is ${score} out of ${rounds}.`;
  }
}

function guess(index) {
  if (currentRound >= rounds) {
    alert("Game over! Click 'Start New Game' to play again.");
    return;
  }

  if (animals[index] === correctAnimal) {
    document.getElementById("feedback").textContent = "✅ Correct! Well done!";
    score++;
  } else {
    document.getElementById("feedback").textContent = `❌ Incorrect! "${correctAnimal}" was at index ${animals.indexOf(correctAnimal)}.`;
  }

  currentRound++;
  setTimeout(showRandomAnimal, 1500); // Wait 1.5s before showing the next animal
}

startGame();
