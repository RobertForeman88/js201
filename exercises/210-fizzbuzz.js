// Write a function "fizzbuzz" that returns the fizzbuzz string for an input number.
// A fizzbuzz string is defined as the following:
// For every number from 1 to the input number
// - if that number is not a multiple of 3 or 5, add a period "." to the fizzbuzz string
// - for every number that is a multiple of 3 (but not 5), add "fizz" to the fizzbuzz string
// - for every number that is a multiple of 5 (but not 3), add "buzz" to the fizzbuzz string
// - for every number that is a multiple of 3 and 5, add "fizzbuzz" to the fizzbuzz string
//
// Examples:
// fizzbuzz(3) --> '..fizz'
// fizzbuzz(15) --> '..fizz.buzzfizz..fizzbuzz.fizz..fizzbuzz'

function fizzbuzz(num){
    let fizzOff = []
    for (let i = 1; i <= num; i++){
        fizzOff.push(i)
    }


function checkMultiple(num){
    if (num % 3 == 0 && num % 5 == 0){
        return 'fizzbuzz'
    }

    if (num % 3 == 0 ){
       return 'fizz'
    }
    if (num % 5 == 0){
       return 'buzz'
    }
    if (num % 3 !== 0 && num % 5 !== 0){
        return '.'
     }

     
}
let newArray = fizzOff.map(checkMultiple)
return newArray.join('')
}


//.map .join
