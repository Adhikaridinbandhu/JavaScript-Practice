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

// // check the given number and return whether it is prime or not.

// const isPrime = (num) => {
//   if (num <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };
// let number = 19;
// let result = isPrime(number);
// if (result) {
//   console.log("Prime Number");
// } else {
//   console.log("Not a Prime Number");
// }

//Or //print all the prime nums form 1 to 20

// const isPrime = (num) => {
//   if (num <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };

// for (let i = 1; i <= 20; i++) {
//   if (isPrime(i)) {
//     console.log(i);
//   }
// }
// Q. make ['02025', 'esroH', '4202'] from ["52020", "Horse", "2024", "Apple"]

// const reverseElements = (arr) => {
//   let newArr = [];
//   for (let i = 0; i <= arr.length - 2; i++) {
//     let reversed = arr[i].split("").reverse().join("");
//     newArr.push(reversed);
//   }
//   return newArr;
// };
// let names = ["52020", "Horse", "2024", "Apple"];
// let result = reverseElements(names);
// console.log(result);

// Q. make ['4202', 'esroH'] from ["52020", "Horse", "2024", "Apple"]

// function reverseArrayElements(arr) {
//   let reversedArr = [];
//   for (let i = endingIndex; i >= startingIndex; i--) {
//     let reversedString = arr[i].split("").reverse().join("");
//     reversedArr.push(reversedString);
//   }
//   return reversedArr;
// }
// let elements = ["52020", "Horse", "2024", "Apple"];
// let startingIndex = 1;
// let endingIndex = elements.length - 2;
// let resultReversed = reverseArrayElements(elements);
// console.log(resultReversed);

// Q. make ['el', '4', 'es', '02'] from ["52020", "Horse", "2024", "Apple"]

// const printReversed = (arr) => {
//   let reversedArr = arr.reverse();
//   let newArr = [];
//   for (let i = 0; i <= reversedArr.length - 1; i++) {
//     let reversedString = reversedArr[i].split("").reverse().join("");
//     let str = "";
//     for (j = 0; j < reversedArr[i].length - 3; j++) {
//       str = str + reversedString[j];
//     }
//     newArr.push(str);
//   }
//   return newArr;
// };
// let names = ["52020", "Horse", "2024", "Apple"];
// let result = printReversed(names);
// console.log(result);

// or //

// const reverseArrayElements = (arr) => {
//   let reversedArr = arr.reverse();
//   let newArr = [];
//   for (let i = firstIndex; i <= lastIndex; i++) {
//     let element = arr[i];
//     let elementArr = element.split("");
//     let splicedArr = elementArr.splice(3);
//     let reversedArray = splicedArr.reverse();
//     let stringElement = reversedArray.join("");
//     newArr.push(stringElement);
//   }
//   return newArr;
// };
// let names = ["52020", "Horse", "2024", "Apple"];
// let firstIndex = 0;
// let lastIndex = names.length - 1;
// let result = reverseArrayElements(names);
// console.log(result);

// prototype myUnshift

// Array.prototype.myUnshift = function (...parameter) {
//   for (let i = this.length - 1; i >= 0; i--) {
//     this[i + parameter.length] = this[i];
//   }
//   for (let j = 0; j <= parameter.length - 1; j++) {
//     this[j] = parameter[j];
//   }
//   return this.length;
// };

// let arr = [2, 5, 6];
// arr.myUnshift(10, 5);
// console.log(arr);

const isPrime = (arr) => {
  let newArr = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    console.log(arr[i]);
    for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
      if (arr[i] <= 1) {
        return false;
      } else if (arr[i] % j === 0) {
        return false;
      }
    }
  }
  newArr.push(arr[i]);
  return newArr;
};
let numbers = [1, 2, 3];
let result = isPrime(numbers);
console.log(result);
