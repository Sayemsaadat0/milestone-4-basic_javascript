// 21.2 unit converts function

// easy 
// inch to feet / toFixed

 // function name should be meaningfull
function inchToFeet (inches){
    const feet = inches / 12;
    return feet;
}
const player1Inches = 112;
const player1feet = inchToFeet(player1Inches);
// console log korar somoy toFixed() diye dott err por koya value hbe seta decide kora jay
console.log(player1feet);


// miles to kilo meter

function milesToKm (miles){
    // 1 ,iles = 1.60934 km
    kilometer = miles * 1.61 ;
    // shudhu value dilei hbe na setake return kore dite hbe .
    // return er somoy kono bracket dite hbe na
    return kilometer;
}


const naogaToDhakaMiles = 119.64 ;
const naogaToDhakaKilometer = milesToKm(naogaToDhakaMiles);
console.log(naogaToDhakaKilometer);
/* ................ */


