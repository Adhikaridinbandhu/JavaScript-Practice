// 1 negative and positive
// let number = 0;
// if (number > 0) {
//   console.log("Positive");
// } else {
//   console.log("Negative");
// }

// 2 even and odd
// let number = 9;
// if (number % 2 === 0) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }

// 3 grade for score
// let score = 96;
// if (score >= 90) {
//   console.log("A");
// } else if (score >= 80 && score < 90) {
//   console.log("B");
// } else if (score >= 70 && score < 80) {
//   console.log("C");
// } else if (score >= 60 && score < 70) {
//   console.log("D");
// } else {
//   console.log("F");
// }
// 4 finding leap year
// let year = 2020;
// if (year % 4 === 0) console.log("Leap Year");
// else {
//   console.log("Not a leap year");
// }
// 5 for loop for average of 1 to 10

// let sum = 0;
// const count = 10;
// for (let i = 1; i <= 10; i++) {
//   sum += i;
// }
// console.log(sum / count);

// 6 for loop for sum of 1 to 10.
// let sum1 = 0;
// for (i = 1; i <= 10; i++) {
//   sum1 = sum1 + i;
// }
// console.log(sum1);

// 7 function
// printing 1 to 10

// function printNum(number) {
//   for (let i = 1; i <= number; i++) {
//     console.log(i);
//   }
// }
// printNum(10);

// printing odd numbers 1 to 20.
// function printOdd(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 2 !== 0) {
//       console.log(i);
//     }
//   }
// }
// printOdd(20);

// sum of 1 to 50.

// function sumNum(num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     sum = sum + i;
//   }
//   console.log(sum);
// }
// sumNum(50);

// print multiples of 5.

// const number = parseInt(prompt("Enter an integer:"));
// for (let i = 1; i <= 10; i++) {
//   const result = i * number;
//   console.log(`${number}* ${i}=${result}`);
// }

// OR

// function multipleNum(number) {
//   for (let i = 1; i <= 10; i++) {
//     const result = i * number;
//     console.log(`${number}*${i}=${result}`);
//   }
// }
// multipleNum(5);

// factorial of a number

// function factorialNum(num) {
//   let factorial = 1;
//   for (let i = 1; i <= num; i++) {
//     factorial = factorial * i;
//   }
//   console.log(factorial);
// }
// factorialNum(5);s

// print power of 6.

// function powerNum(num) {
//   let power = 1;
//   for (let i = 1; i <= num; i++) {
//     power = power * 2;
//   }
//   console.log(power);
// }
// powerNum(6);

// numbers in reverse order

// function reverseNum(num) {
//   for (let i = num; i > 0; i--) {
//     console.log(i);
//   }
// }
// reverseNum(10);

//  sum of even numbers(10)
// function sumEven(num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     if (i % 2 == 0) {
//       sum = sum + i;
//     }
//   }
//   console.log(sum);
// }
// sumEven(10);

// print squares of 1 to 10.

// function printSquare(num) {
//   for (let i = 1; i <= num; i++) {
//     console.log(i * i);
//   }
// }
// printSquare(10);
//  print first 10 fibonacci numbers.

// function printFibonacci(num) {
//   let n1 = 0,
//     n2 = 1,
//     nextTerm;

//   console.log(n1);
//   console.log(n2);

//   for (let i = 1; i <= num; i++) {
//     nextTerm = n1 + n2;
//     console.log(nextTerm);
//     n1 = n2;
//     n2 = nextTerm;
//   }
// }
// printFibonacci(8);

//  sum  of odd  numbers.

// function sumOdd(num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     if (i % 2 !== 0) {
//       sum = sum + i;
//     }
//   }
//   console.log(sum);
// }
// sumOdd(20);

// sum of multiplies of 3

// function sumMultipication(num) {
//   let sum = 0;
//   for (let i = 1; i <= 10; i++) {
//     const result = i * num;
//     sum = sum + result;
//     console.log(`${num}* ${i}=${result}`);
//   }
//   console.log(sum);
// }
// sumMultipication(3);

//  print cubes

// function printCube(num) {
//   result = 0;
//   for (let i = 1; i <= num; i++) {
//     result = i * i * i;
//     console.log(result);
//   }
// }
// printCube(10);

// function gradeNum(score) {
//   if ((score) => 90) {
//     console.log("A");
//   }
// }
// gradeNum(92);

// let number = 5;
// let stringNumber = number.toString();
// {
//   console.log(stringNumber);
//   console.log(typeof stringNumber);
// }
// if (stringNumber !== 5) {
//   console.log("Hello");
// } else if (stringNumber === "5") {
//   console.log("Hello World");
// } else {
//   console.log("It's Okay");
// }

// function sumTwoNumbers(a, b) {
//   return a + b;
// }

// let result = sumTwoNumbers(5, 4);
// console.log(result);

// let numbers = [2, 4, 6, 8, 10];
// const removeNum = (arr) => {
//   let removed = arr.pop();
//   console.log(removed);
// };
// removeNum(numbers);
// console.log(numbers);

// const removeEle = (arr) => {
//   let removedEle = arr.shift();
//   return arr;
//   console.log(removedEle);
// };
// let names = ["anil", "dhurba", "rahul", "janak"];
// let result = removeEle(names);
// console.log(result);

// const removeEle = (arr) => {
//   arr.shift();
//   console.log(arr);
// };
// let names = ["anil", "dhurba", "rahul", "janak"];
// removeEle(names);

// removeEle([15, 25, 35, 45]);

// let places = ["Kathmandu", "Dharan", "Chitwan", "Shurkhet", "Hetauda"];
// const removeEle = (arr) => {
//   let removedEle = arr.splice(1, 1);
//   console.log(removedEle);
//   return arr;
// };
// let result = removeEle(places);
// console.log(result);

// let fruits = ["apple", "banana", "orange", "papaya", "cherry"];
// let removedEle = fruits.slice(2, 4);
// console.log(removedEle);

// let nouns = ["man", "cow", "people", "police"];
// let upperCasedStr = nouns.map(function (str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// });
// console.log(upperCasedStr);
