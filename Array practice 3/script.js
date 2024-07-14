// Reverse num
// const reverseNum = (num) => {
//   for (let i = num; i > 0; i--) {
//     console.log(i);
//   }
// };
// reverseNum(5);

// Reverse numbers
function reverseNum(num) {
  let reversed = "";
  let numString = String(num);
  //   console.log(numString);
  for (let i = numString.length - 1; i >= 0; i--) {
    // console.log(i);
    reversed = reversed + numString[i];
    // console.log(reversed);
  }
  return reversed;
}
let result = reverseNum(8792);
console.log(result);

// OR

let numbers = 45678;
const backwardNum = (num) => {
  let numString = num.toString();
  let reverse = "";
  for (let i = numString.length; i > 0; i--) {
    let reminder = num % 10;
    // console.log(reminder);
    num = parseInt(num / 10);
    reverse = reverse + reminder;
  }
  return reverse;
};
let output = backwardNum(numbers);
console.log(output);
