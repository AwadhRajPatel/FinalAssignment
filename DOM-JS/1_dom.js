// Accessing the DOM elements
const titleElement = document.getElementById('title');
const buttonElement = document.getElementById('changeTextBtn');

// Adding an event listener to the button
buttonElement.addEventListener('click', () => {
    // Changing the text content of the title element
    titleElement.textContent = 'Hello, Awadhraj! You just changed this text.';
});
