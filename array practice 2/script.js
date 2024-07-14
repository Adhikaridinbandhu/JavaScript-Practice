// //Given an arrray and target, return indices of  two numbers in array, such that they add upto target.
// //They may assume that, each input would have exactly one solution,  and you may not use the same elements twice. You may return the answer in any order.
// // Eg. nums=[2, 7, 11,15], target; 9 =>[0, 1]

// let nums = [2, 7, 11, 15];
// let target = 9;
// const targetArray = (arr) => {
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         newArray.push (i, j);
//       }
//     }
//   }
//   return newArray;
// };
// let result = targetArray(nums);
// console.log(result);

// // Reverse the array using unshift function

// const reverseArray = (arr) => {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr.unshift(arr[i]);
//   }
//   return newArr;
// };
// let numbers = [1, 2, 3, 4, 5];
// let reversedResult = reverseArray(numbers);
// console.log(reversedResult);


// reverse num ="45678"
 let number =45678
 const reverseNum =(num)=>
 {
  let numString = num.toString()
  let reversed =""
  for(let i=numString.length; i>=0; i--)
  {
let rem = 45678 % 10 
reversed = reversed+rem
num = num/10
  } 

  



  //write good things about bipin (1 page)