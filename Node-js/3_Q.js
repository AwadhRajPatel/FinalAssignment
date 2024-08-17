const fs = require('fs');

// 1. Explain the difference between synchronous and asynchronous operations in Node.js.

// Synchronous operations block the execution of the program until they are completed.
// Asynchronous operations do not block the execution of the program. They allow the program to continue executing while the operation is in progress.

// 2. Create a script that reads a file asynchronously and logs its contents.
// 3. Use the built-in fs module to handle the file reading.

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});