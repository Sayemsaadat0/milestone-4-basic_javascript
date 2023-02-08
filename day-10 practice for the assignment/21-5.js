// joto number ache aobgular jogfol ber koro -
// eka eka first try pari nai ,sadd

// gadha ekhane to kono condition deyni ekhane songkha jog korte koiche mane choloman event .eine loop hbe gadha loop 
/* function oddSum (numbers){
    const isOdd = numbers % 2 ;
    let sum = [];
    if (isOdd !== 0 ){
        console.log(sum);
        sum.push(numbers);
    }
}
const array = [2, 3, 4 , 5, 8];
const arraySum = oddSum(array);
console.log(arraySum); */


function getSumOfAnArray(numbers){
   let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element ;
        console.log(index, element, sum);
    }
     return sum 
    }
    
const myNum = [2, 3, 4 , 5, 8, 11, 45];
 getSumOfAnArray(myNum);



/* const total = getSum(myNum);
 console.log(total); */
