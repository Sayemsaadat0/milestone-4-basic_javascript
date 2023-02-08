// odd number gulor sum


 function getSumOfAnArray(numbers){
    let sum = 0;
     for (let i = 0; i < numbers.length; i++){
         const index = i;
         const element = numbers[index];
         sum = sum + element ;
        //  console.log(index, element, sum);
     }
      return sum 
     }
     
 const myNum = [2, 3, 4 , 5, 8, 11, 45];
  getSumOfAnArray(myNum); 


  function getOddSumOfAnArray (array){
    let sum = [];
    for (let i = 0; i < array.length ; i++){
        const index = i;
        const element = array[index];
        if ( element % 2 !== 0){
            // console.log(index, element)
            sum.push(element);
        }
    }
    return sum; 
}

const myArrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sum = getOddSumOfAnArray(myArrayNumbers);
// console.log(sum);

const oddNumSum =  getSumOfAnArray(sum); 
console.log('odd num sum is', oddNumSum);
/* ---------------------------------------------------------- */



function evenNumSumOfAnArray (array){
    let evenNumSum = [];
    for (let i=0; i < array.length; i++){
        const index = i;
        const element = array[index];
        if (element % 2 === 0){

            // console.log(index , element);
            evenNumSum.push(element);
        }
    }
    return evenNumSum
}


const myArray = [12, 10, 15, 21, 22, 25, 30, 11];
const evenNumSum = evenNumSumOfAnArray(myArray);
// console.log(evenNumSum);
const evenSum = getSumOfAnArray(evenNumSum);
console.log('the even sum', evenSum)
