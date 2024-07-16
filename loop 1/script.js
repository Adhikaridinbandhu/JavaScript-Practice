// // Reverse
// const reverseNames = (cars) => {
//   let newVar = [];
//   for (let i = cars.length - 1; i >= 0; i--) {
//     newVar.push(cars[i]);
//   }
//   console.log(newVar);
// };
// reverseNames(["Hundai", "Toyoto", "BYD", "Tata"]);

// // or

// function reverseNums(nums) {
//   let newOutput = [];
//   for (let i = 0; i < nums.length; i++) {
//     newOutput.unshift(nums[i]);
//   }
//   return newOutput;
// }
// let numbers = ["1", "2", "4", "7", "8"];
// const reversedNumArryay = reverseNums(numbers);
// console.log(reversedNumArryay);

// // or

// let laptops = ["Lenovo", "Mac", "Dell", "Hp"];
// console.log(laptops.reverse());

// let vehicles = ["bus", "truck", "van", "car"];
// let reversedResult = vehicles.reverse();
// console.log(reversedResult);

//string reverse

// const reverseString = (name) => {
//   let newStr = "";
//   for (let i = name.length - 1; i >= 0; i--) {
//     newStr = newStr + name[i];
//   }
//   return newStr;
// };
// let name = "bandhu";
// const reversedName = reverseString(name);
// console.log(reversedName);

// // or

// function reverseName(name) {
//   let nameArray = name.split("");
//   console.log(nameArray);
//   let reversedArray = nameArray.reverse();
//   console.log(reversedArray);
//   let joinName = reversedArray.join("");
//   console.log(joinName);
// }
// reverseName("bandhu");

// // or

// let text = "How are you?";
// console.log(text.split("").reverse().join(""));

// const reverseArrayElements = (animals) => {
//   let newArr = animals.reverse();
//   let newElements = [];
//   for (let i = 0; i <= newArr.length - 1; i++) {
//     let reversedStrArr = newArr[i].split("").reverse().join("");
//     newElements.push(reversedStrArr);
//   }
//   return newElements;
// };
// let result = reverseArrayElements(["dog", "cat", "tiger"]);
// console.log(result);

// or

// const reverseArrStr = (arr) => {
//   let newArr = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     let reversedArrayString = arr[i].split("").reverse().join("");
//     newArr.push(reversedArrayString);
//   }
//   return newArr;
// };
// let result = reverseArrStr(["cat", "dog", "cow"]);
// console.log(result);

// print muliplication table from 1 to 10.

// const printMulTable = (num) => {
//   for (let i = 1; i <= num; i++) {
//     console.log(`Multiplication Table of ${i}`);
//     for (let j = 1; j <= 10; j++) {
//       console.log(`${i}*${j}=${i * j}`);
//     }
//   }
// };
// printMulTable(10);

// Write a program that prints the multiplication table of a given number in an array and then prints the array.
// const multiplicationTable = (num) => {
//   let newArr = [];
//   for (let i = 1; i <= 10; i++) {
//     newArr.push(num * i);
//   }
//   return newArr;
// };
// let number = 5;
// let result = multiplicationTable(number);
// console.log(result);

// Write a program that finds the largest product in the multipication tables from 1 to 10.

// const findLargestProduct = (num) => {
//   let newArr = [];

//   for (let i = 1; i <= 10; i++) {
//     newArr.push(num * i);
//   }
//   let largestProduct = newArr[0];
//   for (let j = 1; j <= newArr.length - 1; j++) {
//     if (newArr[j] > largestProduct) {
//       largestProduct = newArr[j];
//     }
//   }
//   return largestProduct;
// };
// console.log(findLargestProduct(3));

// Or

// let largestProduct = 0;
// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     let product = i * j;
//     if (product > largestProduct) {
//       largestProduct = product;
//     }
//   }
// }
// console.log(largestProduct);
