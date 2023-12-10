// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);




writeCards(["Ada", "Brendan", "Ali"], "birthday");


function writeCards(names, eventName) {
  // Create an empty array to store the thank-you messages
  let thankYouMessages = [];

  // Use a for loop to iterate over each name in the array
  for (let i = 0; i < names.length; i++) {
    // Build the thank-you message using string interpolation
    let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;

    // Add the message to the array
    thankYouMessages.push(message);
  }

  // Return the array of thank-you messages
  return thankYouMessages;
}

// Example usage:
const namesArray = ["Ada", "Brendan", "Ali"];
const event = "birthday";

// Call the writeCards function with the example data
const messages = writeCards(namesArray, event);

// Log the resulting array of thank-you messages
console.log(messages);




function countDown(startingNumber) {
  // Check if the startingNumber is a positive integer
  if (typeof startingNumber === 'number' && startingNumber > 0 && Number.isInteger(startingNumber)) {
    // Use a while loop to count down from startingNumber to zero
    while (startingNumber >= 0) {
      // Log the current number
      console.log(startingNumber);
      // Decrement the number for the next iteration
      startingNumber--;
    }
  } else {
    console.log('Please provide a positive integer as the starting number.');
  }
}

// Example usage:
countDown(10); // Replace 10 with the desired starting number