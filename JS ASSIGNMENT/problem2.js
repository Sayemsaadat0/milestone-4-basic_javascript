// problem2
//  তোমাকে একটা function দেওয়া হবে called evenOdd(). এটা ইনপুট হিসেবে একটা string নিবে। 

// A function that will return even or odd depending on string array's length

function evenOdd(string) {
  
  for (let i = 0; i < string.length; i++) {
    if (typeof string[i] !== 'string'){
      return 'Please enter a sentencee or word';
    }
    else if (string[i].length % 2 == 0) {
      return 'even';
    }
    else {
        return 'odd'
    }
  }
}

const string = ['200'];
const isEvenOdd = evenOdd(string);
console.log(isEvenOdd);

// complete