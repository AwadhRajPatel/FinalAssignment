// 1. Create a script that writes a string to a new file.
const fs = require('fs');

const data = 'This is a string to write to a file.';

fs.writeFile('new_file.txt', data, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File written successfully!');
});

// 2. Append additional text to the same file.
const data2 = '\nThis is additional text to append to the file.';

fs.appendFile('new_file.txt', data2, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Data appended to file!');
});

// 3. Read and log the contents of the file to the console.
fs.readFile('new_file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File content:', data);
});