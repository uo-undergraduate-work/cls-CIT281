/*
    CIT 281 Assignment 1
    Name: Ethan Reinhart
*/
// Array declaration with all lowercase letters
let chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
// Returns a random character
function getRandomCharacter() {
    // Gets random integer between 0-25 (inclusive) and uses it as index for character array
    return chars[getRandomInteger(0,26)];
}
// Returns a random string of length between minLength-maxLength (inclusive)
function getRandomString(minLength, maxLength) {
    // Initialize result
    let result = "";
    // Randomly select length
    let length = getRandomInteger(minLength, maxLength+1);
    // Iterate over length and add a random character each time
    for (let i = 0; i < length; i++) {
        result += getRandomCharacter();
    }
    // Return the result
    return result;
}
// Get the random string
let string = getRandomString(5, 25)
console.log(string)
// console.log(string.length)