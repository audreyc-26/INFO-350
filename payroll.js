const readline = require("readline-sync");
let employees = [];
for (let i = 0; i < 3; i++) {
let name = readline.question("Enter employee name: ");
let wage;
do {
  wage = parseFloat(readline.question("Enter hourly wage: "));
  if (wage <= 0 || isNaN(wage)) {
    console.log("Invalid input. Wage must be positive.");
  }
} while (wage <= 0 || isNaN(wage));
let hours;
do {
  hours = parseFloat(readline.question("Enter hours worked: "));
  if (hours < 0 || hours > 80 || isNaN(hours)) {
    console.log("Invalid input. Hours must be between 0 and 80.");
  }
} while (hours < 0 || hours > 80 || isNaN(hours));
let regularHours = Math.min(hours, 40);
let overtimeHours = Math.max(hours - 40, 0);

let regularPay = regularHours * wage;
let overtimePay = overtimeHours * wage * 1.5;
let totalPay = regularPay + overtimePay;
employees.push({
  name,
  hours,
  regularPay,
  overtimePay,
  totalPay
});
}
let highestPaid = employees[0];

for (let emp of employees) {
  if (emp.totalPay > highestPaid.totalPay) {
    highestPaid = emp;
  }
}

console.log("\nPayroll Report");
console.log("--------------------------------------------------");

for (let emp of employees) {
  let isHighest = emp === highestPaid ? " <-- Highest Paid" : "";

  console.log(`Name: ${emp.name}${isHighest}`);
  console.log(`Hours: ${emp.hours}`);
  console.log(`Regular Pay: $${emp.regularPay.toFixed(2)}`);
  console.log(`Overtime Pay: $${emp.overtimePay.toFixed(2)}`);
  console.log(`Total Pay: $${emp.totalPay.toFixed(2)}`);
  console.log("--------------------------------------------------");
}






