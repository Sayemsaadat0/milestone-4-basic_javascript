


// find the cheapest price phone

const phone = [
    { name : 'samsung',
    camera : 50,
    storage : 256,
    price : 25000,
    color : 'grey'
},
    { name : 'xiaomi',
    camera : 50,
    storage : 128,
    price : 20000,
    color : 'red'
},
    { name : 'oppo',
    camera : 40,
    storage : 128,
    price : 20000,
    color : 'blue'
},
    { name : 'apple',
    camera : 12,
    storage : 256,
    price : 85000,
    color : 'offwhite'
},
    { name : 'onePlus',
    camera : 50,
    storage : 256,
    price : 45000,
    color : 'black'
}
]

// cheapestPhone = function er nam , (phones= parameter)
function cheapestPhone (phones){
    // phones er length obdi
    let cheapest = phones[0];
for (let i =0 ; i < phones.length ; i ++){
    // notun ekta var niye setake phones er sathe connect korte hbe i er index er sathe
    const phone = phones[i];
// condition hlo je phone er price kom sei phone ke out put a dekhaite hbe so if niye nilam sathe ekta array for loop er baire , 36 no line. 
    if(phone.price < cheapest.price){
        // ei cheapest er vetor phone er value ke add kore dilam
        cheapest = phone;
    }

     
}
// and for loop er baire return kore dilam. jodi vetore kortam taile result 4 bar dekhaito.
return cheapest;
}

const mySelection = cheapestPhone(phone)
console.log(mySelection);




// question - eki value er 2 ta ache . amake ekta dekhacche .. 2tai output pabar jnne ki korte hbe?
