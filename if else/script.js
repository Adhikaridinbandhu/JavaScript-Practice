let age = 17;
// let hasVoterCard = "Yes";

if (age >= 18 && hasVoterCard === "Yes") {
  console.log("You can vote!");
} else if (age >= 18 && hasVoterCard !== "Yes")
  console.log("Get your voter card!");
else {
  console.log("You can't vote!");
}
let num = 9;
if (num % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

let number = 10;
if (number % 2 !== 0) {
  console.log("odd number");
} else {
  console.log("even number");
}
let score = 91;

if (score >= 90 && score <= 100) {
  console.log("Grade A");
} else if (score >= 80 && score < 90) {
  console.log("Grade B");
} else if (score >= 70 && score < 80) {
  console.log("Grade C");
} else if (score >= 60 && score < 70) {
  console.log("Grade D");
} else {
  console.log("Grade F");
}
