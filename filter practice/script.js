// // Filter //

// let arr = [6, 14, 45, 27, 11, 3, 57, 9];
// // let arr1 = arr.filter(function (val) {
// //   return val > 10;
// // });
// //or//
// let arr1 = arr.filter((val) => val > 10);
// console.log(arr1);

let team = [
  {
    name: "Bipin",
    position: "developer",
  },
  {
    name: "Bandhu",
    position: "team assistance",
  },
  {
    name: "Shiva",
    position: "developer",
  },
  {
    name: "Asal",
    position: "ui developer",
  },
  {
    name: "Sandesh",
    position: "developer",
  },
];
let developer = team.filter((val) => val.position == "developer");
console.log(developer);
