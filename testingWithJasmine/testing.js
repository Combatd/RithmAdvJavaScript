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
    newStrArr = []
    str.split('').forEach(char => {
        if (char === charToReplace) {
            newStrArr.push(newChar) // reassign the current element in the array
        } else {
            newStrArr.push(char);
        }
    });
    return newStrArr.join('');
}

const expand = (arr, copies) => {
    allCopies = []
    copiedArr = arr.map((element) => { return element });
    for(let i = 0; i < copies; i++) {
        for (let j = 0; j < copiedArr.length; j++) {
            allCopies.push(copiedArr[j])
        }
    }
    return allCopies;
};