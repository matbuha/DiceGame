document.addEventListener('DOMContentLoaded', function() {
    rollDice();
});

function rollDice() {
    // Generate random numbers for each player
    var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
    var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6

    // Update the images based on random numbers
    document.querySelector('.img1').src = './images/dice' + randomNumber1 + '.png';
    document.querySelector('.img2').src = './images/dice' + randomNumber2 + '.png';

    // Determine the winner
    var message = "Draw!";
    if (randomNumber1 > randomNumber2) {
        message = "Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
        message = "Player 2 Wins!";
    }

    // Display the result
    document.querySelector('h1').textContent = message;
}
