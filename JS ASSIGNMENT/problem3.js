/* তোমাকে একটা function দেওয়া হবে called “isLGSeven()”. এটা ইনপুট হিসেবে একটা number নিবে।  
 */

// A function that will show if the number is greater than 7 or not 
function isLGSeven (number){
    if( typeof number !== 'number'){
        return 'please enter a number to see the result'
    }
    if( number- 7  < 7){
       return number-7;
    }
    else{
        return number * 2
    }
}


const number = isLGSeven(100) ;
console.log(number);
// complete 
