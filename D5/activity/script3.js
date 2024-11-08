

const secretNumber = Math.floor(Math.random() * 10) + 1;


let attempts = 0;


let guessedNumber;


console.log("Welcome to the Guess the Secret Number Game!");
alert("Welcome to the Guess the Secret Number Game!");
console.log("Guess a number between 1 and 10.");
alert("Guess a number between 1 and 10.");


do {
  // Increment the attempts variable by 1
  attempts++;

  // Prompt the player to enter their guess
  guessedNumber = parseInt(prompt("Enter your guess (between 1 and 10):"), 10);

  
  if (guessedNumber < secretNumber) {
    console.log("Too low! Try again.");
    alert("Too low! Try again.");
  }
  
  else if (guessedNumber > secretNumber) {
    console.log("Too high! Try again.");
    alert("Too high! Try again.");
  }
  
  else if (guessedNumber === secretNumber) {
    console.log(`Congratulations! You guessed the correct number: ${secretNumber}`);
    console.log(`It took you ${attempts} attempts.`);
  } else {
    console.log("Invalid input. Please enter a number between 1 and 10.");
  }
} while (guessedNumber !== secretNumber);

// End of the game
console.log("Game over. Thanks for playing!");
