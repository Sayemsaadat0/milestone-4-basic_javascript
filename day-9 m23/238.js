/* ticket kinte aschi
1. if ticket number is less than 100 , per ticket price 100
2.more than 100 but les than 200 , then first 100 ticket 100 taka and rest tickets will be 90 taka per piece
3. more than 200 first 100 ticket - 100 taka, 101-200 90 taka
and above 200+ = 70 taka  */


/* advanced */

function ticketPrice ( ticketQuantity ){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if (ticketQuantity <= 100){
        const price = ticketQuantity * first100Rate ;
        return price
    }
    else if ( ticketQuantity <= 200){
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const 
        restTicketPrice = restTicketQuantity * second100Rate;
       const totalPrice = first100Price + restTicketPrice;
       return totalPrice;


    }
    else {
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        above200TicketQuantity = ticketQuantity - 200;
        const above200TicketPrice = above200TicketQuantity * restTicketRate;
        const resttotalcost = first100Price + second100Price + above200TicketPrice;
        return resttotalcost ;

    }
}

const price1 = ticketPrice(201)
console.log(price1);