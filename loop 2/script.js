// find the index of the element in an array

const printIndex = (arr, element) => {
  let elementIndex = arr.indexOf(element);

  return elementIndex;
};
console.log(printIndex([5, 4, 3, 2, 1], 2));

// find the factorial of the num

function numFactorial(num) {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial = factorial * i;
  }
  console.log(factorial);
}
numFactorial(5);
