//  Problem 5: Convert your gems into diamond
//  function  called gemsToDiamond().

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

    const firstFriendDiamond  = firstFriendGem  * firstFriendGemPower;
    const secondFriendDiamond = secondFriendGem * secondFriendGemPower;
    const thirdFriendDiamond  = thirdFriendGem  * thirdFriendGemPower;

    const total = firstFriendDiamond + secondFriendDiamond + thirdFriendDiamond;
    if (total >= 2000){
        const subtracting = total - 2000;
       return subtracting;
    }
    else {
        return total
    }
}


const totaldiamond = gemsToDiamond(70 , 70, 45);
console.log(totaldiamond);
// complete 