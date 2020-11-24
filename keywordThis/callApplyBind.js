let obj = {
    fullName: "Harry Potter",
    person: {
        sayHi: function () {
            return "This person's name is " + this.fullName
        }
    }
}

/*
Write a function called sumEvenArguments which takes all of the arguments passed to a function 
and returns the sum of the even ones.
*/
function sumEvenArguments(...numbers) {
    let sum = 0;
    numbers.forEach(number => {
        if (number % 2 === 0) {
            sum += number;
        }
    });
    return sum;
}



/*
Write a function called arrayFrom which 
converts an array-like-object into an array.
*/

const arrayFrom = (arrayLikeObject) => {
    const convertedArr = []; // initialize empty array
    return convertedArr.slice.call(arrayLikeObject); // set this to arrayLikeObject, which gets its elements copied into convertedArr
}



/*
Write a function called invokeMax which accepts a function and a maximum amount. 
invokeMax should return a function that when called increments a counter. 
If the counter is greater than the maximum amount, 
the inner function should return "Maxed Out!"
*/

// call will immediately invoke the function that it is attached to. 
// If you want to change the value of the keyword this, you can pass in the desired value as the first parameter to call 
// (oftentimes this first argument is written in documentation as thisArg)
function invokeMax(callback, thisArg) {
    const max = [].slice.call(arguments, 1) // copies to a new array the arguments, and accesses thisArg (the max number) with the 1 index
    let counter = 0;
    return function() {
        var innerArguments = [].slice.call(arguments); // copy over the arguments to a new array for the inner function context
        if (counter >= max) {
            return "Maxed Out!";
        } else {
            counter += 1;
            return callback.apply(this, innerArguments)
        }
    }
}



/*
Write a function called guessingGame which takes in one parameter amount. 
The function should return another function that takes in a parameter 
called guess. In the outer function, 
you should create a variable called answer which is the result of a 
random number between 0 and 10 as well as a variable called guesses 
which should be set to 0.

In the inner function, if the guess passed in is the same as the random number 
(defined in the outer function) - you should return the string "You got it!". 
If the guess is too high return "You're too high!" and 
if it is too low, return "You're too low!". 
You should stop the user from guessing if the amount of guesses they have made is 
greater than the initial amount passed to the outer function.

You will have to make use of closure to solve this problem.
*/

const guessingGame = (amount) => {
    const answer = Math.floor(Math.random * 11); // goes between 0 and 10
    const guesses = 0; // accumulator counts the number of current guesses
    return function(guess) {
        
    }
}