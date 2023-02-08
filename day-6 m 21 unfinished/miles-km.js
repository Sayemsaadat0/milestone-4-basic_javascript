
function milesToKm (miles){
    const Km = miles * 1.60 ;
    return Km ;
}

const naogaonToDhakaMiles = 119.64 ;
const naogaonToDhakaKm = milesToKm(naogaonToDhakaMiles);
const naogaonToDhakaKmTwoDecimal = naogaonToDhakaKm.toFixed(2);
console.log(naogaonToDhakaKmTwoDecimal);