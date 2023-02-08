
function sumOfNumbers (numbers){
    let sum = [];
    for(var i = 0 ; i<numbers.length ; i++){
       allNum = i;
       const element = numbers[allNum];
       sum = sum + element;
        console.log(element, sum);
        
    }
    return sum;
}

const numb = [1, 2, 3 , 4];
const addd = sumOfNumbers(numb);

