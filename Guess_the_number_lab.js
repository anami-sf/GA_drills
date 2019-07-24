

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
    play: function() {
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
    },
    getGuess: function(){
        const guess = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}: `)
        return guess
    }
  };

//game.play()
console.log(game.getGuess())

var input = ''
var guesses = []
var count = 0

/* while (input !== 'q') {
    console.log(game.secretNum)
    input = prompt('Enter a number or "Q": ')
    guesses.push(input)
    console.log(guesses)

    if (input > game.secretNum) {
        count += 1
        alert(`Too high\n` + 'Guesses: ' + guesses)
    } else if (input < game.secretNum) {
        count += 1
        alert(`Too low\n` + 'Guesses: ' + guesses)
    } else if (input == game.secretNum) {
        alert(`Congratulations! You won in ${count} guesses.`)
        break
    }
}
 */
