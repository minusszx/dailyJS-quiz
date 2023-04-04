///// Question 1 
// You are given an array of integers. Write a program that finds the largest number in the array and returns it.
// The program should take the array as an input and output the largest number. For example, if the array is [4, 6, 8, 2, 10],
// the program should output 10 as it is the largest number in the array. Make sure your program works for arrays of any size and contains only positive integers.

function maxValue(arr) {
    let max = arr[0]
    for (i=1 ; i < arr.length ; i++) {
        if (arr[i] > max ) {
            max = arr[i]
        }
    }
    return max;
}

let arr = [2,4,10,8]
maxValue(arr)




///// Question 2 
// Continuing from the previous question, now you need to find the second-largest number in the same array.

function secondMaxValue (arr) {
    let max = arr[0]
    let secondMax = arr[0]
    for(i=1 ; i < arr.length ; i++){
        if (arr[i] > max) {
            secondMax = max 
            max = arr[i]
        }else if (arr[i] > secondMax){
            secondMax = arr[i]
        }
    }
    return secondMax
}

let arr2 = [2,4,8,10,60,70,80,99]
secondMaxValue(arr2)



///// Question 3 
// You are given an array of integers. Write a program that checks if the array is sorted in non-decreasing order,
//  which means that each element in the array is greater than or equal to the previous element. Your program should 
//  return true if the array is sorted and false otherwise.

function nonDecreasing(arr){
    for(i=1 ; i < arr.length ; i++){
        if (arr[i] < arr [i-1]){
            return false;
        }
    }
    return true;
}

nonDecreasing(arr)
