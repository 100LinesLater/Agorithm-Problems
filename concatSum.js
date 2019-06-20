// Given an array of numbers, return the sum of all possible concatenations
// of any two numbers of the array including itself
// ex: [1, 2, 3] => 11 + 12 + 13 + 21 + 22 + 23 + 31 + 32 + 33 = 198
// ex: [8] => 88

const concatSum = (arr) => {
  let sum = 0;
  let multiplier = arr.map(x => Math.pow(10, x.toString().length)).reduce((x,y) => x+y, 0);

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i] * (multiplier + arr.length);
  }

  return sum;
};

let arr1 = [8];
console.log(concatSum(arr1));
let arr2 = [1,2,3];
console.log(concatSum(arr2));
let arr3 = [10, 8];
console.log(concatSum(arr3));