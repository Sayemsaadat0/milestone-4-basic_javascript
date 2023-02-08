
// js case sesnitive tai kono ekta boro choto hoilei seta error dekhabe , ei theke bachte data conditioon er somoy dui jaygatei toLowerCase kore dile sob choto hater hy jbe and data error dekhabe na..
// arekta ache toUpperCase seta sob guloke bor kore dibe .. but manush toLowerCase beshi use kore...
const userName = 'blackpink';
const userInput ='blacKpink';

if (userName.toLowerCase === userInput.toLowerCase){
    console.log('valid user');
}
else {
    console.log('invalid user')
}