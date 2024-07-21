// Q.Give an array of numbers, create a new array where each element is the square of
// the original number using the 'map()' function.

// for loop//

// const squareArray = (arr) => {
//   let newArr = [];
//   let square = 0;
//   for (let i = 0; i <= arr.length - 1; i++) {
//     square = arr[i] * arr[i];
//     newArr.push(square);
//   }
//   return newArr;
// };
// let numbers = [2, 3, 5, 6, 8];
// let result = squareArray(numbers);
// console.log(result);

// for of//

// const squareArray = (arr) => {
//   let newArr = [];
//   let square = 0;
//   for (let ele of arr) {
//     square = ele * ele;
//     newArr.push(square);
//   }
//   return newArr;
// };
// let result = squareArray([2, 4, 5, 6, 8]);
// console.log(result);

// map //

// let array = [2, 3, 4, 6, 8];
// let newArr = array.map((ele) => ele * ele);
// let result = newArr;
// console.log(result);

// Q. Write a function that an array of strings an returns a new
// array with the lengths of each string using the 'map()' function.

// const lengthStrings = (arr) => {
//   let newArr = [];
//   for (let i = 0; i <= arr.length - 1; i++) {
//     let stringLength = arr[i].length;
//     newArr.push(stringLength);
//   }
//   return newArr;
// };
// let names = ["Bipin", "Bandhu", "Shiva", "Lekhnath"];
// let result = lengthStrings(names);
// console.log(result);

// for of//

// const lengthStrings = (arr) => {
//   let newArr = [];
//   for (let name of arr) {
//     let stringLength = name.length;
//     newArr.push(stringLength);
//   }
//   return newArr;
// };
// let names = ["Bipin", "Bandhu", "Shiva", "Lekhnath"];
// let result = lengthStrings(names);
// console.log(result);

// map //

// let names = ["Bipin", "Bandhu", "Shiva", "Lekhnath"];
// let lengthOfstring = names.map((name) => name.length);
// console.log(lengthOfstring);

// Q. Write a function that takes an array of numbers and returns a new array where each
// element is doubled.

// const doubleArray = (arr) => {
//   let doubledArray = [];
//   let value = 0;
//   for (let i = 0; i <= arr.length - 1; i++) {
//     value = arr[i] * 2;
//     doubledArray.push(value);
//   }
//   return doubledArray;
// };
// let numbers = [2, 3, 5, 7, 8];
// let output = doubleArray(numbers);
// console.log(output);

// for of//

// const doubleArray = (arr) => {
//   let element = 0;
//   let newArr = [];
//   for (let ele of arr) {
//     element = ele * 2;
//     newArr.push(element);
//   }
//   return newArr;
// };
// let numbers = [2, 3, 5, 7, 8];
// let output = doubleArray(numbers);
// console.log(output);

// map//

// let numbers = [2, 3, 5, 7, 8];
// let doubledArray = numbers.map((ele) => ele * 2);
// let result = doubledArray;
// console.log(result);

// Q. change the price in dollors in euros
// (assume 1 dollor= 0.85 euros)

// const priceConversion = (arr) => {
//   let newPrice = [];
//   let euros = 0.85;
//   let convertedPrice = 0;
//   for (let i = 0; i <= arr.length - 1; i++) {
//     convertedPrice = arr[i] * euros;
//     newPrice.push(convertedPrice);
//   }
//   return newPrice;
// };
// let priceIn$ = [150, 120, 90, 17, 30];
// let result = priceConversion(priceIn$);
// console.log(result);

// map//

// let $ = 1;
// let euros = 0.85;
// let prices$ = [10, 20, 30, 40];
// let convertedPrice = prices$.map((ele) => ele * euros);
// console.log(convertedPrice);

// Q. Write a function that takes an array of strings and returns a new array
// with all the strings converted to uppercase.

// const upperCaseString = (arr) => {
//   let newArr = [];
//   for (let i = 0; i <= arr.length - 1; i++) {
//     let element = arr[i];
//     let upperCasedString = element.toUpperCase();
//     newArr.push(upperCasedString);
//   }
//   return newArr;
// };
// let places = ["waling", "jimuha", "kathmandu", "mirmi"];
// let result = upperCaseString(places);
// console.log(result);

// for of //

// const upperCaseString = (arr) => {
//   let capitalStrings = [];
//   for (let str of arr) {
//     let upperCasedString = str.toUpperCase();
//     capitalStrings.push(upperCasedString);
//   }
//   return capitalStrings;
// };
// let places = ["Waling", "Jimuha", "Kathmandu", "Mirmi"];
// let result = upperCaseString(places);
// console.log(result);

// map //

// let places = ["Waling", "Jimuha", "Kathmandu", "Mirmi"];
// let upperCasedString = places.map((str) => str.toUpperCase());
// console.log(upperCasedString);

// Q. Write a function that takes an array of numbers and return a new
// array  with each number increased by 5.

// map//

// let numbers = [2, 3, 5, 8, 11, 6];
// let increasedNumbers = numbers.map((num) => num + 5);
// console.log(increasedNumbers);

// for of //

const increaseNum = (arr) => {
  let increasedNumbers = [];
  let newNum = 0;
  for (let num of arr) {
    newNum = num + 5;
    increasedNumbers.push(newNum);
  }
  return increasedNumbers;
};
let numbers = [2, 9, 5, 8, 11, 6];
let resultArr = increaseNum(numbers);
console.log(resultArr);
