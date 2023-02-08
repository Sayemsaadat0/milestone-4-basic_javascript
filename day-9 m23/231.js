/* summary -
1.array.isArray
2.includes 
3.concat */

const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = {
    id:544,
    class : 5,
    name : 'habi jbai'
};


// sob kichuke typeOf diye check kora geleo array ke check kora jay na. tai array ke check korte hoile console a Array.isArray() namer tag amra use korbo .
const arrayDitect = [ 223, 464, 64];

console.log(Array.isArray(arrayDitect));
// array er vetore kono kichu ache kina seta jante includes use kora better .. example-
console.log(arrayDitect.includes(564)); 
// expected answer false
console.log(arrayDitect.includes(64));
// expected answer true

// concat : put to array togehter
// new array er vetor joto value ache segula praton kono array er vetore push korar jnne concat use kora hoy ..sob value add hye jabe ei khetre

const oldRF = [121, 113, 125];
const newRF = [12, 13, 15];
const allRf = newRF.concat(oldRF);
console.log(allRf);