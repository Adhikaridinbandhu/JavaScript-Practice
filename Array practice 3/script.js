// // Reverse num
// // const reverseNum = (num) => {
// //   for (let i = num; i > 0; i--) {
// //     console.log(i);
// //   }
// // };
// // reverseNum(5);

// print each reversed num

// const reverseNum = (num) => {
//   let numString = num.toString();
//   let reversed = "";
//   for (let i = numString.length - 1; i >= 0; i--) {
//     reversed = reversed + numString[i];
//   }
//   for (let j = 0; j < reversed.length; j++) {
//     console.log(reversed[j]);
//   }
// };
// reverseNum(2468);

// // Reverse numbers
// function reverseNum(num) {
//   let reversed = "";
//   let numString = String(num);
//
//   for (let i = numString.length - 1; i >= 0; i--) {
//
//     reversed = reversed + numString[i];
//
//   }
//   return reversed;
// }
// let result = reverseNum(8792);
// console.log(result);

// // OR

// let numbers = 45678;
// const backwardNum = (num) => {
//   let numString = num.toString();
//   let reverse = "";
//   for (let i = numString.length; i > 0; i--) {
//     let remainder = num % 10;
//     // console.log(reminder);
//     num = parseInt(num / 10);
//     reverse = reverse + remainder;
//   }
//   return reverse;
// };
// let output = backwardNum(numbers);
// console.log(output);

// Practice about split in string

// let text = "How are you doing?";
// let newText = text.split("");
// console.log(newText[1 ]);

// let text = "How are you doing?";
// let newText = text.split("o");
// console.log(newText);

// let text = "How are you doing?";
// let newText = text.split();
// console.log(newText);

// Reverse the number using function (split, reverse, join)

// const reverseName = (str) => {
//   let reversedText = str.split("");
//   console.log(reversedText);
//   let reversed = [];
//   for (let i = reversedText.length - 1; i >= 0; i--) {
//     console.log(reversedText[i]);
//     reversed.push(reversedText[i]);
//   }
//   console.log(reversed.join(""));
// };
// let name = "Bandhu";
// reverseName(name);

// OR

// let name = "Bandhu";
// console.log(name.split("").reverse().join(""));
