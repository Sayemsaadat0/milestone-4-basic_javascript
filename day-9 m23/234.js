// DIVISIBLE JS 



// evabe partechina.. eta valo kore dekhte hbe (next day - kichuta bujhchi ki hcche)
// const numbers = [];
/* for ( let i = 1 ; i <= 50; i++){
     numbers = number[i];
    console.log(numbers);
}
 */


// -show output from 1- 50 

// 1. if the number is divisible by 3 then instead of the number show foo 
for (i=1; i <=50; i++){
    if (i % 3 === 0){
        console.log('fuu')
    }
    else{

        console.log(i);
    }
}

// 2. if the number is divisible by 5 then instead of the number show bar 
for (i = 1 ;  i <= 50; i++){
    if(i % 5 === 0){
        console.log('bar')
    }
    else{
        console.log(i);
    }
}


//  2 and 3 together
for (i = 1 ;  i <= 50; i++){
    if(i % 5 === 0){
        console.log('bar')
    }
    else if (i % 3 === 0){
               console.log('fuu')
          }
    else{
        console.log(i);
    }
}



// 4. if the number is divisible by both 3 and 5 then instead of the number show foobar 

for (i = 1 ;  i <= 50; i++){
    if(i % 5 === 0 && i % 3 === 0){
        console.log('foobar')
    }
    else{
        console.log(i);
    }
}


// kmne kmne jani ekai pere gelam




