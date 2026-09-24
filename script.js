// Find the elements on the page.
const dieOneDisplay = document.getElementById("die-one");
const dieTwoDisplay = document.getElementById("die-two");
const totalDisplay = document.getElementById("total");
const rollButton = document.getElementById("roll-button");
const rollCountDisplay = document.getElementById("roll-count");
const rollHistoryDisplay = document.getElementById("roll-history");

// Store every total rolled during this session.
const rollHistory = [];

function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

function rollDice() {
  const dieOne = rollDie();
  const dieTwo = rollDie();
  const total = dieOne + dieTwo;

  // Add the latest total to our array.
  rollHistory.push(total);

  dieOneDisplay.textContent = dieOne;
  dieTwoDisplay.textContent = dieTwo;
  totalDisplay.textContent = total;

  // The array's length tells us how many rolls we've made.
  rollCountDisplay.textContent = rollHistory.length;

  // Display only the most recent 10 totals.
  rollHistoryDisplay.textContent = rollHistory.slice(-10).join(", ");
}

rollButton.addEventListener("click", rollDice);
const resetButton = document.getElementById("reset-button");

function resetExperiment() {
  // Empty the existing array.
  rollHistory.length = 0;

  // Restore the initial display.
  dieOneDisplay.textContent = "–";
  dieTwoDisplay.textContent = "–";
  totalDisplay.textContent = "–";
  rollCountDisplay.textContent = "0";
  rollHistoryDisplay.textContent = "None yet";
}

resetButton.addEventListener("click", resetExperiment);