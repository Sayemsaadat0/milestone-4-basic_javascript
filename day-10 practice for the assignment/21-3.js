/* make a function that tells if the umber is odd or even -
there is two types of solving this problem.
one- using return and Boolean and two using just console log.  */
// type 1 
function isEven (number){
    
    if( number % 2 === 0){
       console.log('this is even')
    }
    else{
        console.log('its Odd')
    }
}

isEven(1964) ;

// type 2
function iseven2 (number){
    const reminder = number % 2;
    if(reminder === 0){
        return true
    }
    else{
        return false
    }
}

const numbers = 2023;
const isEvenORNot = iseven2(numbers);
console.log(isEvenORNot);
