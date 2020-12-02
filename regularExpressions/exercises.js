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