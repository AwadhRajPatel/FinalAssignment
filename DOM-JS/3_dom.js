// Accessing the button and input elements
const button = document.getElementById('clickMeButton');
const textInput = document.getElementById('textInput');

// Adding an event listener to the button for the 'click' event
button.addEventListener('click', () => {
    alert('Button was clicked!');
});

// Adding an event listener to the input for the 'input' event
textInput.addEventListener('input', (event) => {
    console.log(`Current input value: ${event.target.value}`);
});

// Adding a second event listener to the button for the 'click' event
button.addEventListener('click', () => {
    console.log('Another event listener for the same click event!');
});
