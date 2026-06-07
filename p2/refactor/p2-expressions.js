/*
    CIT 281 Assignment 2
    Name: Ethan Reinhart
*/
// Array declaration with all lowercase letters
let chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// Returns a random number between min (inclusive) and max (exclusive)
const getRandomInteger = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
// Returns a random character
const getRandomCharacter = function() {
    // Gets random integer between 0-25 (inclusive) and uses it as index for character array
    return chars[getRandomInteger(0,26)];
}

// Returns a random lowercase letter
const getRandomLetter = function() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return alphabet[Math.floor(Math.random() * alphabet.length)];
};

// Returns a random string of length between minLength-maxLength (inclusive)
const getRandomString = function(minLength, maxLength) {
    // Initialize result
    let result = "";
    // Randomly select length
    let length = getRandomInteger(minLength, maxLength+1);
    // Iterate over length and add a random character each time
    for (let i = 0; i < length; i++) {
        result += getRandomLetter();
    }
    // Return the result
    return result;
}

const getSortedString = function(string) { 
    return [...string].sort().join('')
};

// Get the random string
let string = getRandomString(5, 25)
console.log(string)
// console.log(string.length)
