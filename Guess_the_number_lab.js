

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
    play: function() {
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
    }
  };

var input = ''

while (input !== 'quit') {
    input = prompt('Enter a number or "quit": ')
}
console.log(game.play)
