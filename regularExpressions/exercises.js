/*
The notorious Captain Schneider has given you a very straight forward mission. 
Any data that comes through the system make sure that only non-special characters see the light of day.

Create a function that given a string, retains only the letters A-Z (upper and lowercase), 
0-9 digits, and whitespace characters. 
Also, returns "Not a string!" if the entry type is not a string.

^ means everything that is not matching the expression
0-9
A-Z
a-z
\s whitespace
*/

function nothingSpecial(str) {
    if (typeof(str) !== 'string') { return 'Not a string!' }
    // let notNormalChars = new RegExp('^[0-9][A-Z][a-z]\s');
    let notNormalChars = /[^0-9A-Za-z\s]/g;
    return str.replace(notNormalChars, '');
}

console.log(nothingSpecial("Hello World!")); // => "Hello World")
console.log(nothingSpecial("%^Take le$ft ##quad%r&a&nt")); // => "Take left quadrant")
console.log(nothingSpecial("M$$$$$$$y ally!!!!!")); // => "My ally")
console.log(nothingSpecial(25)); // => "Not a string!"

/*
countNumbers
Write a function called countNumbers which accepts a string of numbers 
and returns the count of numbers between 0 and 9.
*/

function countNumbers(numbersString) {
    const numbersRegEx = /[0-9]/gi;
    let matches = numbersString.match(numbersRegEx);
    if(matches) { return matches.length };
    return 0;
}

console.log(countNumbers("321321dsadsa930-29d132b13a")); // 16
console.log(countNumbers("this is so wonderful")); // 0
console.log(countNumbers("this is so 1234")); // 4

/*
capitalSentence
Write a function called capitalSentence which accepts a string and 
returns another string with all the capital letters joined together.
*/

function capitalSentence(str) {
    const capsRegex = new RegExp('[A-Z]', 'g');
    let matches = str.match(capsRegex); // returns an array
    return matches.join('');
}

console.log(capitalSentence("The Cat In The Hat")); // "TCITH"
console.log(capitalSentence("And I Think to Myself What a Wonderful World")); // "AITMWWW"

/*
isValidPassword
Write a function caled isValidPassword, which accepts a string. 
If the string is longer than 7 characters and includes 
at least one special character (!,@,#, or $), 
the function should return true. Otherwise, return false
*/

function isValidPassword(password) {
    const passwordRegex = new RegExp('[a-zA-Z0-9]{7,}[!@#$]', 'g');
    return passwordRegex.test(password);
}

console.log(isValidPassword('TacoCat')); // false
console.log(isValidPassword('foo')); // false
console.log(isValidPassword('awesome!')); // true
console.log(isValidPassword('win!@')); // false

/* Sentence Count
Create a function that will tell how many sentences are in a paragraph, 
based on the number of periods ".", 
question marks "?" and "!" exclamation points 
that an input string contains.
*/

function sentenceCount(paragraph) {
    const punctuationRegex = new RegExp('[.?!]', 'g');
    let punctuationList = paragraph.matchAll(punctuationRegex);
    return [...punctuationList].length; // spread operator copies into array and get length
}

console.log(sentenceCount('No punctuation'));
console.log(sentenceCount('This is a sentence.'));
console.log(sentenceCount('Can you hear me now? Good!'));
console.log(sentenceCount('Too many things to do. Rawr! When do I get a break?'));