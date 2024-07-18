// // find the index of the element in an array

// const printIndex = (arr, element) => {
//   let elementIndex = arr.indexOf(element);

//   return elementIndex;
// };
// console.log(printIndex([5, 4, 3, 2, 1], 2));

// Or

// function checkIndex(arr, element) {
//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] === element) {
//       return i;
//     } else {
//       return -1;
//     }
//   }
// }
// let result = checkIndex([1, 2, 3, 4, 5], 5);
// console.log(result);

// OR

// function checkIndex(arr, element) {
//   for (let i = 0; i <= arr.length - 1; i++) {
//     if (arr.indexOf(element) === i) {
//       return i;
//     }
//   }
// }
// let result = checkIndex([1, 2, 3, 4, 5], 4);
// console.log(result);

// // find the factorial of the num

// function numFactorial(num) {
//   let factorial = 1;
//   for (let i = 1; i <= num; i++) {
//     factorial = factorial * i;
//   }
//   console.log(factorial);
// }
// numFactorial(5);

// Q. write a function to retuern the all indices of an array where the target value appears in.

// function printIndices(arr, value) {
//   let indices = [];
//   for (let i = 0; i <= arr.length - 1; i++) {
//     if (arr[i] === value) {
//       indices.push(i);
//     }
//   }
//   return indices;
// }
// let numbers = [1, 2, 2, 3, 6, 2];
// number = 2;
// let output = printIndices(numbers, number);
// console.log(output);

// Print the power of given num  for 5 times .

// function printPower(num) {
//   let power = 1;
//   for (let i = 1; i <= 5; i++) {
//     power = power * num;
//     console.log(power);
//   }
// }
// printPower(2);

// Take one string as a parameter and  print if the word is a palindrome or not.

// function isPalindrome(str) {
//   let rev = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     rev = rev + str[i];
//   }
//   if (rev == str) {
//     return true;
//   } else {
//     return false;
//   }
// }
// let string = "racecar
// // ";
// let checkedPalindrome = isPalindrome(string);
// if (checkedPalindrome) {
//   console.log("The value is a palindrome.");
// } else {
//   console.log("The value isn't a palindrome.");
// }

// //print tree  from ['t', 'r', 'e', 'e]

// let arr = ["t", "r", "e", "e"];
// let joinString = arr.join("");
// let string = joinString.charAt(0).toUpperCase() + joinString.slice(1);
// console.log(string);

// // print cube from 1 upto given num.
// const printCube = (num) => {
//   let cube = 0;
//   for (let i = 1; i <= num; i++) {
//     cube = i * i * i;
//     console.log(cube);
//   }
// };
// printCube(5);

// // or, print the cube of given num.

// let num = 5;
// let cube = num * num * num;
// console.log(cube);
