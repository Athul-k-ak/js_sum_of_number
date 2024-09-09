// Get the input field, button, and result paragraph
let numberInput = document.getElementById("numberInput");
let submitBtn = document.getElementById("submitBtn");
let result = document.getElementById("result");

// Event listener for button click
submitBtn.onclick = () => {
    let num = parseInt(numberInput.value);  // Get the number from input

    if (isNaN(num) || num < 0 || num > 1000000) {
        result.textContent = "Invalid number";  // Show invalid message
    } else {
        let sum = 0;
        for (let i = 1; i <= num; i++) {
            sum += i;  // Calculate sum of numbers
        }
        result.textContent = `Sum of numbers up to ${num} is ${sum}`;  // Display the result
    }
};
