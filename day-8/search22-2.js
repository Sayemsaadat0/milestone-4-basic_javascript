
const lyrics = 'tumi bondhu kala pakhi ami jeno ki, bosonto kale ami tomay bolte parini .';

//  string er vetor kono word ache kina seta khujte inclueds use kora hoy .. ar number er khetre use hoy indexOf();includes('jare khujbo tare')


/* const doesExist = lyrics.includes('pakhi');
console.log( doesExist); */


// and eitao case sensitive;
// case sensitive ignore kore 2ta jaygatei lower case kore dite hbe .. 

const aString = 'Pakhi';

const lyricsLowerCase = lyrics.toLowerCase()

const aStringLower = aString.toLowerCase()

const doesExist = lyricsLowerCase.includes(aStringLower);

console.log(doesExist);


//we can do this in one line 
// to see the result commennt out 18 and 16 number line 

const doesExistOneLine = lyrics.toLowerCase().includes(aString.toLowerCase())

console.log( doesExistOneLine);

// we can do this by using indexOf and looop- 
// amra jani je indexOf jodi -1 result dey er mane holo je oi value ta sei arrray er vetore nai
/* so amra bole pari if lyrics er indexOf (jeta khujbo) -1 na hoy taile seta ei array te exist kore-
mathmatically - */
if (lyrics.indexOf('jenoO') !== -1){
    console.log('the word do exist in th array');
}
else {
    console.log('it doesnt exist');
}



// echarao startsWinds and endsWith ache