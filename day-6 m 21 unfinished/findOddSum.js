// 21.5
// function findOddSumOfArray(numbers){

//     let sum = 0;
// for ( let i = 0 ; i < numbers.length ; i++){
//     const index = i;
//     const element = numbers[index];
//     sum = sum + element;
//     console.log(index , element, sum);
// }
// }


/* function findOddSumOfArray(numbers){

    const oddnum = [1, 3];
for ( let i = 0 ; i < numbers.length ; i++){
    const index = i;
    const element = numbers[index];
   if (element % 2 !== 0){
    console.log(index , element);
    oddnum.push(element);
   }   
}
 console.log(oddnum)
 return oddnum;
}

const myNumber = [ 12, 64,99, 78, 55, 33];
const myOddNum = findOddSumOfArray(myNumber);
console.log( myOddNum);
 */




function findOddSumOfArray(numbers){

    const oddnum = [1, 3];
for ( let i = 0 ; i < numbers.length ; i++){
    const index = i;
    const element = numbers[index];

   if (element % 2 !== 0){
   //  console.log(index , element);
    oddnum.push(element);
  
   }   
   
}
for(let i = 0 ; i < oddnum.length ; i++){
    let number = numbers[i]
     console.log(number);
  }
 return element
//  console.log(oddnum)
//  return oddnum;
}

const myNumber = [ 12, 64,99, 78, 55, 33];
const myOddNum = findOddSumOfArray(myNumber);
console.log( myOddNum);



var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 for(var i = 0 ; i < numbers.length ; i++){
   var number = numbers[i]
    console.log(number);
 }