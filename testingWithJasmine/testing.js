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

// spread operator allows for unlimited parameters in an array
function acceptNumbersOnly(...numbers) {
   for (let i = 0; i < numbers.length; i++) {
        // NaN is falsey, so it will compare to false
       if (isNaN(numbers[i]) || typeof (numbers[i]) !== 'number') {
           return false;
       }
   }
    return true;
}