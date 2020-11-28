/*
Create a constructor function for a Person. 
Each person should have a firstName, lastName, favoriteColor, favoriteNumber and favoriteFoods 
(which should be an array).

Add a function on the Person.prototype called fullName that 
returns the firstName and lastName property of an object created by the Person constructor concatenated together.
*/

function Person(firstName, lastName, favoriteColor, favoriteNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.favoriteFoods = new Array();
    this.family = new Array();
}



/*
Overwrite the toString method from the Object prototype by creating a toString method for Person. 
The toString method should return a string in the following format:
Shana Malarkin, Favorite Color: Green, Favorite Number: 38
*/

Person.prototype.toString = function() {
    return `${this.firstName} ${this.lastName}, Favorite Color: ${this.favoriteColor}, Favorite Number: ${this.favoriteNumber}`;
}



/*
Add a property on the Person object called family which is an empty array.

Add a function on the Person.prototype called addToFamily which adds an object constructed from the Person constructor to the family array. 
To make sure that the object you are adding is an object construced from the Person constructor - take a look at the instanceofoperator. 
Make sure that your family array does not include duplicates! This method should return the length of the family array.
*/

Person.prototype.addToFamily = function(personObj) {
    if(personObj instanceof(Person)) { // make sure personObject is instatiated from Person Constructor
        // Check to see if personObj is already in the this.family array
        if (this.family.every((element) => { return !(JSON.stringify(personObj) === JSON.stringify(element)) })) {
            this.family.push(personObj);
        }

    }
}

Person.prototype.fullName = function(personObj) {
    return `${this.firstName} ${this.lastName}`;
}

/*
Implement your own version of Array.prototype.map

Implement a function that reverses a string and place it on the String.prototype

Implement your own version of Function.prototype.bind
*/

Array.prototype.myMap = function(callback) {
    copyArr = new Array;
    this.forEach((element, index) => {
        copyArr.push(callback(element, index, this)); // run the callback on each element
    });
    return copyArr;
}

// Array.prototype.myReduce = function(fn) {
//     selectedArr = new Array;
//     this.forEach((element, index) => {
//         selectedArr[0] += fn(element, index, this);
//     });
//     return selectedArr
// }

String.prototype.myReverse = function() {
    let newStr = '';
    for (let i = 0; i < this.length; i++) {
        newStr += this[this.length - 1 - i]; // from lsat element to first
    }
    return newStr;
}

Function.prototype.myBind = function(otherThis, ...args) {
    let _this = this;
    return(function(...newArgs) {
        return _this.apply(otherThis, args.concat(newArgs)); // could be any amount of args, so use .apply to change the context
    });
}