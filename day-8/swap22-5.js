let first = 5;
let second = 10;
// eivabe korle hbe na karon jei moment a nicher step a jabe value already changed
// second = first ;
// first = second;

// ejnne ektar value ke age kothao store kore rakhte hbe jate first change hye geleo store a ager value e thake ;
// aproach 1
// const tempo = first;
// first = second;
// second = tempo;
// console.log(first, second);

// approach 2 distructuring

[ first, second] = [ second, first];

console.log(first, second);






