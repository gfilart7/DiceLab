// Find the HTML elements using their IDs.
const dieOneDisplay = document.getElementById("die-one");
const dieTwoDisplay = document.getElementById("die-two");
const totalDisplay = document.getElementById("total");
const rollButton = document.getElementById("roll-button");

// Generate a random whole number from 1 to 6.
function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

// Roll both dice and display the results.
function rollDice() {
  const dieOne = rollDie();
  const dieTwo = rollDie();

  dieOneDisplay.textContent = dieOne;
  dieTwoDisplay.textContent = dieTwo;
  totalDisplay.textContent = dieOne + dieTwo;
}

// Run rollDice whenever the button is clicked.
rollButton.addEventListener("click", rollDice);
