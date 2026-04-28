const readlineSync = require('readline-sync');

// FIXED: Added parseInt to convert user input from string to integer
let start = parseInt(readlineSync.question("Enter start number: "));
let end = parseInt(readlineSync.question("Enter end number: "));

let count = 0;

for (let i = start; i <= end; i++) {
// FIXED: Changed "if (i / 2 == 0)" to "if (i % 2 == 0)" 
    if (i % 2 == 0) {
        //FIXED: Changed to correct increment counter "count=+ 1;" to "count += 1;"
        count += 1;
    }
}
console.log("Even numbers between " + start + " and " + end + ": " +
count);
