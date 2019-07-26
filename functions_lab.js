
// Define a function, as a function declaration, maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.

/* function maxOfTwoNumbers(n1, n2) {
    if (n1 >= n2) {
        return n1
    } else {
        return n2
    }
}

console.log(maxOfTwoNumbers(3, 4))
console.log(maxOfTwoNumbers(5, 3)) */

// Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

let largest;

const maxOfThree = function (num1, num2, num3) {
    (num1 > num2) ? largest = num1 : largest = num2;
    (num3 > largest) ? largest = num3 : largest;
    return largest
}

console.log(maxOfThree(2, 3, 4))
console.log(maxOfThree(5, 3, 4))
console.log(maxOfThree(2, 8, 4))



/* Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise. */

function isCharAVowel (char) {
    const vowels = 'aeiou'
    for(vowel of vowels) {
        return (char === vowel?true:false)
    }
}
console.log(isCharAVowel('a'))
console.log(isCharAVowel('y'))

/* Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11. */

const sumArray = function (arr){
    const total = arr.reduce((accumulator, num) => {
        console.log(accumulator, num)
        return accumulator + num;
    }, 0)
    return total
}
console.log(sumArray([3, 4, 5]))


/* Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40. */

/* Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called. */

/* Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar'); would return the string "ratskcor". */

/* Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string. */

/* Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"]. */

