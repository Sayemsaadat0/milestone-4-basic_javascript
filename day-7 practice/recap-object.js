// 20.6 7 & 9 module

// how to declare an object
var anObjectName = {
    keys1 : 'key values',
    keys2 :  367,
    keys4 :  654,
    keys5 :  984,
    keysName6 :  '564576457 this could be a name also',
    keys7 : 'yahooo it will be tough'
}
console.log(anObjectName)


/* anObjectName er vetorer kono ekta keys er value amar lagbe sob gulor dorkar nei,
sei somoy */

console.log(anObjectName.keys5);

// object er vetor kono ekta keys er value ke update or change korte hole
// 1
anObjectName.keys5 = 111;
console.log(anObjectName); 
// // 2
anObjectName['keys7']= 'change hye jao';
console.log(anObjectName);

// 3 vabe kono ekta keys/property er value amra ber korte pari ekta object er vetor theke 

// situation1 
/* using (.) dott - jkhn amra keys er nam gula jani*/
var keyCount = anObjectName.keys2;
console.log(keyCount);
// situation 2 alternative s1 - array er moto kore 
var findingValue = anObjectName['keysName6'];
console.log(findingValue);


// situation 3 - when we dont know any of the keys name and the values -
// to know every propertyname from an object
// we can find the keys within an array
 var properties = Object.keys(anObjectName);
console.log(properties); 
 
// to know every propert Values from an object
// we can find the keys Value within an array
var keyValues = Object.values(anObjectName);
console.log(keyValues);

// situation 3
// keys name ta onno arekta variable er vetore niye seitar sathe arekta var niye objectName er sathe [] bracket diye connect kore pete pari

// we will use this more
 var propName = 'keysName6';
 var propValue = anObjectName[propName];
 console.log(propValue);

//  20.8
var anObjectName = {
    keysName1: 'key values',
    keysName2 :  367,
    keysName3 :  654,
    keysName4 :  984,
    keysName5 :    1,
    keysName6 :  100
}

// loop chaliye value and keynames output dekha jay 2 vabe

// TOUGH ONE 

/* we dont do that here 
console.log(keys[i]); */

// first we need to define where the key  and values are and whats connected to the  const, named keys and valuee 

const keys = Object.keys(anObjectName);
const valuee = Object.values(anObjectName);

// then we took the for loop to made an action
// here suppose we have an array named keys,
// var keys = [];
 for ( var i = 0 ; i < keys.length ;
    i++){
// we will put the keys[i] in a variable and then we will call  the variable name for thee output- 
var VarName = keys[i];
var forTheValue = anObjectName[VarName];
// to see the output together, we must put both of them
console.log(VarName, forTheValue);
    } 

    // EASY ONE
    //by using 'for in' loop

    for (var varName in anObjectName){
        var value = anObjectName[varName];
        console.log(varName, value);
    }
    // q- varName er sathe connefct korle je value ta amra pacchi seta ashole kivabe pacchi eta bujhte parchi na 98 no , 91 no line .. 