// leap year or not 
function isLeapYear (year){
    
    if( year % 4 === 0){
       console.log('this ear is a leap year')
    }
    else{
        console.log('its not a leap year')
    }
}

isLeapYear(1964) ;










// type 2
function isLeapYear2 (year){
    const reminder = year % 4;
    if(reminder === 0){
        return true
    }
    else{
        return false
    }
}

const yearCount = 2023;
const leapYear = isLeapYear2(yearCount);
console.log(leapYear);