// ########## Question 1

// Write a program that takes an integer as input and checks if it is a prime number or not. If the number is prime, the program should print
// “Yes, {NUMBER} is prime.” If the number is not prime, the program should print “No, {NUMBER} is not prime.” e.g. “Yes, 13 is prime.”

function prime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return console.log(`No, ${num} is not prime number.`);
    }
  }
  return console.log(`Yes, ${num} is prime number.`);
}

prime(13);
prime(20);

// ########## Question 2

// Given a range of numbers, write a program that finds and prints all the prime numbers within that range. The program should take two inputs,
//  the lower and upper bounds of the range. The program should then iterate through all the numbers in the range and determine if each number is prime.
//  If a number is prime, it should be printed to the console. Finally, the program should print a message indicating the total number of prime numbers found within the range.

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function primeRange(start, end) {
  let count = 0;
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      console.log(i);
      count++;
    }
  }
  console.log(`Found ${count} prime numbers in range ${start} to ${end}`);
}

primeRange(1, 50);
