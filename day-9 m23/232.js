// summary-
// . more slice
// .more splice

// slice 
const frnd = [46, 64, 74,  774, 45,  46, 87, 1, 65, 4, 65, 94];

const partial = frnd.slice(2, 8);
// 2 no index er age katchi and 8 num index er age kete felchi .. 
// console.log(partial);
// array theke kono ekta part nite hoile amra slice marbo- karon array theke kono akta part niye nileo original array ager mtoi thake 
// console.log(frnd);


// splice 
/* 1.removes elements from an array . 2. and if necessarry inserts new elements in their plaace and 3. returning the deleted element 

and will change the original array*/

const partial2 = frnd.splice(2, 9);
// splice count kore koi theke shuru hbe ar koyta kete felbe seta. mane shuru vvalue ta index er holeo porer value te count hbe koyta kata hbe..
console.log(partial2);
console.log(frnd);

// splice jeta kore prothom duita value ke she katakatir jnne use kore ar pore konoo value add korle seta oi kata jaygay replace kore dey -example
const partial3 = frnd.splice(2, 4, 64, 64,  654, 87, 351, 897);
console.log(partial3);
console.log(frnd);
//  64 theke value gula kata jaygay replace hye jabe ..


