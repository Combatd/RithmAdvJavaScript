/*
Create a constructor function for a Person. 
Each person should have a firstName, lastName, favoriteColor and favoriteNumber.
*/

/*
Write a method called multiplyFavoriteNumber that takes in a number 
and returns the product of the number and the Person's favorite number
*/
function Person(firstName, lastName, favoriteColor, favoriteNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;

    this.multiplyFavoriteNumber = (number) => {
        return this.favoriteNumber * number;
    }
}

let sakuraMiko = new Person('Miko', 'Sakura', 'Pink', 2);
console.log(sakuraMiko.multiplyFavoriteNumber(5));