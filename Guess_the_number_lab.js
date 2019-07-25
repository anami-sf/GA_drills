

/* const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    play: randomNumber(this.biggestNum, this.smallestNum) 
};

function randomNumber(smallestNum, biggestNum) {
    const range = biggestNum - smallestNum;
    const randomNum = smallestNum + ( Math.random() * (range + 1))
    return Math.floor(randomNum)
} 

console.log(randomNumber(1, 5)) */

const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [],
    getGuess: function(){
        const guess = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}: `)
        return guess
    },
    play: function() {
        this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
        const guess = this.getGuess()
        game.prevGuesses.push(guess)
        game.render(guess)
    },
    render: function(input) {
        if (input > game.secretNum) {
            alert(`Your guess is too high\n` + 'Previous guesses: ' + game.prevGuesses)
        } else if (input < game.secretNum) {
            alert(`Your guess is too low\n` + 'Previous guesses: ' + game.prevGuesses)
        } else if (input == game.secretNum) {
            alert(`Congratulations! You won in ${game.prevGuesses.length} guesses.`)
        }
    }
  
  };

game.play()
//game.render(9)
console.log(game.secretNum)
//console.log('prev guesses: '  + game.prevGuesses)
//console.log('guess: ' + game.getGuess())

var guess = ''
var guesses = []
var count = 0

/* while (guess !== 'q') {
    console.log(game.secretNum)
    guess = prompt('Enter a number or "Q": ')
    guesses.push(guess)
    console.log(guesses)

    if (guess > game.secretNum) {
        count += 1
        alert(`Too high\n` + 'Previous guesses: ' + guesses)
    } else if (guess < game.secretNum) {
        count += 1
        alert(`Too low\n` + 'Previous guesses: ' + guesses)
    } else if (guess == game.secretNum) {
        alert(`Congratulations! You won in ${count} guesses.`)
        break
    }
}
 */
