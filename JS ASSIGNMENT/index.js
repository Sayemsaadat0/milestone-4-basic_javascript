// A function with multiple operations.  
function mindGame (number){
    if (typeof number !== 'number'){
        return 'Please input a Number'
    }
return (number * 3 + 10) / 2 - 5;
}



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


//  A function that will convert the gems of three friends to diamond and how much it is togehter
function gemsToDiamond(firstFriendGem, secondFriendGem, thirdFriendGem){
    const firstFriendGemPower  = 21;
    if (typeof firstFriendGem !== 'number'){
        return 'input a valid number'
    }
    const secondFriendGemPower = 32;
    if (typeof secondFriendGem !== 'number'){
        return 'input a  valid number'
    }
    const thirdFriendGemPower  = 43;
    if (typeof thirdFriendGem !== 'number'){
        return 'input a valid number'
    }
    const firstFriendDiamond = firstFriendGem  * firstFriendGemPower;
    const secondFriendDiamond = secondFriendGem * secondFriendGemPower;
    const thirdFriendDiamond   = thirdFriendGem  * thirdFriendGemPower;

    const total = firstFriendDiamond + secondFriendDiamond + thirdFriendDiamond;
    if (total >= 2000){
        const subtracting = total - 2000;
       return subtracting;
    }
    else {
        return total
    }
}

