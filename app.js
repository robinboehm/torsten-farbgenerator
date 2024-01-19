/**
 * Configuration
 */
 // TODO: Set here the number of images you already have in the image folder
const numberOfImages = 4;
const showNumbersOnCards = true;



/**
 * Data Generation Logic
 */

// Generate an array of 223 numbers from 0 to 233
const randomElements = Array.from(Array(234).keys());
// Shuffle the elements
const shuffledElements = randomElements
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)




/**
 * HTML Generation of Elements
 */
const containerElem = document.getElementById("container");

// Create 225 cards
for (let index = 0; index < 225; index++) {
    // Create a card item
    const newCard = document.createElement("div");
    newCard.classList = "grid-item"

    const currentCardNumber = (shuffledElements[index]+1);
    
    // Load the image for this card
    newCard.style.backgroundImage = `url("images/${currentCardNumber % numberOfImages}.png")`;

    if(showNumbersOnCards) {
        newCard.textContent = shuffledElements[index]+1;
    }

    containerElem.appendChild(newCard)
}