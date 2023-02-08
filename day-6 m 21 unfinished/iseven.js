
function isEven (Number){
    const reminder = Number % 2 ;
    if (reminder == 0){
        return true;
    }
    else {
        return false;
    }
}
const myNUmber = isEven(525);
console.log(myNUmber);
const herNumber = isEven(502);
console.log(herNumber);