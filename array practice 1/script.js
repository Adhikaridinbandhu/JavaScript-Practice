// const reversedNum = (arr) => {
//   let reversed = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversed.push(arr[i]);
//   }
//   return reversed;
// };
// let array = [2, 4, 5, 1, 3];
// let reversedResult = reversedNum(array);
// console.log(reversedResult);

//reversing a string

// const reversedString = (str) => {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed = reversed + str[i];
//   }
//   return reversed;
// };
// let string = "monkey";
// let reversedResult = reversedString(string);
// console.log(reversedResult);

//print evennumbers from an array

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// let evenNumber = numbers.filter((num) => num % 2 == 0);
// console.log(evenNumber);

// function returns the sum of the sqrt of numbers

// const sumOfSquare = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + Math.sqrt(arr[i]);
//   }
//   return sum;
// };
// let array = [4, 9, 16, 25, 36];
// let resultSum = sumOfSquare(array);
// console.log(resultSum);

//removing duplicate

// function removeDuplicates(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (newArr.indexOf(arr[i]) === -1) {
//       console.log(arr[i]);
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// let array = [1, 2, 7, 3, 4, 4, 3, 2];
// let removedResult = removeDuplicates(array);
// console.log(removedResult);

//sum of even

// const sumOfEven = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       sum = sum + arr[i];
//     }
//   }
//   return sum;
// };
// let array = [2, 4, 5, 6, 8, 9];
// let resultSum = sumOfEven(array);
// console.log(resultSum);

//product of all elements

// const productOfArray = (arr) => {
//   let product = 1;

//   for (let i = 0; i < arr.length; i++) {
//     product = product * arr[i];
//   }
//   return product;
// };
// let array = [1, 2, 3, 4, 5, 6];
// let resultProduct = productOfArray(array);
// console.log(resultProduct);

// count occurrence

// const countOccurrence = (arr, value) => {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === value) {
//       count++;
//     }
//   }
//   return count;
// };
// console.log(countOccurrence([1, 2, 3, 2, 4, 2, 5], 2));

//prime number

const primeNum = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % 2 === 0) {
      return false;
    }
  }
  return true;
};
function checkPrimeNum(arr) {
  let prime = [];
  for (let i = 0; i < arr.length; i++) {
    prime.push(primeNum(arr[i]));
  }
  return prime;
}
let numbers = [1, 2, 3, 4, 5, 6, 7];
let resultPrime = checkPrimeNum(numbers);
console.log(resultPrime);
