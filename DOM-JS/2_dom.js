// Accessing the parent element (ul) and the button
const itemList = document.getElementById('itemList');
const addItemBtn = document.getElementById('addItemBtn');

// Adding an event listener to the parent element (ul) for clicks on its child elements
itemList.addEventListener('click', (event) => {
    // Check if the clicked element is an <li>
    if (event.target.tagName === 'LI') {
        console.log(`You clicked on ${event.target.textContent}`);
    }
});

// Adding a new item dynamically
let itemCount = 3;
addItemBtn.addEventListener('click', () => {
    itemCount++;
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${itemCount}`;
    itemList.appendChild(newItem);
});
