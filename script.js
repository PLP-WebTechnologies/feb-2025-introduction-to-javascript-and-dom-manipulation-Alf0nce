// Change text content dynamically
const changeableText = document.getElementById('changeable-text');
const changeTextBtn = document.getElementById('change-text-btn');

changeTextBtn.addEventListener('click', function() {
    const messages = [
        "The text has been changed!",
        "JavaScript is powerful!",
        "DOM manipulation is fun!",
        "You clicked the button!",
        "Text content updated successfully."
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    changeableText.textContent = randomMessage;
});

// Modify CSS styles via JavaScript
const styleableText = document.getElementById('styleable-text');
const changeStyleBtn = document.getElementById('change-style-btn');

changeStyleBtn.addEventListener('click', function() {
    if (styleableText.classList.contains('highlight')) {
        styleableText.classList.remove('highlight');
    } else {
        styleableText.classList.add('highlight');
    }
});

// Add or remove elements dynamically
const elementContainer = document.getElementById('element-container');
const addElementBtn = document.getElementById('add-element-btn');
const removeElementBtn = document.getElementById('remove-element-btn');

let elementCounter = 1;

addElementBtn.addEventListener('click', function() {
    const newElement = document.createElement('p');
    newElement.textContent = `New element #${elementCounter++} added dynamically`;
    newElement.classList.add('new-element');
    elementContainer.appendChild(newElement);
});

removeElementBtn.addEventListener('click', function() {
    const elements = elementContainer.querySelectorAll('p.new-element');
    if (elements.length > 0) {
        elementContainer.removeChild(elements[elements.length - 1]);
        elementCounter--;
    } else {
        alert('No more elements to remove!');
    }
});