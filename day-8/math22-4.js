const result = Math.pow(3, 8);
// console.log(result);


// first num choto and porer number boro
// ekhane biyog korleo result vul asbe jodio gap er value 20
/* const num1= 25;
const num2 = 45;
const gap = num1 - num2;
if (gap < 5 ){
console.log('habi jabi biye shadi' );
}
else {
    console.log('dure dure thako');
} */


// ei vul theke bachte math.abs(absolute) namer ekta jinish amra use orbo , etar mane holo positive ba negetive seta dekhar dorkar nai ,, maain value kei acceppt koro;
/* const num1= 25;
const num2 = 45;
const gap = Math.abs(num1 - num2) ;
if (gap < 5 ){
console.log('habi jabi biye shadi' );
}
else {
    console.log('dure dure thako');
} */


// doshomik value ke asolute value bananaor 3 ta way ache , mane 3ta tag diye amra etake change kore pari 
// 1 by using "ROUND"
// jhamela hoilo jodi value te < .50 thake taile ager value er round bosabe r jdi >.50 hoy taile porer man ta dekhabe ..
const numb = 2.664 ;
const fullNumb = Math.round(numb);
console.log(fullNumb);

// 2. doshomik er por kono value thaklei next absolute number ke result hisebe dibe ..by using ceil
 const nm = 4.001;
 const vlue = Math.ceil(nm);
//  expectiing result 5
console.log(vlue); 
//  sbar nicher value ke dhore dibe
const nm2 = 45.647;
const vlue2 = Math.floor(nm2);
console.log(vlue2);

// arekta ache random.. eta randomly value dibe .. but dibe amader zero theke
const random = Math.random()*100
console.log(random);

// for loop a chaliye 
// math.round deya karon eta na dile doshomik asbe;
for ( i = 0; i<20; i++){
    const random1= Math.round(Math.random()*6);
    console.log(random1);
}