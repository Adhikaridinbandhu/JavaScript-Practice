// function myFunction(g1, g2) {
//   return g1 / g2;
// }
// const result = myFunction(8, 2);
// console.log(result);

// function calcAddition(number1, number2) {
//   return number1 + number2;
// }
// const result = calcAddition(6, 9);
// console.log(result);

// function square(number) {
//   return number * number;
// }
// const x = square(4);
// console.log(x);

// function printMahadev() {
//   for (let i = 0; i < 10; i++) {
//     console.log("Mahadev");
//   }
// }
// printMahadev();

// function msg(firstName) {
//   function hey() {
//     console.log("Hey" + firstName);
//   }
//   return hey();
// }
// msg("Ravi");

// function msg(firstName) {
//   function welcome() {
//     console.log("Welcome" + firstName);
//   }
//   return welcome();
// }
// msg("Shiva");

// const product = (num1, num2, num3, num4) => {
//   console.log(num1 * num2 * num3 * num4);
// };
// for (let i = 5; i < 9; i++) {
//   product(i, i + 5, i + 10, i + 15);
// }
// product();

// const divideNum = () => {
//   let a = 20;
//   let b = 10;
//   return a / b;
// };
// let result = divideNum();
// console.log(result);

// function declaration

// function sum() {
//   let addition = 0;
//   let a = 5;
//   let b = 6;
//   addition = a + b;
//   console.log(addition);
// }
// sum();

// function expression

// let addNumbers = function (a, b) {
//   let sum = 0;
//   sum = a + b;
//   console.log(sum);
// };
// addNumbers(2, 3);
// addNumbers(6, 5);

// arrow function

// const addTwoNums = (num1, num2) => {
//   let sum = 0;
//   sum = num1 + num2;
//   return sum;
// };
// let result = addTwoNums(2, 3);
// console.log(result);

// let num1 = 5;
// let num2 = 6;
// console.log(addTwoNums(num1, num2));

// arrow function

// const add = () => {
//   let a = 2;
//   let b = 3;
//   return a + b;
// };
// let sum = add();
// console.log(sum);

// function printVowels(input) {
//   input = input.toLowerCase();
//   const vowels = "aeiou";

//   for (let char of input) {
//     if (vowels.includes(char)) {
//       console.log(char);
//     }
//   }
// }
// printVowels("AEROPLANE");

// function printOddNum(num) {
//   for (let i = 0; i <= num; i++) {
//     if (i % 2 !== 0) {
//       console.log(i);
//     }
//   }
// }
// printOddNum(12);

// function sum(a, b) {
//   return a + b;
// }
// let result = sum(4, 5);
// console.log(result);

function reverseName(name) {
  let newArray = name.split("").reverse().join("");
  console.log(newArray);
}
reverseName("bandhu");
