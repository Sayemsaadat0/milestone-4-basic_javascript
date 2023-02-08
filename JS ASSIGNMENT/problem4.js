/* Problem 4: Finding Bad data
function দেওয়া হবে called findingBadData(). 
 */

//  A function that will return how much the Bad Data inside an array has .



function findingBadData(array) {
    let negatives = [];
   
    for (let i = 0; i < array.length; i++) {
        if(typeof array[i] !== 'number'){
            return 'input numbers inside the array'
        }
        else if (array[i] < 0) {
            negatives.push(array[i]);
        }
    }
    return negatives.length;
  
}

const array = [-1, -2, -3 ,0,0,0,0,0];
console.log(findingBadData(array)); 