// 2. You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
// triangle is Isosceles or not using if-else.

// Isosceles => two sides are equal

var side1 = 9;
var side2 = 8;
var side3 = 9;

if (side1 == side2 || side1 == side3){
    console.log('Isosceles')
}
else if(side2 == side3 || side2 == side1 ){
    console.log('not a Isosceles')
}
else{
    console.log('not Isosceles')
}
