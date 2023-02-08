// 1+2+3+4+5+6+7 
// addiotion
function factorial (numbers){
    let sum = 0;
    for (i = 1 ; i <= numbers.length; i++){
        sum = sum + i
        console.log(i, sum);
    }
    return sum;
}
const myNumber = [1, 2, 3, 4, 5, 6, 7];
const total = factorial(myNumber);
console.log(
   'toal number of the factorial series :', total);



//  multiplication of numbers
/* function factorial2 (numbers){
    let sum = 1;
    for (i = 1 ; i <= numbers.length; i++){
        sum = sum * i
        console.log(i, sum);
    }
    return sum;
}
const myNumber2 = [1, 2, 3, 4, 5, 6, 7, 8];

const total2 = factorial2(myNumber2);
console.log(
   'toal number of the factorial series :', total2);


 */
// easy way
   function factorial2 (numbers){
    let sum = 1;
    for (i = 1 ; i <= numbers; i++){
        sum = sum * i
        console.log(i, sum);
    }
    return sum;
}
const myNumber2 = [1, 2, 3, 4, 5, 6, 7, 8];

const sum = factorial2(7)


