// const fibo = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

// fibonacchi hcche emn ekta series jeta ager dui songkhar jogfol diye porer songkha hoy ..
// fibo [4]= fibo[3] + fibo [2];

const fibo = [0 , 1];
for (let i = 2; i <= 15; i++){

    fibo[i]= fibo[i-1] + fibo[i-2];
    // vetore console deya jabe na taile barbarb repeat hbe .na bujhle diye dekh 
}
console.log(fibo);

function add(a, b){
    return a + b;
  }
  console.log(add("adam" + "eve"))