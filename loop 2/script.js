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

function printPower(num) {
  let power = 1;
  for (let i = 1; i <= 5; i++) {
    power = power * num;
    console.log(power);
  }
}
printPower(2);
