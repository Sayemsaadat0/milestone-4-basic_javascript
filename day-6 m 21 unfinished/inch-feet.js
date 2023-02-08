const myInch =12;
const myFeet = myInch/ 12;
console.log(myFeet);



function inchToFeet (inches){
const feet = inches / 12 ;
return feet;
}
const dadaInches = 144;
const dadaFeet = inchToFeet(dadaInches);
console.log(dadaFeet);  

const nanainches = 168;
const nanaFeet = inchToFeet(nanainches);
console.log(nanaFeet);