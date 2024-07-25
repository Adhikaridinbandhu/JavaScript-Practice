// // Filter //

// let arr = [6, 14, 45, 27, 11, 3, 57, 9];
// // let arr1 = arr.filter(function (val) {
// //   return val > 10;
// // });
// //or//
// let arr1 = arr.filter((val) => val > 10);
// console.log(arr1);

// let team = [
//   {
//     name: "Bipin",
//     position: "developer",
//   },
//   {
//     name: "Bandhu",
//     position: "team assistance",
//   },
//   {
//     name: "Shiva",
//     position: "developer",
//   },
//   {
//     name: "Asal",
//     position: "ui developer",
//   },
//   {
//     name: "Sandesh",
//     position: "developer",
//   },
// ];
// let developer = team.filter((val) => val.position === "developer");
// console.log(developer);

// // checkAdult //

// const ages = [22, 32, 16, 37, 14];
// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }
// console.log(result);

// const students = [
//   {
//     name: "kamal",
//     class: 10,
//   },
//   {
//     name: "abhisek",
//     class: 9,
//   },
//   {
//     name: "raj",
//     class: 9,
//   },
//   {
//     name: "sujan",
//     class: 10,
//   },
//   {
//     name: "rupa",
//     class: 10,
//   },
// ];
// let class10 = students.filter((val) => val.class === 10);
// console.log(class10);

let arr = [2, 3, 4, 5, 6];
let arr1 = arr.reduce((val, acc) => val + acc);
console.log(arr1);
