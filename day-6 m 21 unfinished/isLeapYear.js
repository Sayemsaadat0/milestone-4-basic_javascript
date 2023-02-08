function isLeapYear (Year){
    const reminder = Year % 4;
    if(reminder===0){
    return true
    }
    else {
        return false
    }
}

const myBirthYear = isLeapYear(1999) ;
console.log(myBirthYear);
const mySisterBirthYear = isLeapYear(1980);
console.log(mySisterBirthYear);