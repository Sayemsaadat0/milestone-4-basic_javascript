//  তোমাকে একটা function দেওয়া হবে called mindGame(” যা ইনপুট হিসেবে একটা positive number নিবে।")

// A function with multiple operations.  
function mindGame (number){
    if (typeof number !== 'number'){
        return 'Please input a Number'
    }
return (number * 3 + 10) / 2 - 5;
}

const number = mindGame('100');
console.log(number);
// completed
