const readline = require("readline-sync");
let currentAvg;

do {
  currentAvg = parseFloat(readline.question("Enter your current average: "));
  if (currentAvg < 0 || currentAvg > 100 || isNaN(currentAvg)) {
    console.log("Invalid input. Must be between 0 and 100.");
  }
} while (currentAvg < 0 || currentAvg > 100 || isNaN(currentAvg));
let scores = [];

while (true) {
  let input = readline.question("Enter a hypothetical final exam score (or type 'done'): ");

  if (input.toLowerCase() === "done") break;

  let score = parseFloat(input);

  if (score < 0 || score > 100 || isNaN(score)) {
    console.log("Invalid score. Must be 0–100.");
  } else {
    scores.push(score);
  }
}
function getLetterGrade(avg) {
  if (avg >= 90) return "A";
  else if (avg >= 80) return "B";
  else if (avg >= 70) return "C";
  else if (avg >= 60) return "D";
  else return "F";
}
console.log("\nGrade Forecast:");
console.log("-----------------------------------");

for (let score of scores) {
  let finalAvg = (currentAvg * 0.75) + (score * 0.25);
  let letter = getLetterGrade(finalAvg);

  let status;
  if (finalAvg > currentAvg) status = "Improved";
  else if (finalAvg < currentAvg) status = "Declined";
  else status = "Stayed the same";

  console.log(`Final Exam Score: ${score}`);
  console.log(`Final Average: ${finalAvg.toFixed(2)}`);
  console.log(`Letter Grade: ${letter}`);
  console.log(`Status: ${status}`);
  console.log("-----------------------------------");
}