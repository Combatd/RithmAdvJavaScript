/*
Write a function called replaceWith that takes in a string,
a character to replace and a character to replace it with
and returns the string with the replacements.
Write tests to make sure this is case sensitive
*/

function replaceWith(str, charToReplace, newChar) {
    if (str === '' || charToReplace === '' || newChar === '') {
        return false;
    } 
    if (typeof(str) !== 'string' || typeof(charToReplace) !== 'string' || typeof(newChar) !== 'string') {
        return false;
    }

    const strArr = str.split('');
    strArr.forEach(char => {
        if (char === charToReplace) {
            char = newChar; // reassign the current element in the array
        }
    });
    console.log(strArr)
    return strArr.join('');
}

replaceWith("awesome", "e", "z")