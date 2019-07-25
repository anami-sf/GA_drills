

/*Can I define a function expresssion outside an object and then  use this function as a call back for a key inside an object?

const game = {
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
    generateSecretNum: function( ){
        this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
    },
    getGuess: function(){
        const guess = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum} or "q": `)
        return parseInt(guess) 
    },
    render: function(input) {
        if (input > game.secretNum) {
            alert(`Your guess is too high\n` + 'Previous guesses: ' + game.prevGuesses)
        } else if (input < game.secretNum) {
            alert(`Your guess is too low\n` + 'Previous guesses: ' + game.prevGuesses)
        } else if (input == game.secretNum) {
            alert(`Congratulations! You won in ${game.prevGuesses.length} guesses.`)
        }
    },
    play: function() {
        game.generateSecretNum()
        console.log(game.secretNum)
        let guess = null
        while (guess !== 'q' && guess !== game.secretNum) {
            guess = this.getGuess()
            game.prevGuesses.push(guess)
            game.render(guess)
        }
    },

  
  };

game.play()


