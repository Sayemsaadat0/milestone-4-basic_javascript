

function boi (a, b){
    // console.log(a, b);
    var sum = a+ b;
   console.log('givenMoney:', sum);
   var price = a-b ;
   console.log('bookMoney:', price);
   var returnMoney = sum - price ;
    return returnMoney;

}

var tota = boi(80, 60);
console.log('return korben', tota);