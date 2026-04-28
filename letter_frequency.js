const readline = require('readline-sync');

let str = readline.question("Enter a string: ").toLowerCase();

let frequency = {};
let firstOccurrence = "";
let foundOccurrences = false;

//Count letters
for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char >= 'a' && char <= 'z') {
        if (frequency[char]) {
            frequency[char]++;
        }else{
            frequency[char] = 1;
        }
    }
}

//Print the frequency table
console.log("Letter Frequencies:");

for (let char in frequency) {
    console.log(char + ": " + frequency[char]);
}

//Find the first letter that appears more than once
for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char >= 'a' && char <= 'z') {
        if (frequency[char] > 1) {
            firstOccurrence = char;
            break;
        }
    }
}

console.log("First letter that appears more than once: " + firstOccurrence);