 /* 
function reverseString (text){

    for (let i = 0 ; i < text.length ; i++){
        const element = text[i];
        console.log(element);
    }

}
const myString = 'i am a good boy';
const reversed = reverseString(myString);

 */
// reverse way
// reverse korar somoy undefined kichu issue hoile condition a -1 bosay dibo.. karon index shuru hoy  0 theke ar shesh hoy less then er value te , ei less then ke puro index er vetore ante -1 use korte hbe 
// ekkta faka arrray nite hbe reverrsed value ke niye rakhar jnne
/* let fakaarrray = '';
function reverseString2 (text2){

    for (let i = text2.length-1 ; i >=0 ; i--){
        const element2 = text2[i];
        // tarpor sei faka array ke jog dite hbe , faka ere te asha element 2 er value guloke
        fakaarrray = fakaarrray + element2 ;
        console.log(element2, fakaarrray);
    }
    // tarpor return korte hbe sei fakaarray ke
    return fakaarrray ;

}
const myString2 = 'i am a good boy';
const reversed2 = reverseString2(myString2 );

console.log('kichu holo naki', fakaarrray)  */


// word
function reverseWord (str){
    const words = str.split(' ');
    console.log(words);
    const result = [];
    // reverse pete hole length er ekta kom man obdi dhorte hbe and i-- diye ekta kore man komaite hbe
    for ( let i = words.length-1; i >=0; i--){
        const element = words[i];
        result.push(element);
    }
    const reversed = result.join(' ');
    console.log(reversed)
}

const myString = 'let me be a good boy';
reverseWord(myString);


