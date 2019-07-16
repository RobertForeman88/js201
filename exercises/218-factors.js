// Write a function "gcd" that returns the Greatest Common Divisor of two numbers
// If no GCD exists, return 1
// Greatest Common Divisor --> https://tinyurl.com/gr84qca
//
// Examples:
// gcd(5, 1) --> 1
// gcd(3, 15) --> 3
// gcd(50, 20) --> 10

// if statement makes sure the argument is a number
// Math.abs() makes sure its a absolute number
// in my While, 

function gcd(a, b){
    if ((typeof a !== 'number') || (typeof b !== 'number')){
        return false
        a = Math.abs(a)
        b = Math.abs(b)
    }
    while(b){
        var num = b
        b = a % b
        a = num 
    }
    return a
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "factors" which is given a number and returns an array
// containing all its factors.
// What are factors? --> https://tinyurl.com/gncg62o
//
// Examples:
// factors(1) --> [1]
// factors(12) --> [1, 2, 3, 4, 6, 12]
// factors(42) --> [1, 2, 3, 6, 7, 14, 21, 42]

function factors(num){
    var numFactors = [], i;

    for (i = 1; i <= Math.floor(Math.sqrt(num)); i += 1)
        if (num % i === 0){
   numFactors.push(i);

        if (num / i !== i)
    numFactors.push(num / i);
}

    numFactors.sort(function(x, y){
        return x - y;});  
        return numFactors;
        
    }