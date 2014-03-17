var guess = prompt("How many runs did the Mariners score in 2013? (Hint: It's between 513 and 853)");

var guessesTried = {
    guesses: []
};

var answer = 624;

if (guess == answer) {
    alert("Congratulations, you are correct! It only took you 1 try!");
} else {
    while (guess !== answer) {
        if (guess > answer) {
            guessesTried.guesses.push(guess);
            guess = prompt("Sorry, you were too high. Try again!");
        } else if (guess < answer) {
            guessesTried.guesses.push(guess);
            guess = prompt("Sorry, you were too low. Try again!");
        } else {
            alert("Congratulations, you are correct! It only took you " + (guessesTried.guesses.length + 1) + " tries!");
        }
    }
}