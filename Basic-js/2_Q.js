// Syntax

/*for (initialization; condition; increment) {
    // Code to be executed in each iteration
  }

  while (condition) {
    // Code to be executed repeatedly
  }

  do {
    // Code to be executed at least once
  } while (condition);
*/

/** Examples all loop */

// Print numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
  } 


  // Print numbers from 1 to 5 (using a while loop)
let i = 1;
while (i <= 5) {
  console.log(i);
  i++; 
}

// Print "Hello" once, then ask for user input until they enter "quit"
let userInput = "";
do {
  userInput = prompt("Enter a message ('quit' to exit):");
  console.log(userInput);
} while (userInput !== "quit");