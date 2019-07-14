// Write a function "max" that takes an array of numbers returns the highest
// number in the array.

// works for all but 0 with out 'if' statment
// rearranged to accending then popped the last index value
function max(ary){
    var numbers = [];
    if (ary.length === 0){
    return 0}
    else { 
        ary.sort(function(a, b){return a - b})
}
    return ary.pop();
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "sumNumbers" which is given an array of numbers and returns
// the sum of the numbers.
// Example:
// sumNumbers([1, 4, 8]) --> 13

// declare a variable = 0
// then create a loop to cycle through each number 
// now add them 

function sumNumbers(num){
    var total = 0
    for (var i = 0; i < num.length; i++){
        total += num[i]

    }
    return total
}



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "positives" which is given an array of numbers and
// returns a new array containing only the positive numbers within the given array.
// Examples:
// positives([1, -3, 5, -3, 0]) --> [1, 5]
// positives([1, 2, 3]) --> [1, 2, 3]
// positives([-1, -2, -3]) --> []

// create empty array to push into
// creat a loop to cycle the array
// use if to give it conditions
// push into new array
// watch where the return goes

function positives (num){
    var newArray = []
    for (var i = 0; i < num.length; i++){
        if (num[i] > 0) {
            newArray.push(num[i])
        }
       
    }
    return newArray
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "evens" which takes an array of numbers and returns a new
// array containing only the even numbers in the given array.
// Hint: you may want to re-use your "isEven" function from 01-predicate-functions.js


// create an empty array to push even numbers into
// create loop to cycle through array
// (n % 2 === 0) <--- how you find even numbers

function evens(num){
    var numArray = []
    for (var i = 0; i < num.length; i++){
        if (num[i] % 2 === 0){
            numArray.push(num[i])
        }
    }
    return numArray
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "odds" which takes an array of numbers and returns a new
// array containing only the odd numbers in the given array.
// Hint: you may want to re-use your "isOdd" function from 01-predicate-functions.js


// create an empty array to push even numbers into
// create loop to cycle through array
// (num[i] % 2 === 1 || num[i] % 2 === -1) <--- how you find odds numbers

function odds(num){
    var numArray = []
    for (var i = 0; i < num.length; i++){
        if (num[i] % 2 === 1 || num[i] % 2 === -1){
            numArray.push(num[i])
        }
    }
    return numArray
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "integers" which takes an array of numbers and returns a new
// array containing only the integers in the given array.
// Hint: Do you need a new predicate function for this?
//
// Example:
// integers([3.14, 2.4, 7, 8.1, 2]) --> [7, 2]

function integers(num){
    var newInt = []
    for (var i = 0; i < num.length; i++){
        if (num[i] % 2 === 0 || num[i] % 2 === 1 || num[i] % 2 === -1){
            newInt.push(num[i])
        }
    }
    return newInt
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "squareDance" which takes an array of numbers and returns a
// new array containing the result of squaring each of the numbers in the given array.
//
// Example:
// squareDance([1, 2, 3]) --> [1, 4, 9]
