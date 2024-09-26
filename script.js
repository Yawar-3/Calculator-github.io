// Get the calculator screen
const calculatorScreen = document.getElementById('calculator-screen');

// Load the click sound and the congratulation sound
const clickSound = new Audio('click-sound.mp3');  // Sound for button clicks
const congratsSound = new Audio('congrats-sound.mp3');  // Sound for successful calculation

// Function to play sound when a button is clicked
function playClickSound() {
    clickSound.currentTime = 0;  // Reset the sound to the start
    clickSound.play();
}

// Function to play congratulation sound after successful calculation
function playCongratsSound() {
    congratsSound.currentTime = 0;  // Reset the sound to the start
    congratsSound.play();
}

// Function to clear the screen
function clearScreen() {
    calculatorScreen.value = '';
    playClickSound();  // Play sound when C (clear) is pressed
}

// Function to delete the last entered character
function deleteLast() {
    calculatorScreen.value = calculatorScreen.value.slice(0, -1);
    playClickSound();  // Play sound when DEL is pressed
}

// Function to append numbers
function appendNumber(number) {
    calculatorScreen.value += number;
    playClickSound();  // Play sound when any number button is pressed
}

// Function to append operators
function appendOperator(operator) {
    calculatorScreen.value += operator;
    playClickSound();  // Play sound when any operator is pressed
}

// Function to evaluate the expression and display the result
function calculate() {
    try {
        // Evaluate the expression
        calculatorScreen.value = eval(calculatorScreen.value);

        // Play the congratulation sound on successful result
        playCongratsSound();
       
    } catch (error) {
        // Show an alert if there's an error (invalid operation)
        alert('Invalid operation');
        clearScreen();
    }
    playClickSound();  // Play sound when = (equals) is pressed
}
