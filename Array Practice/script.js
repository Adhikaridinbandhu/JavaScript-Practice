// Array//
// let numbers = [10, 20, 30, 40, 50];
// console.log(numbers);

//  Add element at last//

// let vegetables = ["tomato", "potato", "onion", "cauliflower"];
// vegetables.push("raddish", "pea");
// console.log(vegetables);

// Element remove form back//

// let villagesGalyang = [
//   "Dimik",
//   "Karmachour",
//   "Laleng",
//   "Karadi",
//   "Balpuk",
//   "Mirdi",
// ];
// villagesGalyang.pop();
// console.log(villagesGalyang);

// Element remove from begining//

// let villagesGalyang = [
//   "Hugi",
//   "Dimik",
//   "Karmachour",
//   "Laleng",
//   "Karadi",
//   "Balpuk",
// ];
// villagesGalyang.shift();
// console.log(villagesGalyang);

// Element add at begining//

// let vegetables = ["tomato", "potato", "onion", "cauliflower"];
// vegetables.unshift("raddish", "pea");

// console.log(vegetables);

// Element remove//(4,1) means go to 4 and remove only 1 element.

// let friends = ["Bipin", "Madhav", "Laxman", "Kamal", "Harkhe", "Gore"];
// friends.splice(4, 1);
// console.log(friends);

// Changing elements//

// let dailyActivities = ["eat", "work", "sleep"];
// dailyActivities[1] = "exercise";
// console.log(dailyActivities);

// 1.
// let cars = ["Tesla", "BMW", "Kia", "Hundai", "Toyata"];
// console.log(cars);

// 2.
// let cars = ["Tesla", "BMW", "Kia", "Hundai", "Toyata"];
// cars.push("Tata", "Suzuki");
// console.log(cars);

// 3.
// let cars = ["Tesla", "BMW", "Hundai", "Toyata"];
// cars.unshift("Tata", "Suzuki");
// console.log(cars);

// 4.
// let cars = ["Eicher", "Tesla", "BMW", "Kia", "Hundai", "Toyata"];
// cars.shift();
// console.log(cars);

// 5.
// let cars = ["Tesla", "BMW", "Kia", "Hundai", "Toyata", "Bajaj"];
// cars.pop();
// console.log(cars);

// 6.
// const arr1 = ["Juke", "Shyakhuri", "Dhaddu"];
// const arr2 = ["Likhe", "Chari", "Jogi"];
// const arr3 = ["Fuse", "Daine"];
// const children = arr1.concat(arr2, arr3);
// console.log(children);

// 7.
// let friends = ["Juke", "Shyakhure", "Dhaddu", "Likhe", "Chari"];
// let removedFriends = friends.splice(1, 2);
// console.log(friends);
// console.log(removedFriends);

// 8.
// let friends = ["Juke", "Shyakhure", "Dhaddu", "Likhe", "Chari"];
// friends.splice(1, 0, "Jogi");
// console.log(friends);

// 9.
// let friends = ["Juke", "Shyakhure", "Dhaddu", "Likhe", "Chari"];
// friends.splice(1, 2, "Jogi");
// console.log(friends);

// 10.
// let fruitsString = "apple, banana";
// let fruitsArray = fruitsString.split(",");
// console.log(fruitsArray);

// 11.
// let fruits = ["Apple", "Banana"];
// let fruitsString = fruits.join(",");
// console.log(fruitsString);

// 12. Reverse
// let array = [1, 2, 3, 4, 5];
// function reverseArray(arr) {
//   return arr.reverse();
// }
// console.log(reverseArray(array));

// 13. Reduce
// let array = [1, 2, 3, 4, 5];
// function sumElements(arr) {
//   return arr.reduce((acc, val) => acc + val, 0);
// }
// console.log(sumElements(array));

// 14. Filter
// let array = [1, 2, 3, 4, 5, 6];
// function filterEven(arr) {
//   return arr.filter((num) => num % 2 === 0);
// }
// console.log(filterEven(array));

// 15;

// let array = [1, 2, 2, 2, 3, 3, 3, 4];
// function countOccurences(arr, element) {
//   return arr.filter((x) => x === element).length;
// }
// console.log(countOccurences(array, 2));

// 16. //map//
// let array = [1, 2, 3, 4, 5, 6];
// function multiplyElements(arr, multiplier) {
//   return arr.map((num) => num * multiplier);
// }
// console.log(multiplyElements(array, 2));

// 17. //MinMax//
// let array = [1, 2, 3, 4, 5];
// function findMinMax(arr) {
//   return { min: Math.min(...arr), max: Math.max(...arr) };
// }
// console.log(findMinMax(array));
