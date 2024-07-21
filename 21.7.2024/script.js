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
