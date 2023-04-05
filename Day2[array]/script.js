// 1. Given an integer array, write a program to:
//      find the sum of all numbers in the array.
//      find the average of all numbers in the array.
//      find the median of the array.
//     *******Hint - Array need to be sorted first********

function solveArry(arr) {
  //sum number in array
  let sum = arr.reduce((total, num) => total + num);

  // average number in array
  let average = sum / arr.length;

  // median of the array
  arr.sort((a, b) => a - b);
  let median;
  if (arr.length % 2 === 0) {
    median = (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
  } else {
    median = arr[Math.floor(arr.length / 2)];
  }
  return { sum, average, median };
}

let arr = [4, 5, 1, 8, 9, 2, 3, 5];

let solving = solveArry(arr);
console.log(solving.sum);
console.log(solving.average);
console.log(solving.median);

// 2.Given a positive integer n, write a program to find its factorial,
// denoted by n!. The factorial of a number is the product of all positive integers
// from 1 to n.  For example, if n = 5, then 5! = 5 x 4 x 3 x 2 x 1 = 120. Write a program that takes
// an integer n as input and outputs its factorial.

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
factorial(5);
