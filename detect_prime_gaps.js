//Get the user's input for a number
const readline = require('readline-sync');
let n = parseInt(readline.question("Enter a positive integer (<= 1000): "));

//Function to check if a number is a positive integer less than or equal to 1000
if (n <= 0 || n > 1000) {
    console.log("Invalid input. Please try again.");
    process.exit();
}

//Function to check if a number is prime
function isPrime(num) {
    if (num <2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0){
            return false;
        }
    }
    return true;
}

//Primes array to store prime numbers
let primes = [];
for (let i = 2; i <=n; i++){
    if (isPrime(i)){
        primes.push(i);
    }
}

//Print the prime numbers
console.log("Primes up to " + n + ": " + primes.join(", ") + "]");

//Findthe prime gaps
let maxGap = 0;
let gapStart = 0;
let gapEnd = 0;
let totalGap = 0;
for (let i = 0; i < primes.length -1; i++){
    let gap = primes[i + 1] - primes[i];

    totalGap += gap;
    if (gap > maxGap){
        maxGap = gap;
        gapStart = primes[i];
        gapEnd = primes[i + 1];
    }
}

//Avaerage gap calculation
let averageGap = totalGap / (primes.length - 1);
averageGap = averageGap.toFixed(2);

//Print the results
console.log("Largest prime gap: " + maxGap + " between " + gapStart + " and " + gapEnd);
console.log("Average prime gap: " + averageGap);