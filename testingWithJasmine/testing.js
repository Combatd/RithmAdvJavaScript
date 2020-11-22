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

const mergeArrays = (arr1, arr2) => {
    // sort the arrays in place
    arr1.sort(compareNumbers);
    arr2.sort(compareNumbers);

    if (arr1[arr1.length - 1] < arr2[arr2.length - 1]) {
        return arr1.concat(arr2);
    } else if (arr1[arr1.length - 1] > arr2[arr2.length - 1]) {
        return arr2.concat(arr1);
    }

    return arr1.concat(arr2).sort(compareNumbers(a, b));
};

// helper function
const compareNumbers = (a, b) => {
    return a - b;
}