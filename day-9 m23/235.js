/* fixed - per item requirements 
variabel - quantity
chair - 3 Cft 
table - 10 cft 
bed -   50 cft 
 */
// chair table bed banaite ja ja lagbe tar moddhe kichu jinish ekdom required , mane egulo change hbe na segula holo esb banaite je je jinish lagbe segula . but jeta change hobe seta holo koto gula chair table banano hbe. ami 10 ta banaileo eki jinish diye banaite hbe abar ami w ta banailei eki jinish diye banaite hbe .. 

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    console.log(chairQuantity,  tableQuantity,  bedQuantity)

    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;

    const total = chairWood + tableWood + bedWood;
    return total;
}

const totalWood = woodCalculator(4, 1, 2);
console.log('total wood require', totalWood);