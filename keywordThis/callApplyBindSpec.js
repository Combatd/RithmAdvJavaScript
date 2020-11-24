/*
Write a function called sumEvenArguments which takes all of the arguments passed to a function
and returns the sum of the even ones.
*/

describe('#sumEvenArguments', () => {
    it('takes all of the arguments passed to a function', () => {
        expect(() => sumEvenArguments(1,2,3,4)).not.toThrow();
    });

    it('returns the sum of the even arguments', () => {
        expect(sumEvenArguments(1,2,3,4)).toEqual(6);
        expect(sumEvenArguments(1,2,6)).toEqual(8);
        expect(sumEvenArguments(1,2)).toEqual(2);
    });
});


/*
Write a function called arrayFrom which
converts an array-like-object into an array.
*/

// Arguments passed into a function are array-like
// DOM Manipulation methods, such as getElementById will return a NodeList which is array-like
describe('#arrayFrom', () => {
    const convertToArray = () => {  
        const arr = arrayFrom(arguments)
        return arr;
    }

    it('converts an array like object into an array', () => {
        const argumentArr = convertToArray();
        expect(argumentArr.reduce).to.be.function; // reducer method would work on an array
    });
});



/*
Write a function called invokeMax which accepts a function and a maximum amount.
invokeMax should return a function that when called increments a counter.
If the counter is greater than the maximum amount,
the inner function should return "Maxed Out!"
*/




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