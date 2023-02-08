// Remove duplicate items from an array 

 const names = [ 'abul','babul', 'babul', 'dabul','babul', 'kabul', 'sabul', 'nabul', 'gabul',  'kabul', 'nabul','kabul'];


function removeDuplicate (names){
    const unique= [];
    for (i =0; i <names.length; i++){
        const name = names[i];
        if(unique.includes(name) === false){
            unique.push(name);
        }
    }
    
    return unique;
}
const uniqNames = removeDuplicate (names);
// console.log(uniqNames); 





const onekNam = [ 'abul','babul', 'babul', 'dabul','babul', 'kabul', 'sabul', 'nabul', 'gabul',  'kabul', 'nabul','kabul'];

const notunvar2 = [];
function alada (nam){
    for(i=0; i<nam.length; i++){
        const notunVar1 = nam[i];
        if(notunvar2.includes(notunVar1) === false){
            notunvar2.push(notunVar1);
        }
    }
    return notunvar2;
}

const aladaNam = alada(onekNam);
console.log(aladaNam);


