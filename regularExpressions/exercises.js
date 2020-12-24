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


/* 
Debug a function which would return true 
if the input followed this time format 14-10-2016 01:12 and false otherwise.
*/

// function isItBugged(code){
//     //hmm, Looks like its bugged man!
//      return this./^(\d{2}\d-){
//     }\d{2} \d\d;:;\d\d/".test[date];
// }

// console.log(isItBugged("01_09_2016 01:20"));
// console.log(isItBugged("14-10-1066 12:00"));
// console.log(isItBugged("Tenth of January"));

/*
Given an array of strings representing a list of usernames, return true only if all usernames comply with your company's guidelines. Return false otherwise.

The guidelines say that the username is valid only if:

it is between 6-10 characters long;
contains at least 1 lowercase letter;
contains at least 1 number;
contains only numbers and lowercase letters.
Examples of arrays that will be tested:

const usernames1 = ['john123', 'alex222', 'sandra1']; // returns true

const usernames2 = ['john123', 'alex222', 'sandraW']; // returns false because sandraW has no number

const usernames3 = ['john_123', 'alex222', 'sandra1']; // returns false because john_123 contains an invalid character

Notes:

You will always be given an array with at least 1 string to check. s
*/

function authList(arr) {
   const usernameRegex = new RegExp('[a-z\d]{1,}[^A-Z!@#$%^&*]{6,10}', 'g');
   for(let i = 0; i < arr.length; i++) {
       if(!usernameRegex.test(arr[i])) {
           return false;
       }
   }
   return true;
}

const usernames1 = ['john123', 'alex222', 'sandra1']; // true
const usernames2 = ['john123', 'alex222', 'sandraW']; // false
const usernames3 = ['john_123', 'alex222', 'sandra1']; // false
const usernames4 = ['']; // false
const usernames5 = ['123456']; // false
const usernames6 = ['abcdef']; // false

console.log(authList(usernames1));
console.log(authList(usernames2));
console.log(authList(usernames3));
console.log(authList(usernames4));
console.log(authList(usernames5));