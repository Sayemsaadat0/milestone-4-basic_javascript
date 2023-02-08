const lyrics = 'tumi bondhu kala pakhi ami jeno ki. bosonto kale ami tomay bolte parini .';



// SPLIT
// protita word ke alada alda kore dekhabe karon protita word er sheshe space ache
const part = lyrics.split(' ');
console.log(part);

// sentence complte hbar por dott thakle porer sentence abar nicher line a chole jabe and abar dott thakle abar porer sentence porer line a chole jabe
const dott = lyrics.split('.');
console.log(dott);

// ar protita alphabet ke alada korar dorkar hole split er value none diye rakhte hbe

const carc = lyrics.split('');
console.log(carc);


// SLICE -ekhane duita value dite hbe - 1=jekhan theke shuru hbe , 2=jetay giye shesh hbe . last value er postion ta nibe na  . condition holo < less then er mto
const katakati = lyrics.slice( 10, 17);
console.log(katakati);


