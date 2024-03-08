// Helper function to calculate the square of a number
function square(number) {
    return number * number;
  }
  
  // Helper function to check if a number is even
  function isEven(number) {
    return number % 2 === 0;
  }
  
  // Helper function to generate a random number between min and max
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Main function to demonstrate the usage of helper functions
  function main() {
    let num = 5;
    console.log(`Square of ${num} is: ${square(num)}`);
    console.log(`Is ${num} even? ${isEven(num) ? 'Yes' : 'No'}`);
  
    let randomNumber = getRandomNumber(1, 100);
    console.log(`Random number between 1 and 100: ${randomNumber}`);
  }
  
  // Call the main function
  main();
  