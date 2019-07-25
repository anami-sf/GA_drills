

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
    setRange: function(){ 
        const smallNum = prompt('Enter smallest number: ')
        const bigNum = prompt('Enter biggest number: ');
        game.smallestNum = parseInt(smallNum)
        this.biggestNum = parseInt(bigNum)
    },
    generateSecretNum: function( ){
        this.setRange()
        this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
    },
    getGuess: function(){
        const guess = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum} or "Quit": `)
        console.log(typeof guess)
        if (guess === 'Quit') {
            return guess.toLocaleLowerCase()
        } else {
            return parseInt(guess)
        }
        
    },
    render: function(input) {
        if (input > game.secretNum && input <= game.biggestNum) {
            alert(`Your guess is too high\n` + 'Previous guesses: ' + game.prevGuesses)
        } else if (input < game.secretNum && input >= game.smallestNum) {
            alert(`Your guess is too low\n` + 'Previous guesses: ' + game.prevGuesses)
        } else if (input === game.secretNum) {
            alert(`Congratulations! You won in ${game.prevGuesses.length} guesses.`)
        } else if (input === 'quit') {
            alert('Goodbye!')
        } else {
            alert('Invalid input')
        }
    },
    play: function() {
        game.generateSecretNum()
        console.log(game.secretNum)
        let guess = null
        while (guess !== 'quit' && guess !== game.secretNum) {
            guess = this.getGuess()
            game.prevGuesses.push(guess)
            game.render(guess)
        }
    },
  };

game.play()


