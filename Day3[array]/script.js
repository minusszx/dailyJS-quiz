// ############## Question 1

// Write a program that reverses the order of the elements. without Array.reverse() e.g. arr.reverse()
// A. The array of number
// B. String. For example, if the input is “hello”, the output should be “olleh”.

function reverseArray(arr) {
  let reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return arr;
}

let numArr = [2, 4, 8, 10, 60, 70, 80, 99];
reverseArray(numArr);

let str = "HELLOWORLD";
let revStr = reverseArray(str.split("")).join("");
console.log(revStr);

// ############## Question 2

// Given two strings, write a program to check if they are anagrams of each other. An anagram is a word or phrase
// formed by rearranging the letters of another word or phrase, such as “listen” and “silent”. Your program should
// return True if the two strings are anagrams and False otherwise. An anagram is a word or phrase formed by rearranging
// the letters of a different word or phrase, typically using all the original letters exactly once. For example, “listen” and “silent” are anagrams of each other.

function anagram(str1, str2) {
  const arr1 = str1.split("");
  const arr2 = str2.split("");

  arr1.sort();
  arr2.sort();

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}
console.log(anagram("listen", "silent"));
console.log(anagram("music", "super"));

// ############ Question 3

// Given a string, write a program that checks if it is a palindrome. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.
// For example, “racecar” is a palindrome, while “hello” is not. The program should return True if the string is a palindrome and False if it is not.

function palindrome(string) {
  let leftIndex = 0;
  let rightIndex = string.length - 1;

  while (leftIndex < rightIndex) {
    if (string[leftIndex] !== stromg[rightIndex]) {
      return false;
    }
    leftIndex++;
    rightIndex--;
  }
  return true;
}
console.log(palindrome("racecar"));
console.log(palindrome("world"));
