//Get the user's input for a number
const readline = require('readline-sync');
let n = parseInt(readline.question("Enter number of Fibonacci numbers to generate (> 0):"));

if (n<=0) {
    console.log("Invalid input. Please try again.");
    process.exit();
}

//Generate the first n numbers of the Fibonacci sequence
let fib = [0, 1];

for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
}

//Fix output if user asks for 1 number
fib = fib.slice(0, n);

console.log("Full sequence: [" + fib.join(", ") + "]");

//Filter the odd Fibonacci numbers
let odds = [];

for (let i = 0; i < fib.length; i++) {
    if (fib[i] % 2 !== 0) {
        odds.push(fib[i]);
    }
}

console.log("Odd numbers: [" + odds.join(", ") + "]");