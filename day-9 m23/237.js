// summ
// array of objects 

// price  single item
/* const  shoppingcart = [
     { name : 'shoe',
     price : 1200,
     },
     { name : 'shirt',
     price : 2500,
     },
     { name : 'pant',
     price : 2800,
     },
     { name : 'belt',
     price : 800,
     },
     { name : 'others',
     price : 3200,
     }
]


function totalCost (products){
    let sum = 0;
for (let i = 0; i <products.length; i++){
    const product = products[i]
    sum = sum + product.price
    // console.log(product);
}

return sum
}

const expense = totalCost(shoppingcart);
console.log(expense); */

// quantitycart price * how many item
const  shoppingcart = [
    { name : 'shoe',
    price : 1200, quantity : 2
    },
    { name : 'shirt',
    price : 2500, quantity : 5
    },
    { name : 'pant',
    price : 2800, quantity : 3
    },
    { name : 'belt',
    price : 800, quantity : 2
    },
    { name : 'others',
    price : 3200, quantity : 8
    }
]


function totalCost (products){
   let sum = 0;
for (let i = 0; i <products.length; i++){
   const product = products[i]

//    2 line equation
   const totalPrice = product.price * product.quantity;
   sum = sum + totalPrice

// 1 line equation
  /*  sum = sum + product.price * product.quantity; */
  
}

return sum
}

const expense = totalCost(shoppingcart);
console.log(expense);